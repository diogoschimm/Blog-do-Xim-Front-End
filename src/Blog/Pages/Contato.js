import React, { Fragment } from 'react';

export default function Contato() {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <p>Quer entrar em contato? Preencha o formulário abaixo para me enviar uma mensagem e retornaremos o mais breve possível!</p> 
                        <form name="sentMessage" id="contactForm" novalidate>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                <label>Nome</label>
                                <input type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name." />
                                <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                <label>E-mail</label>
                                <input type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." />
                                <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group col-xs-12 floating-label-form-group controls">
                                <label>Telefone</label>
                                <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                <label>Mensagem</label>
                                <textarea rows="5" className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <br />
                            <div id="success"></div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary" id="sendMessageButton">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <hr />
        </Fragment>
    )
}