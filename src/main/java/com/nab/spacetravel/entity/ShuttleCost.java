package com.nab.spacetravel.entity;

/**
 * @author Hooman Noroozinia
 * @since 2019-05-04
 */
public class ShuttleCost {
    private Shuttle shuttle;
    private int cost;

    public Shuttle getShuttle() {
        return shuttle;
    }

    public void setShuttle(Shuttle shuttle) {
        this.shuttle = shuttle;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }
}
