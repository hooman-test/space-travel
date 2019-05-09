package com.nab.spacetravel.entity;

import java.util.StringJoiner;

/**
 * @author Hooman Noroozinia
 * @since 2019-05-03
 */
public enum Planet {
    ANGEL_1(0, "Angel 1"),
    BORETH(1, "Boreth"),
    AURELIA(2, "Aurelia"),
    BLUE_HORIZON(3, "Blue Horizon"),
    ARGUS_X(4, "Argus X");

    private int id;
    private String name;

    Planet(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public static Planet getPlanetById(int id) {
        for (Planet planet : values()) {
            if (planet.getId() == id) {
                return planet;
            }
        }
        return null;//todo: return Optional
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", Planet.class.getSimpleName() + "[", "]")
                .add("name='" + name + "'")
                .toString();
    }
}
