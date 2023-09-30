import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  seuNome = 'Olá, me chamo';
  typed: any;

  Nome = 'Lucas Baggio';
  profissao = 'Programador Full-Stack'
  texto = 'Sou um programador full-stack apaixonado por criar soluções de software completas e eficazes.<br> Com habilidades sólidas tanto no desenvolvimento front-end quanto no back-end, desfruto dos<br> desafios que o mundo da programação oferece. Minha busca constante pela excelência e minha<br> vontade de aprender e me adaptar às novas tendências tecnológicas me tornam um profissional<br> comprometido com o sucesso de cada projeto em que me envolvo.'

  ngOnInit(){
    this.typed = new Typed('#nome-digitado', {
      strings: [this.seuNome],
      typeSpeed: 50,
      startDelay: 1000,
      showCursor: false,
    });
    this.typed = new Typed('#nome', {
      strings: [this.Nome],
      typeSpeed: 50,
      startDelay: 2000,
      showCursor: false,
    });
    this.typed = new Typed('#profession', {
      strings: [this.profissao],
      typeSpeed: 50,
      startDelay: 3000,
      showCursor: false,
    });
    this.typed = new Typed('#texto', {
      strings: [this.texto],
      typeSpeed: 10,
      startDelay: 1000,
      showCursor: false,
    });
  }

  downloadFile() {
    
    const fileUrl = '/assets/img/arquivos/cv.pdf';

    
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'cv.pdf'; 

    
    a.click();
  }

  sendEmail() {
    
    
    const emailAddress = 'lucas.baggio.silva@gmail.com';

   
    const subject = 'Assunto do E-mail';
    const body = 'Corpo do E-mail';

    
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    
    window.open(mailtoLink);
  }

}
