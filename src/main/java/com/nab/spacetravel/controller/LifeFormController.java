package com.nab.spacetravel.controller;

import com.nab.spacetravel.entity.LifeForm;
import com.nab.spacetravel.entity.Planet;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Hooman Noroozinia
 * @since 2019-05-03
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LifeFormController {
    private List<LifeForm> lifeForms;

    public List<LifeForm> generate() {
        List<LifeForm> randoms = new ArrayList<>();
        for (int i = 0; i < 50; i++) {
            LifeForm form = new LifeForm();
            form.setId(i);
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
        this.setLifeForms(randoms);
        return randoms;
    }

    @GetMapping("/getLatestLifeForm")
    public LifeForm getLatestLifeForm() {
        if (lifeForms.size() > 0) {
            LifeForm form = lifeForms.get(0);
            lifeForms.remove(0);
            return form;
        }
        return null;
    }

    @GetMapping("/getLifeForm")
    public List<LifeForm> getLifeForms() {
        if (lifeForms == null || lifeForms.size() == 0) {
            this.lifeForms = generate();
        }
        return lifeForms;
    }

    public void setLifeForms(List<LifeForm> lifeForms) {
        this.lifeForms = lifeForms;
    }
}
