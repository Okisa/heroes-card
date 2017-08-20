import React, {Component} from 'react';
import './style/main.css';
import './style/HomeContainer.css';
import marvelimg1 from  '../images/Marvel-Home.jpg';
import {Link} from 'react-router';

class HomeContainer extends Component{

   

        render(){
            return(
                <div className="title__background">
                    <section className="banner full">

                        <div className="inner">
                        </div>
                </section>                      
                                <section id="one" className="wrapper style2">
                                <div className="inner">
                                    <div className="grid-style">
                
                                        <div>
                                            <div className="box">
                                                
                                                <div className="content">
                                                    <header className="align-center">
                                                    
                                                    
                                                    <p> Que tal criar uma carta de jogo de acordo com sua personalidade? Utilizando o Watson da IBM, conseguimos definir sua personalidade para dentro de uma carta de jogo, e você poderá usar essa carta para comparar com amigos que você encontrará pelo evento.</p>
                                                        <Link className="link__card" to="/card"><h2 >Gerar seu card game!</h2></Link>
                                                        </header>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div>
                                            <div className="box">
                                                
                                                <div className="content">
                                                    <header className="align-center">
                                                    
                                                    <p> Chame seus amigos para jogar esse jogo de sobrevivência interativo, o seu card game irá evoluir de acordo com as decisões tomadas, e o mais forte sobreviverá!</p>
                                                    <h2>Em Breve!</h2>
                                                    </header>
                                                </div>
                                            </div>
                                        </div>
                
                                    </div>
                                </div>
                            </section>

                         
                                <footer id="footer">
                                    <div className="container">
                                        <ul className="icons">
                                            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                                            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                                            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                                            <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="copyright">
                                        &copy; Untitled. All rights reserved.
                                    </div>
                                </footer>

                </div>
            );
        }
}

export default HomeContainer;