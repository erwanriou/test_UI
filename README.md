GRILL MASTER UI

Assessment Grill Master UI
Introduction
Please review and solve the following task within a week and factual in less than 4 hours. Please
return the resulting project containing all HTML, CSS and JS artefacts in a ZIP file to your contact
person at isolutions. Don’t provide us just with a github link as we’d prefer not to have the code
available publicly. E.g. you can clone locally, hence obtaining a clean repository ready to send away,
or you run “ git clean -dfx ” before zipping it all up.
We’d like you to use either vanilla JS or React and you need to test your solution in Chrome. Bonus
points if you use Typescript!
Task Description
Help our master barbecue chef to optimize the order in which barbecue items are grilled. The aim
is to optimize the time for barbecuing the entire menu, i.e. to place as many items on the grill as
possible per round. The grill measures 20cm x 30cm. The cooking time is the same for all barbecue
items.
A REST API provides you with different grill menus. The service returns a list of different pieces of
meat with their respective required space and item count.
Swagger API description: http://isol-grillassessment.azurewebsites.net/swagger/docs/v1
Data: http://isol-grillassessment.azurewebsites.net/api/GrillMenu
Your solution shows the grill master the optimal way to place all the meat and vegetables on the
Grill and illustrates your proposal with a graphical arrangement of all the items on the Grill.
This could look like this:
isolutions AG | Bern – Zürich – Basel – Barcelona | www.isolutions.ch
1 von 2Summary
Your App will read the items that you’ll need to place on the Grill from the food supplier’s REST API
that provides the json containing the data. As with all non-IT businesses, their IT is a bit weird, so
don’t worry if the json is a bit verbose.
The basic structure is:
[
{
menu name,
items: [{ Name, Width, Height and Quantity }, ...]
},
...
]
From that data, your app will then consider each menu and try to place as many items as possible
per grill round. We don’t expect you to recreate the packing algorithm yourself, you may use
something like binpacking (https://www.npmjs.com/package/binpacking) or other packing
algorithms out there.
Note: If you want to code the assessment with TypeScript, you can use a TypeScript-Version of
binpacking, which you can find here: https://github.com/aheadintranet/assessment
The user of the app will be able to review all grill rounds resulting from the incoming data, e.g. as
outlined in the illustration or maybe in a better, more ingenious way you’ve come up with!
Keep an eye on the quality of your project, the code etc. We don’t necessarily look for the most
awesome looks of the UI but also if that app adheres to typical code quality metrics that you’d
encounter in software projects out there.
