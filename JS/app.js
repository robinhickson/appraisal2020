//Project 7 Web Dashboard
/*jshint esversion: 6 */
/* ----------  CHART AREA - CHART.JS --------
--------------------------------------------*/
//default charts config

Chart.defaults.global.defaultFontSize = 8;
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontStyle = 'bold';
let careerChart;
let decadeChart;
let annualChart;
let barChart;
let donutChart;

//line chart Web traffic


function career() {
    const ctx = document.getElementById('motivationChart');
    careerChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
            datasets: [{
                data: [80, 60, 70, 90, 80, 90, 95, 90, 90, 90, 50, 60, 60, 80, 70, 90, 85, 70, 50, 40, 50, 30, 80, ],
                backgroundColor: 'rgba(60, 60, 200, 0.8)',
                borderColor: 'rgba(60, 60, 200, 1)',
                borderWidth: 1,
                lineTension: 0,
                pointRadius: 2,
                pointBorderWidth: 1,
                pointBackgroundColor: 'rgba(255,255,255,1)',
            }]
        },
        options: {
            animation: {
                duration: 1000
            },

            layout: {
                padding: 50,
            },
            legend: {
                display: false
            },
            title: {
                display: false
            },
            scales: {
                scaleLabel: {
                    align: 'right'
                },
                xAxes: [{
                    gridLines: {
                        tickMarkLength: 0,
                        gridOffsetGridLines: true,
                    },
                    ticks: {
                        beginAtZero: false,
                        labelOffset: 0,
                        padding: 10,
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Percentage"
                    },
                    gridLines: {
                        tickMarkLength: 0,
                    },
                    ticks: {
                        min: 20,
                        max: 100,
                        beginAtZero: false,
                        stepSize: 10,
                        padding: 5
                    }
                }]
            }
        }
    });

}

function annual() {
    const ctx = document.getElementById('motivationChart');
    annualChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ],
            datasets: [{
                data: [40, 30, 20, 20, 40, 40, 40, 70, 80, 90, 90, 95],
                backgroundColor: 'rgba(60, 60, 200, 0.8)',
                borderColor: 'rgba(60, 60, 200, 1)',
                borderWidth: 1,
                lineTension: 0,
                pointRadius: 2,
                pointBorderWidth: 1,
                pointBackgroundColor: 'rgba(255,255,255,1)',
            }]
        },
        options: {
            animation: {
                duration: 1000
            },

            layout: {
                padding: 50,
            },
            legend: {
                display: false
            },
            title: {
                display: false
            },
            scales: {
                scaleLabel: {
                    align: 'right'
                },
                xAxes: [{
                    gridLines: {
                        tickMarkLength: 0,
                        gridOffsetGridLines: true,
                    },
                    ticks: {
                        beginAtZero: false,
                        labelOffset: 0,
                        padding: 10
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Percentage"
                    },
                    gridLines: {
                        tickMarkLength: 0,
                    },
                    ticks: {
                        min: 0,
                        max: 100,
                        beginAtZero: false,
                        stepSize: 10,
                        padding: 5
                    }
                }]
            }
        }
    });

}



function decade() {
    const ctx = document.getElementById('motivationChart');
    decadeChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', ],
            datasets: [{
                data: [50, 80, 70, 90, 85, 70, 50, 40, 50, 30, 80, ],
                backgroundColor: 'rgba(60, 60, 200, 0.8)',
                borderColor: 'rgba(60, 60, 200, 1)',
                borderWidth: 1,
                lineTension: 0,
                pointRadius: 2,
                pointBorderWidth: 1,
                pointBackgroundColor: 'rgba(255,255,255,1)',
            }]
        },
        options: {
            animation: {
                duration: 1000
            },

            layout: {
                padding: 50,
            },
            legend: {
                display: false
            },
            title: {
                display: false
            },
            scales: {

                xAxes: [{

                    gridLines: {
                        tickMarkLength: 0,
                        gridOffsetGridLines: true,
                    },
                    ticks: {
                        beginAtZero: false,
                        labelOffset: 0,
                        padding: 10
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Percentage"
                    },
                    gridLines: {
                        tickMarkLength: 0,
                    },
                    ticks: {
                        min: 20,
                        max: 100,
                        beginAtZero: false,
                        stepSize: 10,
                        padding: 5
                    }
                }]
            }
        }
    });

}


//bar chart appraisal history

