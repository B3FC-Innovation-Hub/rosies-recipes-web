# rosis-recipes

We're creating a *virtual cooking assistant*: __Rosie__.

This project aims to produce an app which will do the following:

1. Parse any recipe found online into an array of JSON objects containing instructions
 - each instruction is a single step (unlike eg. HelloFresh who's 6 instructions contain many many steps)
 - each instruction depends on other instructions so they can be sorted
 - each instruction has a time estimate

2. Combine multiple recipies into a dinner menu
 - a single shopping list is produced
 - steps from all recipies are ordered into a single optimal flow

3. Get step-by-step instructions for cooking the dinner without having to think about timing
 - instructions are shown on screen with timers
 - the user is reminded to *stir the sauce* and *you have 3 minutes to finish chopping the onions*
 - if a task is taking longer the expected the user can extend the timers which will adjust/re-arrange the rest of the schedule

The **FUTURE** plan is to make *Rosie* interactive and give her a voice, allowing the user to talk to her.

