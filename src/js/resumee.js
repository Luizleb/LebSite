const resumee = (function(){
    render = function(elem) {
        const html = `
        <div class="resumee">
            <h1>Luiz Eduardo G. Batista (LEB)</h1>
            <blockquote>
                <p>Rua Tito Guimarães, 51, Apto-502, Bl. 02 – 30.575-070 - Belo Horizonte – Brazil</p>
                <p>+ 55 (31) 99827-9200 / luizleb@gmail.com</p>
            </blockquote>
            
            <h2>PERSONAL STATEMENT</h2>
            <p>Skills and knowledge essentials for:</p>
            <ul>
                <li>Project Management;</li>
                <li>PMO;</li>
                <li>Budget planning and control;</li>
                <li>Trend analysis;</li>
                <li>Compliance & Auditing.</li>
            </ul>
            <h2>EDUCATION</h2>
            <ul>
                <li>Corporate Finance– Fund. Getúlio Vargas, 2000 (inc);</li>
                <li>Mining Engineer – Universidade Federal de Ouro Preto, 1985;</li>
                <li>Mining Technician – ETFOP, 1977.</li>
            </ul>
            
            <h2>WORK EXPERIENCE</h2>
            <h3>2016 - Present: Independent Consultant</h3>      
                <p>Valuation of new potential Projects (Iron and Copper).</p>
            
            <h3>2014 / 2016: FERROUS RESOURCES</h3>
                    
            <h4>Project Manager – Viga 04+</h4>
                <p>Schedule and Budget Planning;</p>
                <p>Basic Engineering;</p>
            
            <h3>2009 / 2014: MINERAÇÃO USIMINAS</h3>
                    
            <h4>Development Director</h4>
                <p>“Friáveis” Project definition, development and implementation;</p>  
                <p>“Compactos” Project Engineering Studies (FEL-01, FEL-02, FEL-03);</p> 
                <p>Environmental remediation of Itaguaí area.</p>
            
            <h4>Development Manager</h4>
                <p>“Friáveis” Project Engineering studies (FEL-01, FEL-02, FEL-03);</p> 
                <p>“Compactos” Project Engineering studies (FEL-01, FEL-02);</p>  
                <p>Participation in the deal with Sumitomo resulting in the creation of Mineração Usiminas – MUSA (Usiminas 70% and Sumitomo 30%).</p>
            
            <h3>2005 / 2009: 	Vale</h3>
                    
            <h4>General Manager – Projeto Itabiritos </h4>
                <p>Coordination of conceptual, basic and detailed engineering, technological testing, schedule and budget planning and controling, procurement, construction and start-up of a 10 mtpy concentration plant and a 7.5 mtpy pelletizing plant. Total Capex of US$ 1.1 B.</p>
            
            <h3>1991 / 2005 : MBR - Minerações Brasileiras Reunidas SA</h3>
                    
            <h4>Development and Technology Manager </h4>
                <p>Coordination of the Long-Term Development Plan;</p>
                <p>Miguelão Research Center management;</p>
                <p>Member of technical marketing team – Asian Customers (Japan, South Korea,</p><p>Taiwan, China and Malaysia)</p>
            
            <h4>Projects Budget Planning and Control Manager</h4>  
                <p>Pico Mine Expansion Project - 1994;</p>
                <p>Long Distance Belt Conveyor from Mutuca Mine to Olhos D’Agua Terminal - 1995;</p>
                <p>Vargem Grande Project – 1999 2003</p>
            
            <h3>1985 / 1991: ECM – Engenharia e Consultoria Mineral</h3>
                    
            <h4>Mining Planning and Feasibility Studies Manager </h4>
                <p>Coordination of mining plans and feasibility studies;</p> 
                <p>Main Projects:</p>
                <p>Concentration Plants (IB-III and IB-IV) – SAMITRI;</p>
                <p>Alegria Project Conceptual Design – Samarco;</p>
                <p>Calcination Plant - CVRD and Mitsubishi;</p>
                <p>Ponta do Mutá Project: Heavy Minerals – SAMITRI; </p>
                <p>Quartzo Bocaiúva – MBR; </p>
                <p>Vanádio Maracás Project – CAEMI & Odebrecht;</p>
                <p>Fábrica Nova Conceptual Design – SAMITRI.</p>
            
            <h4>Mining Engineer</h4> 
                <p>PAE – Fábrica Nova – SAMITRI;</p>
                <p>PAE – Quartzo Bocaiúva - MBR</p>
                <p>Vargem Grande Project – 1999 2003</p>
            
            
            <h2>INTERNATIONAL EXPERIENCE</h2>
            <p>Minnesota Taconites Mines – Hibbing & Minorca;</p> 
            <p>Asia Road Show for Mineração Usiminas presentation – Japan, South Korea, China;</p>  
            <p>MBR’s Technical Marketing Group for Asian customers:</p>  
            <p>Japan (Nippon Steel, JFE, Sumitomo);</p>
            <p>China (Baosteel, Kumming, Jinan, Anshan, Sheniang);</p> 
            <p>Taiwan (China Steel);</p>
            <p>South Korea (Posco);</p>
            <p>Malaysia (Perwaja);</p>
            <p>MBR’s Lump ore testing in SGA – Germany;  </p>
            <p>Industry Benchmarking Consortium (IBC) Seminar – Washington DC;</p>  
            <p>International Mining Fair – Santiago – Chile;</p>
            <p>Ohio University Training – Fundação Getúlio Vargas.</p>
            
            <h2>SKILLS</h2>
            <p>Computing:  Excel (advanced VBA), Access, Word and PowerPoint, SQL, Javascript, C++, Microsoft Project, Filemaker;</p>
            <p>Languages: advanced English, intermediate German and Spanish (reading).</p>
        </div>`;

        return elem.innerHTML = html;
    }
    return {render: render};
})();