function appraisalBarChart() {
    const ctx = document.getElementById('barChart');
    barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
            datasets: [{
                data: [70, 80, 70, 78, 72, 73, 80, 70, 72, 70, ],
                backgroundColor: 'rgba(60, 60, 200, 1)',
            }]
        },
        options: {
            animation: {
                duration: 1000
            },
            layout: {
                padding: 50,
            },
            legend: {
                display: false
            },
            title: {
                display: false,
            },
            scales: {

                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Appraisal Year"
                    },
                    gridLines: {
                        tickMarkLength: 0,
                        gridOffsetGridLines: true,
                    },
                    ticks: {
                        beginAtZero: false,
                        labelOffset: 0,
                        padding: 10
                    }
                }],
                yAxes: [{

                    scaleLabel: {
                        display: true,
                        labelString: "Percentage"
                    },
                    gridLines: {
                        tickMarkLength: 0,
                    },
                    ticks: {
                        min: 50,
                        max: 90,
                        beginAtZero: false,
                        stepSize: 1,
                        padding: 5
                    }
                }]
            }
        }
    });

}


//donut chart lockdown work distribution

function activitiesDonutChart() {

    const ctx = document.getElementById('donutChart');

    donutChart = new Chart(ctx, {

        type: 'doughnut',
        data: {
            labels: ['Techdegree', 'MAKC Portal', 'MAKC Contracts', ],
            datasets: [{
                data: [70, 25, 5, ],
                backgroundColor: [
                    'rgba(80, 220, 220, 1)',
                    'rgba(100, 255, 200, 1)',
                    'rgba(2, 100, 200, 1)',
                ],
                borderWidth: 0,

            }]
        },
        options: {
            animation: {
                duration: 1000
            },

            layout: {
                padding: 50,
            },
            legend: {
                display: true,
                position: 'right',

                labels: {
                    boxWidth: 10,
                    fontSize: 10,
                }
            },
            title: {
                display: false
            },

        }
    });

}


//Bar chart - daily traffic
appraisalBarChart();

//Donut chart - mobile users
activitiesDonutChart();



/* ----------  Global Variables --------
--------------------------------------------*/
const getListener = document.querySelector('body');
const getAlertArea = document.querySelector('.alertArea');
const getTabs = document.querySelectorAll('.tab');
const selectedNotifications = [];
const user = document.getElementById('recipient');
const message = document.getElementById('userMessage');
let getNotificationsBell = document.getElementById('notificationsBell');
let alertAreaText = document.getElementById('alertText');
let emailSwitch = document.getElementById('email-light-switch');
let profileSwitch = document.getElementById('profile-light-switch');



/* ----------  Global Event Listener (body) and dependent conditionals (functionality)--------
--------------------------------------------*/

getListener.addEventListener('click', (e) => {
    const clickTarget = e.target;
    let targetClass = clickTarget.className; //remember the target  class names


    //--------Text 'read more' toggle---------
    if (targetClass === "readMore") {

        if (clickTarget.parentNode.previousElementSibling.style.display === 'block') {
            clickTarget.parentNode.previousElementSibling.style.display = 'none';
            clickTarget.parentNode.previousElementSibling.previousElementSibling.style.display = 'block';

        } else {
            clickTarget.parentNode.previousElementSibling.style.display = 'block';
            clickTarget.parentNode.previousElementSibling.previousElementSibling.style.display = 'none';
        }

    }else if(clickTarget.classList.contains("modal-close")){
        document.querySelector('.hidden').style.display = 'none'; 

    }

    if (clickTarget.classList.contains("collapseOld")) {
        let messageMoreHTML = document.querySelectorAll('.detailOld');
        let truncOut = document.querySelectorAll('.truncMessageOld');
        
        for (let k = 0; k < messageMoreHTML.length; k++) {
         
            if (messageMoreHTML[k].style.display === 'none') {
                messageMoreHTML[k].style.display = 'block';
               truncOut[k].style.display = 'none';
               clickTarget.style.backgroundColor= "red";
               clickTarget.textContent = "CLOSE";
            } else {
                messageMoreHTML[k].style.display = 'none';
                truncOut[k].style.display = 'block';
                clickTarget.style.backgroundColor= "#11f31d";
               clickTarget.textContent = "OPEN";
            }
        }
    } else if(clickTarget.classList.contains("collapseNew")) {
        let messageMoreHTML = document.querySelectorAll('.detailNew');
        let truncOut = document.querySelectorAll('.truncMessageNew');
        
        for (let k = 0; k < messageMoreHTML.length; k++) {
         
            if (messageMoreHTML[k].style.display === 'none') {
                messageMoreHTML[k].style.display = 'block';
               truncOut[k].style.display = 'none';
               clickTarget.style.backgroundColor= "red";
               clickTarget.textContent = "CLOSE";
            } else {
                messageMoreHTML[k].style.display = 'none';
                truncOut[k].style.display = 'block';
                clickTarget.style.backgroundColor= "#11f31d";
                clickTarget.textContent = "OPEN";
            }
        }
    }

    //-------Chart tabs --------

    if (e.target.classList.contains('tab')) {

        //----Navigation tabs for charts

        if (!clickTarget.classList.contains('activeTab')) { //do not change if clicked tab === current active tab 
            for (let i = 0; i < getTabs.length; i++) {
                getTabs[i].classList.remove('activeTab'); //remove 'activeTab' class if present in sibling class list
            }
        }

        switch (targetClass) { //apply the new activeTab

            case 'annual tab':
                clickTarget.className = 'annual tab activeTab';
                annual();
                break;
            case 'career tab':
                clickTarget.className = 'career tab activeTab';
                career();
                break;
            case 'decade tab':
                clickTarget.className = 'decade tab activeTab';
                decade();
                break;
            default:
                career();
        }
    }
});


