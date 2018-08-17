const projectsData = (function(){
    getProjectsData = function(){
        return [
            {
                "id":1,
                "name":"Pico Project",
                "company":"MBR",
                "year": "1991-1994",
                "description":"",
                "images":["pic.jpg"]
            },
            {
                "id":2,
                "name":"MUT-TOD LDBC Project",
                "company":"MBR",
                "year": "1995-1996",
                "description":"",
                "images":["tcldmuttod.jpg"]
            },
            {
                "id":3,
                "name":"Vargem Grande Project",
                "company":"MBR",
                "year": "1999-2003",
                "description":"",
                "images":["vgr.jpg"]
            },
            {
                "id":4,
                "name":"Itabiritos Project",
                "company":"MBR/Vale",
                "year": "2005-2009",
                "description":"",
                "images":["itmi.jpg","pelletplant1.jpg"]
            },
            {
                "id":5,
                "name":"Friaveis Project",
                "company":"Mineracao Usiminas",
                "year": "2011-2014",
                "description":"",
                "images":["usim_sf.jpg","usim_pf.jpg"]
            }
        ]
    };

    return {getProjectsData: getProjectsData};
    
})();