package com.nab.spacetravel.entity;

/**
 * @author Hooman Noroozinia
 * @since 2019-05-05
 */
public class PlanetDirection {
    private Planet planet;
    private Direction direction;

    public Planet getPlanet() {
        return planet;
    }

    public void setPlanet(Planet planet) {
        this.planet = planet;
    }

    public Direction getDirection() {
        return direction;
    }

    public void setDirection(Direction direction) {
        this.direction = direction;
    }
}