/* ----------  Database--------
--------------------------------------------*/

const allObjectives = [{
        name: 'Deliver DECEA support.',
        status: 'Met',
        description: 'Implement DECEA support agreement as described in the UPP work packages.',
        expected: 'Successful implementation of Total ATM in DECEA Brazil.',
        profileLink: '<a class="readMore">\></a>',
        timeframe: "----",
        userMessageIn: [''],
        summary: ['Ongoing, and no issues except VERY slow.', 'I\'m not sure that this is a worthwhile use of EUROCONTROL\'s expensive time!', 'Delivery of "LTMPS", a new manpowerplanning suite prototype (October 2020), was 100% successful, and ahead of schedule.'],
        newObjective: `Deliver DECEA support: Recommend remove`,
        newObjectiveDetail: `The previous years, including 2020, suggest that there is insufficient work to occupy two staff. I'm happy to provide support ad-hoc, or if the demand returns to previous levels, but for the moment this could be a one-staff task.`,
        newExpectedOutcome: `Focus on new objectives described below.`,
    },
    {
        name: 'Enhance MUAC\'s worldwide reputation.',
        status: 'Met',
        description: 'Leveraging unique and valuable experience and expertise, whilst respecting the organisational and political sensitivities within which EUROCONTROL MUAC operates.',
        expected: 'Improved awareness within the ATM industry (evidenced by positive customer feedback) of MUAC\'s leading role, plus highlighting of the positive stakeholder management influence of MAKC activities.',
        profileLink: '<a class="readMore">\></a>',
        timeframe: "2021",
        userMessageIn: [''],
        summary: ['It\'s quite clear from the "LTMPS" prototype project that DECEA, as they communicated to EUROCONTROL, are very satisfied - and are selling MUAC\'s reputation throughout South America.', 'The terms of the "LTMPS" project permitted EUROCONTROL to retain full rights to the development code; and this represents both a potential model for how EUROCONTROL can deliver technical projects for the wider ATM community, and a specific opportunity through futher development of the prototype to a minimum viable product for MUAC and partners.', 'In whatever future organisational model this networking approach is important; in the event of a devolved governance for MUAC, this model would seem (to me) to be critical.'],
        newObjective: `Enhance MUAC\'s worldwide reputation.`,
        newObjectiveDetail: `Investigate and develop a 'MAKC support' type model to EUROCONTROL members and by external agreement. It's clear that we can not put much hope into a semi-commercial approach to MUAC services. This, I believe, should be the final attempt to put any practical support on a firm organisational footing.`,
        newExpectedOutcome: `A clear advice to DIRMAS with respect to the feasibility of enhancing MUAC's ATM reputation through practical, external arrangements. If feasible, a legal and organisational link established with the MAKC Portal.`,
    },
    {
        name: 'Provide advice to DIRMAS on sustainability issues.',
        status: 'Met',
        description: 'Develop knowledge and skills needed to grasp the critical issues surrounding, particularly, the environmental impact of EUROCONTROL MUAC as an enabler of global aviation.',
        expected: 'Form new team (\'MUAC ENV\' group, or MEG). Develop document(s) describing current status and future impact assessments. Provide advice to DIRMAS and MUAC management team on environmental issues, particularly local goals for improved sustainability.',
        profileLink: '<a class="readMore">\></a>',
        timeframe: "----",
        userMessageIn: [''],
        summary: ['Although the MEG didn\'t work out as I\'d hoped, I haven\'t given up. Just doing it my way.', 'Discussion paper provided to DIRMAS detailing the sustainability issues and risks.', 'Research and development forms basis of the bonus Objective detailed below.'],
        newObjective: `Provide advice to DIRMAS on sustainability issues: Recommend remove.`,
        newObjectiveDetail: `It seems logical that this objective should be incorporated within the MAKC Learning Portal, if that objective (below) is approved. An up to date and accessible reference to Sustainability issues in respect to MUAC.`,
        newExpectedOutcome: `Sustainability section within MAKC Portal`,
    },
    {
        name: 'Develop a MAKC Portal.',
        status: 'EXTRA OBJECTIVE - Met',
        description: 'Take the underlying purposes encapsulated in Objectives 1, 2 and 3, and develop an online portal that acts as a window onto MUAC from the outside world, highlighting MUAC\'s innovative and expert capabilities. The ambition - create an ATM Wikipedia!',
        expected: 'Rather than attempt to act in a private, business-oriented model (which is very difficult for EUROCONTROL), define a new model which elevates MUAC as the home of ATM innovation and expertise, using the latest technologies to deliver services online.',
        profileLink: '<a class="readMore">\></a>',
        timeframe: "2021+",
        userMessageIn: [''],
        summary: ['In pursuit of this bonus objective, I\'ve taken on the task of learning more about technical design and development - see Techdegree link, above.', 'At the same time as extending my capabilities and closing the gap between my operational and technical knowledge bases, I have begun to collate infomration to build an online "ATM bible" - see the MAKC Portal link, above.', 'Research and personal self-development forms the heart of this extra objective, which was initiated with DIRMAS agreement in August 2020'],
        newObjective: `Develop an online MAKC Portal.`,
        newObjectiveDetail: `A reference and online tool that acts as a window onto MUAC from the outside world, highlighting MUAC's innovative and expert capabilities. The ambition - create an ATM Wikipedia/Bible, with the option for external parties to acquire services (e.g. courses, support). There's the potential internally to deliver curated and timely information too e.g. guides, best-practice.`,
        newExpectedOutcome: `Minimum Viable Product end 2021.`,
    },
 
];


