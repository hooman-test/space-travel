package com.nab.spacetravel.entity;

import java.util.List;

/**
 * @author Hooman Noroozinia
 * @since 2019-05-04
 */
public class Shuttle {
    private int id;
    private Direction direction;
    private int currentCapacity;
    private double currentWeight;
    private Planet currentPlanet;
    private Planet nextDestination;
    private List<LifeForm> passengers;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Direction getDirection() {
        return direction;
    }

    public void setDirection(Direction direction) {
        this.direction = direction;
    }

    public int getCurrentCapacity() {
        return currentCapacity;
    }

    public void setCurrentCapacity(int currentCapacity) {
        this.currentCapacity = currentCapacity;
    }

    public double getCurrentWeight() {
        return currentWeight;
    }

    public void setCurrentWeight(double currentWeight) {
        this.currentWeight = currentWeight;
    }

    public Planet getCurrentPlanet() {
        return currentPlanet;
    }

    public void setCurrentPlanet(Planet currentPlanet) {
        this.currentPlanet = currentPlanet;
    }

    public Planet getNextDestination() {
        return nextDestination;
    }

    public void setNextDestination(Planet nextDestination) {
        this.nextDestination = nextDestination;
    }

    public List<LifeForm> getPassengers() {
        return passengers;
    }

    public void setPassengers(List<LifeForm> passengers) {
        this.passengers = passengers;
    }
}
