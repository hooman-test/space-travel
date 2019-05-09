package com.nab.spacetravel.controller;

import com.nab.spacetravel.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

/**
 * @author Hooman Noroozinia
 * @since 2019-05-04
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ShuttleController {

    @Autowired
    private LifeFormController lifeFormController;

    @Autowired
    private Environment env;

    private List<Shuttle> shuttles = setupShuttles();

    private List<Shuttle> setupShuttles() {
        List<Shuttle> shuttles = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            Shuttle s = new Shuttle();
            s.setId(i);
            s.setPassengers(new ArrayList<>());
            s.setCurrentWeight(0);
            s.setCurrentCapacity(0);
            shuttles.add(s);
        }
        return shuttles;
    }


    private List<Shuttle> generateShuttle() {
        List<Shuttle> shuttles = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            Shuttle s = new Shuttle();
            s.setId(i);
            s.setCurrentCapacity(20);
            s.setCurrentWeight(455);
            s.setCurrentPlanet(Planet.getPlanetById((int) Math.round(Math.floor(Math.random() * 5))));
            s.setNextDestination(Planet.getPlanetById((int) Math.round(Math.floor(Math.random() * 5))));
            s.setDirection(Direction.NEAR);

            List<LifeForm> randoms = new ArrayList<>();
            for (int j = 0; j < 20; j++) {
                LifeForm form = new LifeForm();
                form.setId(j);
                form.setWeight(Math.round(Math.random() * 300));
                int sourceId = (int) Math.round(Math.floor(Math.random() * 5));
                form.setSourcePlanet(Planet.getPlanetById(sourceId));
                int destId;
                do {
                    destId = (int) Math.round(Math.floor(Math.random() * 5));
                } while (sourceId == destId);
                form.setDestinationPlanet(Planet.getPlanetById(destId));
                randoms.add(form);
            }
            s.setPassengers(randoms);

            shuttles.add(s);
        }
        this.shuttles = shuttles;
        return shuttles;
    }

    @GetMapping("/shuttle")
    public List<Shuttle> getShuttle() {
        return shuttles;
    }

    /**
     * Defines the direction of this lifeForm
     *
     * @param lifeForm
     * @return
     */
    public Direction evaluateDirection(LifeForm lifeForm) {
        Planet source = lifeForm.getSourcePlanet();
        Planet dest = lifeForm.getDestinationPlanet();
        if (source.getId() < dest.getId()) {
            return Direction.FAR;
        } else {
            return Direction.NEAR;
        }
    }

    @GetMapping("/evaluateCost")
    public List<ShuttleCost> evaluateCost(@RequestBody LifeForm lifeForm) {
        if (shuttles == null) {
            throw new RuntimeException("No shuttles defined. Read the instruction.");
        }
        List<ShuttleCost> shuttleCosts = new ArrayList<>();
        for (Shuttle shuttle : shuttles) {
            //evaluate shuttle arrival to customer
            int arrivalCost = evaluateDirectionCost(shuttle.getCurrentPlanet(), lifeForm.getSourcePlanet(), shuttle.getDirection());

            //evaluate carrying customer to destination
            int directionCost = evaluateDirectionCost(lifeForm.getSourcePlanet(), lifeForm.getDestinationPlanet(), lifeForm.getDirection());

            ShuttleCost shuttleCost = new ShuttleCost();
            shuttleCost.setShuttle(shuttle);
            shuttleCost.setCost(arrivalCost + directionCost);
            shuttleCosts.add(shuttleCost);
        }
        return shuttleCosts;
    }

    @GetMapping("/assignLatest")
    public void assignLatestLifeFormToLowestCostShuttle() {
        LifeForm lf = lifeFormController.getLatestLifeForm();
        List<ShuttleCost> shuttleCosts = evaluateCost(lf);
        ShuttleCost cost = shuttleCosts.stream().filter(c -> {
            double totalWeight = 0;
            for (LifeForm l : c.getShuttle().getPassengers()) {
                totalWeight += l.getWeight();
            }
            return (c.getShuttle().getPassengers().size() < 20) && ((totalWeight + lf.getWeight()) < 4000);
        }).min(Comparator.comparing(ShuttleCost::getCost)).get();
//            cost.getShuttle().getPassengers().add(lf);
        shuttles.forEach(s -> {
            if (s.getId() == cost.getShuttle().getId()) {
                s.getPassengers().add(lf);
            }
        });
    }

    int evaluateDirectionCost(Planet source, Planet dest, Direction dir) {
        //todo: work with enum ordinal instead of id
        int planetCount = Integer.parseInt(env.getProperty("planets.count"));
        int cost;
        int srcId = (source == null) ? 0 : source.getId();
        int destId = (dest == null) ? 0 : dest.getId();
        if (dir == null) {
            return 0;
        }
        switch (dir) {
            case FAR:
                if (destId > srcId) {
                    cost = destId - srcId;
                } else {
                    cost = (planetCount - srcId - 1) + Math.abs(destId - planetCount) - 1;
                }
                break;
            case NEAR:
                if (srcId > destId) {
                    cost = srcId - destId;
                } else {
                    cost = srcId + destId;
                }
                break;
            default:
                cost = Integer.MAX_VALUE;
                break;
        }
        return cost;
    }

    private boolean shuttleIsEmpty(Shuttle s) {
        return (s.getPassengers() == null || s.getPassengers().size() == 0) && s.getCurrentWeight() == 0 && s.getCurrentCapacity() == 0;
    }

    void evaluateShuttleDirection(Shuttle s) {
        if (s.getDirection() == null) {
            if (!shuttleIsEmpty(s)) {
                Planet p = findTheClosestPlanetByDirection(s);
                s.setNextDestination(p);
            }
        } else {
            return;
        }
    }

    private Planet findTheClosestPlanetByDirection(Shuttle s) {
        throw new RuntimeException();
    }

    private PlanetDirection findTheClosestPlanetOfPassengers(Shuttle s) {
        throw new RuntimeException();
    }


    public void move(Shuttle s) {
        //evaluate shuttle direction
        if (s.getDirection() == null) {
            if (shuttleIsEmpty(s)) {
                return;
            } else {
                if (s.getCurrentPlanet() == null) {
                    //because it is not defined in the question that where are the shuttles at first...
                    s.setCurrentPlanet(s.getPassengers().get(0).getSourcePlanet());
                    s.setDirection(evaluateDirection(s.getPassengers().get(0)));
                    s.setNextDestination(s.getPassengers().get(0).getDestinationPlanet());
                } else {
                    PlanetDirection pd = findTheClosestPlanetOfPassengers(s);
                    s.setDirection(pd.getDirection());
                    s.setNextDestination(pd.getPlanet());
                }
            }
        }

        //move shuttle on step
        moveOneStepForward(s);
    }

    private void moveOneStepForward(Shuttle s) {
        Planet currentPlanet = s.getCurrentPlanet();
        int destinationPlanetId;
        switch (s.getDirection()) {
            case NEAR:
                if (currentPlanet.getId() != 0) {
                    destinationPlanetId = currentPlanet.getId() - 1;
                } else {
                    destinationPlanetId = 1;
                    s.setDirection(Direction.FAR);
                }
                s.setCurrentPlanet(Planet.getPlanetById(destinationPlanetId));
                break;
            case FAR:
                int lastPlanetIndex = Integer.valueOf(env.getProperty("planets.count")) - 1;
                if (currentPlanet.getId() != lastPlanetIndex) {
                    destinationPlanetId = currentPlanet.getId() + 1;
                } else {
                    destinationPlanetId = lastPlanetIndex - 1;
                    s.setDirection(Direction.NEAR);
                }
                s.setCurrentPlanet(Planet.getPlanetById(destinationPlanetId));
                break;
            default:
                throw new RuntimeException();
        }
    }


    public void stepOutPassenger(Shuttle s) {
        Planet current = s.getCurrentPlanet();
        List<LifeForm> passengers = s.getPassengers();
        for (LifeForm passenger : passengers) {
            if (passenger.getDestinationPlanet().equals(current)) {
                passengers.remove(passenger);
            }
        }
        evaluateCapacityAndWeight(s);
    }

    public void stepUpPassenger(Shuttle s) {

        evaluateCapacityAndWeight(s);
    }

    void evaluateCapacityAndWeight(Shuttle s) {
        List<LifeForm> passengers = s.getPassengers();
        double weight = 0;
        for (LifeForm passenger : passengers) {
            weight += passenger.getWeight();
        }
        s.setCurrentCapacity(s.getPassengers().size());
        s.setCurrentWeight(weight);
    }
}
