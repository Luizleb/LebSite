const projectsData = (function(){
    getProjectsData = function(){
        return [
            {
                "id":1,
                "name":"Pico Project",
                "company":"MBR",
                "year": "1991-1994",
                "description":"Pico Mine expansion from 3.0 Mtpy to 7.5 Mtpy. New concentration plant and Railroad Terminal linked by a 7 km Long Distance Belt Conveyor (LDBC). Construction of 59 km railroad branch. New tailings dam with final capacity of ??? Mm³. Total capex ~ US$ 245 M, at 1994 price levels.",
                "images":["pic.jpg"],
                "caption": ["Pico Project - 1992"]            
            },
            {
                "id":2,
                "name":"MUT-TOD LDBC Project",
                "company":"MBR",
                "year": "1995-1996",
                "description":"Construction of a 5.5 km Long Distance Belt Conveyor linking Mutuca Mine Plant to the Railroad Terminal at Olhos D´Agua neighborhood, Belo Horizonte. Construction of a 1 km tunnel at 'Serra do Curral'. Total capex ~ US$ ??? M, at 1996 prices. ",
                "images":["tcldmuttod.jpg"],
                "caption": ["LDBC Mut-Tod - 1996"]
            },
            {
                "id":3,
                "name":"Vargem Grande Project",
                "company":"MBR",
                "year": "1999-2003",
                "description":"15 Mtpy concentration plant at Vargem Grande to treat itabiritic ore from Tamandua and Capitao do Mato mines. Construction of a 15 km Long Distance Belt Conveyor (LDBC) linking both mines to the new plant. Products  5 km LDBC linking the plant to the existing railroad terminal. Tailings dam. Total Project capex of ~ US$ ???M, at 2003 prices.",
                "images":["vgr.jpg"],
                "caption": ["Vargem Grande Plant - 2000"]
            },
            {
                "id":4,
                "name":"Itabiritos Project",
                "company":"MBR/Vale",
                "year": "2005-2009",
                "description":"10 Mtpy Concentration plant to treat itabiritic ores from Pico Mine, producing Sinter-Feed and Pellet-Feed. Construction of a 7.5 Mtpy Pelletizing Plant, fed by the new Pico Plant and Vargem Grande existing facility. Pellet-Feed from Pico Mine plant sent to the Pelletizing Plant by a 6 km pipeline. Total capex of ~ US$ 1.2 B, at 2009 prices.",
                "images":["itmi.jpg","pelletplant1.jpg"],
                "caption": ["Concentration Plant","Pelletizing Plant"]
            },
            {
                "id":5,
                "name":"Friaveis Project",
                "company":"Mineracao Usiminas",
                "year": "2011-2014",
                "description":"Construction of concentration units to treat friable itabiritic ores from the Serra Azul mines. Sinter-Feed Plant at Western Mine and the Pellet-Feed unit built at Central Mine. Construction of a Tailings Dam. Total Capex : US$ ??? M.",
                "images":["usim_sf.jpg","usim_pf.jpg"],
                "caption": ["Sinter Feed Plant", "Pellet Feed Plant"]
            }
        ]
    };

    return {getProjectsData: getProjectsData};
    
})();