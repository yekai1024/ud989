/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = { 
    "name" : "Kai Ye",
    "role" : "The Wiseman",
    "welcomeMessage": "ALL MONEY GO MY HOME",
    "biopic": "images/fry.jpg",
    "contacts" : {
        "mobile":"13566668888",
        "email":"yekai@god.com",
        "github":"yekai1024",
        "location":"Shanghai",
        "twitter":"TBD"
    },
    "skill": "C Python JS and many many others"
};

var work = {
    "jobs":[
        {"employer":"Cisco", "title":"SW MGR", "date":2007, "description":"HAHAHA"},
        {"employer":"EMC", "title":"SW MGR", "date":2017, "description":"DADADA"},
    ]
};

var education = {
    "schools": [
        {"name":"SHU", "location":"SHN","degree":"MS", "Major": "EE", "date":2001},
        {"name":"SHU", "location":"SHN","degree":"BS", "Major": "EE", "date":1997},
        ]
};

var project = {
    "prj": [
        {"title":"Big one", "date":2011, "des":"This is Big Prj 1"},
        {"title":"Big Two", "date":2012, "des":"This is Big Prj 2"},
    ]
};

function replaceData(HTMLstr, str) {
    return HTMLstr.replace("%data%", str);
}

function appendContent(contentId, HTMLstr, content) {
    $(contentId).append(replaceData(HTMLstr, content));
}
//add bio
function addBio (bio) {
    var headContent = [
            [HTMLheaderName, bio.name], 
            [HTMLheaderRole, bio.role],
            [HTMLmobile, bio.contacts.mobile], 
            [HTMLemail, bio.contacts.email],
            [HTMLbioPic, bio.biopic],
            [HTMLwelcomeMsg, bio.welcomeMessage],
        ];
    for (var key in headContent) {
        appendContent("#header", headContent[key][0], headContent[key][1]);
    }
    $("#header").append(HTMLskillsStart);
    appendContent("#header", HTMLskills, bio.skill);
}



function addWork (work) {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formatted = replaceData(HTMLworkEmployer, work.jobs[job].employer) +
            replaceData(HTMLworkTitle, work.jobs[job].title);
        $(".work-entry:last").append(formatted)
        
        appendContent(".work-entry:last", HTMLworkDates, work.jobs[job].date);
        appendContent(".work-entry:last", HTMLworkDescription, work.jobs[job].description);
    }    
}

function addPrj(project) {
    for (var key in project.prj) {
        $("#projects").append(HTMLprojectStart);
        appendContent(".project-entry:last", HTMLprojectTitle, project.prj[key].title);
        appendContent(".project-entry:last", HTMLprojectDates, project.prj[key].date);
        appendContent(".project-entry:last", HTMLprojectDescription, project.prj[key].des);
    }       
}

function addEdu(education) {
    for (var key in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formatted = replaceData(HTMLschoolName, education.schools[key].name) +
            replaceData(HTMLschoolDegree, education.schools[key].degree);
        $(".education-entry:last").append(formatted)
        appendContent(".education-entry:last", HTMLschoolLocation, education.schools[key].location);
        appendContent(".education-entry:last", HTMLschoolDates, education.schools[key].date);
        appendContent(".education-entry:last", HTMLschoolMajor, education.schools[key].Major);
    }       
}

function inName(name) {
    name = name.trim().split(" ");
    return name[0] + " " + name[1].toUpperCase();
}
addBio(bio);
addWork(work);
addPrj(project);
addEdu(education);

$("#main").append(internationalizeButton)