/* ----------  New Member and Recent Activity widget --------
--------------------------------------------*/

function objectiveWidget() {

    const oldObjectivesText = document.querySelector('.oldObjectives');
    const newObjectivesText = document.querySelector('.newObjectives')

    for (let i = 0; i < allObjectives.length; i++) {
        let objective = allObjectives[i];
        let expected = objective.expected;
        let fullDescription = objective.description;
        let status = objective.status;
        let truncMessageOld = fullDescription.substring(0, 50);
        let truncMessageNew = objective.newObjectiveDetail.substring(0, 50);



        oldObjectivesText.innerHTML +=
            `<div class="aRecentActivity">  
            <div class ="nameTitle">Objective ${i+1}: ${objective.name}</div> 
            <div class = "messageMore">
                <div class= "detail detailOld" style="display:none;">
                    <div class="fullMessageOut fullMessageOld" >Description: ${fullDescription}</div>                
                    <div class="fullMessageOut fullMessageOld" > Expected outcome: ${expected}</div>
                    <ul class="summary${i}">
                    
                    </ul>
                    <div class="fullMessageOut"> Status: ${status}</div>
                </div>
              
                <div class="truncMessageOut truncMessageOld"  style="display:block;">${truncMessageOld}...</div>
                <div class="profileLink">${objective.profileLink}</div>                
            </div>
                
        </div>`;
        let summaryList = document.querySelectorAll(`.summary${i}`);
        summaryList.forEach(element => {

            for (let j = 0; j < objective.summary.length; j++) {
                element.innerHTML += `<li>${objective.summary[j]}</li>`;
            }
        })

        newObjectivesText.innerHTML +=
            `<div class="aNewObjective">    
                    <div class ="nameTitle">${objective.newObjective}</div>
                    <div class = "messageMore">
                        <div class= "detail detailNew" style="display:none;">
                            <div class="fullMessageOut fullMessageNew"  >Description: ${objective.newObjectiveDetail}</div>                
                            <div class="fullMessageOut fullMessageNew" > Expected outcome: ${objective.newExpectedOutcome}</div>              
                        </div>                  
                        <div class="truncMessageOut truncMessageNew"  style="display:block;">${truncMessageNew}...</div>
                        <div class="profileLink">${objective.profileLink}</div>                        
                        </div>
                    </div>
                </div>`;

    }
}


/*--------------Create live-database simulation ---------------------*/
/* --------------------------------------*/

function lastActiveCreator() { //randomize the possible recent activity selections (modify members' object entry)
    for (let i = 0; i < allObjectives.length; i++) {
        let randomizer = Math.round(Math.random() * 10) + 1;
        allObjectives[i].lastActive = `${randomizer} hours ago`;
        if (randomizer < 8) {
            allObjectives[i].activity = 'Recent';
        } else {
            allObjectives[i].activity = 'Old';
        }
    }

}



/* ----------  INTERACTIVITY - FUNCTION CALLS --------
--------------------------------------------*/


career(); // start with this chart as default
lastActiveCreator(); // simulate user recent activity entries at random

objectiveWidget(); //populate new members and recent activity