package com.nab.spacetravel.entity;

import java.util.Objects;
import java.util.StringJoiner;

/**
 * @author Hooman Noroozinia
 * @since 2019-05-03
 */
public class LifeForm {
    private int id;
    private double weight;
    private Planet sourcePlanet;
    private Planet destinationPlanet;
    private Direction direction;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public Planet getSourcePlanet() {
        return sourcePlanet;
    }

    public void setSourcePlanet(Planet sourcePlanet) {
        this.sourcePlanet = sourcePlanet;
    }

    public Planet getDestinationPlanet() {
        return destinationPlanet;
    }

    public void setDestinationPlanet(Planet destinationPlanet) {
        this.destinationPlanet = destinationPlanet;
    }

    public Direction getDirection() {
        return direction;
    }

    public void setDirection(Direction direction) {
        this.direction = direction;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", LifeForm.class.getSimpleName() + "[", "]")
                .add("weight=" + weight)
                .add("sourcePlanet=" + sourcePlanet)
                .add("destinationPlanet=" + destinationPlanet)
                .toString();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof LifeForm)) return false;
        LifeForm form = (LifeForm) o;
        return getId() == form.getId() &&
                Double.compare(form.getWeight(), getWeight()) == 0 &&
                getSourcePlanet() == form.getSourcePlanet() &&
                getDestinationPlanet() == form.getDestinationPlanet() &&
                getDirection() == form.getDirection();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getSourcePlanet(), getDestinationPlanet(), getDirection());
    }
}
