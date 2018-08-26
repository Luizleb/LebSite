const resumee = (function(){
    render = function(elem) {
        const html = `
        <div class="resumee-container">

            <div id="doc2">
                <div id="inner">
        
                    <div id="hd">
                        <div class="yui-u first">
                            <h1>Luiz Eduardo Batista</h1>
                            <h2>Mining Engineer</h2>
                        </div>

                        <div class="yui-u">
                            <div class="contact-info">
                                <h3><a id="pdf" href="#">Download PDF</a></h3>
                                <h3><a href="mailto:name@yourdomain.com">luizleb@gmail.com</a></h3>
                                <h3>(031) - 9 9827-9200</h3>
                            </div><!--// .contact-info -->
                        </div>
                    </div><!--// hd -->

                <div id="bd">
                    <div id="yui-main">
                        <div class="yui-b">
                            <div class="yui-gf">
                                <div class="yui-u first">
                                    <h2>Skills</h2>
                                </div>
                                <div class="main-talent">

                                        <div class="talent">
                                            <h2>Project Management</h2>
                                            <p>Project management from conceptual design up to construction and ramp up.</p>
                                        </div>

                                        <div class="talent">
                                            <h2>Budget Control</h2>
                                            <p>Budget estimates, trend analysis, cash flows and cost control.</p>
                                        </div>

                                        <div class="talent">
                                            <h2>Economic Valuation</h2>
                                            <p>Economic models, sensitivity analysis, scenario building.</p>
                                        </div>
                                </div>
                            </div><!--// .yui-gf -->

                            <div class="yui-gf">
                                <div class="yui-u first">
                                    <h2>Experience</h2>
                                </div><!--// .yui-u -->
                                <div class="yui-u">
                                    <div class="job">
                                        <h2>Opmen Consultoria</h2>
                                        <h3>Consultor</h3>
                                        <h4>2016-present</h4>
                                        <p>Valuation of new potential Projects (Iron, Copper and Gold). </p>
                                    </div>

                                    <div class="job">
                                        <h2>Ferrous Resources</h2>
                                        <h3>Project Manager</h3>
                                        <h4>2014-2016</h4>
                                        <p>Schedule and Budget Planning;<br>
                                            Basic Engineering; </p>
                                    </div>

                                    <div class="job">
                                        <h2>Mineração Usiminas</h2>
                                        <h3>Development Director</h3>
                                        <h4>2009-2014</h4>
                                        <p>Participation in the deal with Sumitomo resulting in the creation of Mineração Usiminas – MUSA (Usiminas 70% and Sumitomo 30%);<br>
                                            “Friáveis” Project definition, development and implementation;<br> 
                                            “Compactos” Project Engineering Studies (FEL-01, FEL-02, FEL-03);<br>  
                                            Environmental remediation of Itaguaí area. </p>
                                    </div>


                                    <div class="job">
                                        <h2>Vale</h2>
                                        <h3>General Manager</h3>
                                        <h4>2004-2009</h4>
                                        <p> Coordination of conceptual, basic and detailed engineering, technological testing, schedule and budget planning and controling, procurement, construction and start-up of a 10 mtpy concentration plant and a 7.5 mtpy pelletizing plant. Total Capex of US$ 1.1 B.</p>
                                    </div>

                                    <div class="job">
                                        <h2>Minerações Brasileiras Reunidas - MBR</h2>
                                        <h3>General Manager</h3>
                                        <h4>1991-2004</h4>
                                        <p>Coordination of the Long-Term Development Plan;
                                                Miguelão Research Center Manager;<br>
                                                Member of technical marketing team – Asian Customers (Japan, South Korea, Taiwan, China and Malaysia)<br>
                                                Long Distance Belt Conveyor from Mutuca Mine to Olhos D’Agua Terminal - 1995;<br>
                                                Vargem Grande Project – 1999 2003<br>
                                                Pico Mine Expansion Project - 1994;</p>
                                    </div>

                                    <div class="job last">
                                        <h2>ECM - Engenharia e Consultoria Mineral</h2>
                                        <h3>Mining Engineer</h3>
                                        <h4>1986-1991</h4>
                                        <p>Coordination of mining plans and feasibility studies;<br><br> 
                                                Main Projects:<br>
                                                <br>
                                                Concentration Plants (IB-III and IB-IV) – SAMITRI; <br>
                                                Alegria Project Conceptual Design – Samarco;<br>
                                                Calcination Plant - CVRD and Mitsubishi;<br>
                                                Ponta do Mutá Project: Heavy Minerals – SAMITRI;<br> 
                                                Quartzo Bocaiúva – MBR;<br>
                                                Vanádio Maracás Project – CAEMI & Odebrecht;<br>
                                                Fábrica Nova Conceptual Design – SAMITRI.</p>
                                    </div>
                                </div><!--// .yui-u -->
                            </div><!--// .yui-gf -->

                            <div class="yui-gf">
                                <div class="yui-u first">
                                    <h2>Education</h2>
                                </div>
                                <div class="yui-u">
                                    <h2>Fundação Getúlio Vargas</h2>
                                    <h3>Corporate Finance - 1999</h3>
                                </div>
                            </div><!--// .yui-gf -->


                            <div class="yui-gf">
                                <!-- <div class="yui-u first">
                                    <h2>Education</h2>
                                </div> -->
                                <div class="yui-u">
                                    <h2>Universidade Federal de Ouro Preto - UFOP</h2>
                                    <h3>Mining Engineer - 1985</h3>
                                </div>
                            </div><!--// .yui-gf -->

                            <div class="yui-gf">
                                    <div class="yui-u first">
                                        <h2>Technical</h2>
                                    </div>
                                    <div class="yui-u main-talent">
                                        <ul class="talent">
                                            <li>Excel VBA</li>
                                            <li>Access</li>
                                            <li class="last">PowerPoint</li>
                                        </ul>
            
                                        <ul class="talent">
                                            <li>Javascript</li>
                                            <li>Golang</li>
                                            <li class="last">MySql</li>
                                        </ul>
            
                                        <ul class="talent">
                                            <li>OS X</li>
                                            <li>Windows XP/Vista</li>
                                            <li class="last">Linux</li>
                                        </ul>
                                    </div>
                            </div><!--// .yui-gf-->

                            <div class="yui-gf last">
                                    <div class="yui-u first">
                                        <h2>International Experience</h2>
                                    </div>
                                    <div class="yui-u">
                                            <div class="job last">
                                                    <p>Minnesota Taconites Mines – Hibbing & Minorca;<br>   
                                                    Asia Road Show for Mineração Usiminas presentation – Japan, South Korea, China;<br>   
                                                    MBR’s Technical Marketing Group for Asian customers:<br>   
                                                    Japan (Nippon Steel, JFE, Sumitomo);<br>   
                                                    China (Baosteel, Kumming, Jinan, Anshan, Sheniang);<br>   
                                                    Taiwan (China Steel);<br>   
                                                    South Korea (Posco);<br>   
                                                    Malaysia (Perwaja);<br>   
                                                    MBR’s Lump ore testing in SGA – Germany;<br>   
                                                    Industry Benchmarking Consortium (IBC) Seminar – Washington DC;<br>
                                                    International Mining Fair – Santiago – Chile;<br> 
                                                    Ohio University Training – Fundação Getúlio Vargas.</p>
                                            </div>
                                    </div>
                            </div><!--// .yui-gf-->


                        </div><!--// .yui-b -->
                    </div><!--// yui-main -->
                </div><!--// bd -->

            <div id="ft">
                <p>Luiz Eduardo Batista &mdash; <a href="mailto:name@yourdomain.com">luizleb@gmail.com</a> &mdash; (031) - 9 9827-9200</p>
            </div><!--// footer -->

        </div><!-- // inner -->
    </div>
    </div>`;

        return elem.innerHTML = html;
    }
    return {render: render};
})();