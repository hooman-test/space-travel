package com.nab.spacetravel.controller;

import com.nab.spacetravel.entity.Shuttle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

/**
 * @author Hooman Noroozinia
 * @since 2019-05-03
 */
@Controller
public class HomeController {

    @Autowired
    private ShuttleController shuttleController;

    public void stepForward() {
        //iterate over shuttles to evaluate dir
        for (Shuttle s : shuttleController.getShuttle()) {
            //move 1 direction forward
            shuttleController.move(s);

            //step out passengers
            shuttleController.stepOutPassenger(s);

            //step up passengers
            shuttleController.stepUpPassenger(s);
        }
    }
}
