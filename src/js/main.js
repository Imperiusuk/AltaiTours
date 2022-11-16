import GetData from './getData.js';
import GenerateDayCells from "./generateDayCells.js";
import ProgramDay from './generateProgramDay.js';
import ReviewsDay from './generateReviewsDay.js';
import Catalog from './generateCatalog.js';
import PlayVideo from './playvideo.js';
import * as goto from "./goto.js";
import burger from "./menuBurger.js";
import forms from './forms.js';


window.addEventListener('DOMContentLoaded', () => {
    "use strict"

    const daysProgramArray = new GetData('../assets/program.json');
    const daysVideoArray = new GetData('../assets/reviews.json');
    const comingToursArray = new GetData('../assets/coming.json');

    (function () {
        setTimeout(() => {
            new GenerateDayCells(10, "program__day-icon", ".program-days", 'day-icon_active',daysProgramArray.dataArray, (n, obj)=>{new ProgramDay(n, obj, '.program-about', '.program-content__parameters')});
            new GenerateDayCells(10, "reviews__day-icon", ".reviews-days", 'day-icon_active', daysVideoArray.dataArray, (n, obj)=>{new ReviewsDay(n, obj, '.reviews-about')});
            new Catalog('.coming', comingToursArray.dataArray );
        }, 100);
    })()

    new PlayVideo("about_video", "about_btn");
    new PlayVideo("booking-video", "booking_btn");

    burger();
    goto.goto();

    forms();

    goto.gotoBooking();

})



