package com.nab.spacetravel.controller;

import com.nab.spacetravel.entity.Direction;
import com.nab.spacetravel.entity.LifeForm;
import com.nab.spacetravel.entity.Planet;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

/**
 * @author Hooman Noroozinia
 * @since 2019-05-04
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class ShuttleControllerTest {

    @Autowired
    private ShuttleController shuttleController;

    @Test
    public void getShuttle() {
    }

    @Test
    public void stepForward() {
    }

    @Test
    public void evaluateDirection() {
        LifeForm test = new LifeForm();
        test.setSourcePlanet(Planet.ANGEL_1);
        test.setDestinationPlanet(Planet.ARGUS_X);
        Assert.assertEquals(shuttleController.evaluateDirection(test), Direction.FAR);
    }

    @Test
    public void evaluateDirectionCost() {
        Assert.assertEquals(shuttleController.evaluateDirectionCost(Planet.ANGEL_1, Planet.ARGUS_X, Direction.FAR), 4);
        Assert.assertEquals(shuttleController.evaluateDirectionCost(Planet.BLUE_HORIZON, Planet.ANGEL_1, Direction.FAR), 5);

        Assert.assertEquals(shuttleController.evaluateDirectionCost(Planet.AURELIA, Planet.ANGEL_1, Direction.NEAR), 2);
        Assert.assertEquals(shuttleController.evaluateDirectionCost(Planet.BLUE_HORIZON, Planet.ARGUS_X, Direction.NEAR), 7);
    }
}
