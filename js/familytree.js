window.onload = function () { 
    
    OrgChart.templates.group.link = 
        '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}"/>';
    btnMinimize = 
        '<svg fill="#aeaeae" x="410" y="17" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
            'viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve">' +
            '<path d="M0,0v485h485V0H0z M455,455H30V30h425V455z"/>' +
            '<polygon points="311.683,349.411 205.12,242.5 311.683,135.589 290.435,114.411 162.762,242.5 290.435,370.589 	"/>' +     
        '</svg>';
    btnMaximize = 
        '<svg fill="#aeaeae" x="198" y="47" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
            'viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve">' +
            '<path d="M0,0v485h485V0H0z M455,455H30V30h425V455z"/>' +
            '<polygon points="194.565,370.589 322.237,242.5 194.565,114.411 173.317,135.589 279.88,242.5 173.317,349.411 	"/>' +
        '</svg>';
    btnMinimize3 = 
        '<svg fill="#aeaeae" x="630" y="17" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
            'viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve">' +
            '<path d="M0,0v485h485V0H0z M455,455H30V30h425V455z"/>' +
            '<polygon points="311.683,349.411 205.12,242.5 311.683,135.589 290.435,114.411 162.762,242.5 290.435,370.589 	"/>' +     
        '</svg>';      
                
        OrgChart.templates.group.min = Object.assign({}, OrgChart.templates.group);
        OrgChart.templates.group.min.name = 
            '<text data-width="230" data-text-overflow="multiline" style="font-size: 24px;" fill="#aeaeae" x="125" y="65" text-anchor="middle">{val}</text>';
        OrgChart.templates.group.minBtn = btnMinimize +
            '<rect data-btn-min="{val}" x="410" y="17" height="24" width="24" fill="red" fill-opacity="0" opastroke-width="1" stroke="#aeaeae"></rect>';
        OrgChart.templates.group3 = Object.assign({}, OrgChart.templates.group);
        OrgChart.templates.group3.minBtn = btnMinimize3 +
            '<rect data-btn-min="{val}" x="630" y="17" height="24" width="24" fill="red" fill-opacity="0" opastroke-width="1" stroke="#aeaeae"></rect>';
        OrgChart.templates.group.min.maxBtn = btnMaximize +
            '<rect data-btn-max="{val}" x="198" y="47" height="24" width="24" fill="red" fill-opacity="0" opastroke-width="1" stroke="#aeaeae"></rect>';
    
    var chart = new OrgChart(document.getElementById("tree"), {
        template: "diva",
        enableDragDrop: false,
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            field_2: "fecnac",
            img_0: "img",
            minBtn: "id",
            maxBtn: "id",
        },
    });
    
    nodes = [
            { id: 1, name: "Federico Del Carmen Martinez", img: "pics/man.jpg" },
            { id: 2, pid: 1, name: "Rosa Amelia Rojas", img: "pics/woman.jpg", tags: ['partner'] },

            { id: 5, pid: 1, ppid: 2, name: "Fermin Del Carmen Martinez Rojas", title: "Papi", img: "pics/ferminmartinez.png", fecnac: "28 Julio 1913" },
            { id: 6, pid: 5, name: "Raquel De Las Mercedes Bustamante Martinez", title: "Mami", img: "pics/raquelbustamante.png", tags: ['partner'] },

            { id: 10, pid: 5, ppid: 6, name: "Teresa Martinez Bustamante", title: "Tere", img: "pics/teresamartinez.png" },
            { id: 11, pid: 5, ppid: 6, name: "Luisa Ines Martinez Bustamante", fecnac: "16 Diciembre 1945", img: "pics/luisamartinez.png" },
            { id: 12, pid: 5, ppid: 6, name: "Hugo Martinez Bustamante", title: "Chito", img: "pics/hugomartinez.png" },
            { id: 13, pid: 5, ppid: 6, name: "Moncho Martinez Bustamante", title: "Moncho", img: "pics/man.jpg" },
            { id: 14, pid: 5, ppid: 6, name: "Raquel Martinez Bustamante", title: "Quela", img: "pics/raquelmartinez_2.png" },
            { id: 15, pid: 5, ppid: 6, name: "Mario Martinez Bustamante", title: "Canario", img: "pics/man.jpg" },
            { id: 16, pid: 5, ppid: 6, name: "Brunilda Martinez Bustamante", title: "Bruni", img: "pics/brunildamartinez.png" },

            { id: 30, pid: 10, name: "Papa Paola", img: "pics/man.jpg", tags: ['partner'] },
            { id: 31, pid: 10, name: "Gabriel Zalazar", img: "pics/man.jpg", tags: ['partner'] },
            { id: 32, pid: 11, name: "Papa Raul", img: "pics/man.jpg", tags: ['partner'] },
            { id: 33, pid: 11, name: "Hugo Hernan Peñaloza Ordenes", fecnac: "2 Mayo 1950", img: "pics/hugopenaloza.png", tags: ['partner'] },
            { id: 34, pid: 12, name: "Margarita Diaz", title: "Maggy", img: "pics/margaritadiaz.png", tags: ['partner'] },
            { id: 35, pid: 14, name: "Papa Mario", img: "pics/man.jpg", tags: ['partner'] },
            { id: 36, pid: 14, name: "Jose Nivaldo Tapia", title: "Caluga", img: "pics/nivaldotapia.png", tags: ['partner'] },
            { id: 37, pid: 15, name: "Flor Aravena", img: "pics/woman.jpg", tags: ['partner'] },
            { id: 38, pid: 16, name: "Chocolo", img: "pics/man.jpg", tags: ['partner'] },
            { id: 39, pid: 16, name: "Lautaro Morales", img: "pics/lautaromorales.png", tags: ['partner'] },

            { id: 50, pid: 10, ppid: 30, name: "Paola", img: "pics/paola.png" },
            { id: 51, pid: 10, ppid: 31, name: "Ximena Zalazar Martinez", img: "pics/woman.jpg" },
            { id: 52, pid: 10, ppid: 31, name: "Alejandro Zalazar Martinez", img: "pics/man.jpg" },
            
            { id: 60, pid: 11, ppid: 32, name: "Raul Maldonado Martinez", img: "pics/raulmaldonado.png" },
            { id: 61, pid: 11, ppid: 32, name: "Flavia Maldonado Martinez", img: "pics/flaviamaldonado.png" },
            { id: 62, pid: 11, ppid: 32, name: "Jose Maldonado Martinez", img: "pics/josemaldonado.png" },

            { id: 70, pid: 11, ppid: 33, name: "Yenny Miriam Peñaloza Martinez", fecnac:"10 Febrero 1972", img: "pics/yennypenaloza.png" },
            { id: 71, pid: 11, ppid: 33, name: "Victor Hugo Peñaloza Martinez", fecnac:"14 Agosto 1981", img: "pics/victorpenaloza.png" },
            { id: 72, pid: 11, ppid: 33, name: "Pablo Fermin Peñaloza Martinez", fecnac:"08 Mayo 1984", img: "pics/pablopenaloza.png" },

            { id: 80, pid: 12, ppid: 34, name: "Cristian Martinez", img: "pics/man.jpg" },
            { id: 81, pid: 12, ppid: 34, name: "Romina Martinez", img: "pics/woman.jpg" },
            { id: 82, pid: 12, ppid: 34, name: "Frederick Martinez", img: "pics/frederickmartinez.png" },

            { id: 90, pid: 14, ppid: 35, name: "Victor Mario Tapia Martinez", img: "pics/mariotapia.png" },
            { id: 91, pid: 14, ppid: 36, name: "Magaly Yamilet Tapia Martinez", img: "pics/magalytapia.png" },
            { id: 92, pid: 14, ppid: 36, name: "Paola Marcela Tapia Martinez", img: "pics/paolatapia.png" },
            { id: 93, pid: 14, ppid: 36, name: "Pablo Arnaldo Tapia Martinez", img: "pics/pablotapia.png" },
            { id: 94, pid: 14, ppid: 36, name: "Cesar Antonio Tapia Martinez", img: "pics/cesartapia.png" },

            { id: 100, pid: 15, ppid: 37, name: "Elizabeth Martinez", img: "pics/woman.jpg" },
            { id: 101, pid: 15, ppid: 37, name: "Alicia Martinez", img: "pics/woman.jpg" },

            { id: 110, pid: 16, ppid: 38, name: "Carola Ramirez Martinez", img: "pics/carolaramirez.png" },
            { id: 111, pid: 16, ppid: 39, name: "Natasha Morales", img: "pics/natashamorales.png" },

            { id: 200, pid: 51, name: "Carlos Barrera", img: "pics/carlosbarrera.png", tags: ['partner'] },
            { id: 201, pid: 52, name: "Sra Alejo", img: "pics/woman.jpg", tags: ['partner'] },
            { id: 202, pid: 50, name: "Cesar Villegas", img: "pics/man.jpg", tags: ['partner'] },
            { id: 203, pid: 70, name: "Mauricio Arturo Diaz Cesped", img: "pics/mauriciodiaz.png", tags: ['partner'] },
            { id: 204, pid: 71, name: "Alma Cristina Negrete Shen", img: "pics/almanegrete.png", tags: ['partner'] },
            { id: 205, pid: 72, name: "Catalina Evelyn Vidal Rojas", img: "pics/woman.jpg", tags: ['partner'] },
            { id: 206, pid: 60, name: "Jolanda", img: "pics/jolanda.png", tags: ['partner'] },
            { id: 207, pid: 61, name: "Papa Geraldine", img: "pics/man.jpg", tags: ['partner'] },
            { id: 208, pid: 61, name: "Papa Camila", img: "pics/man.jpg", tags: ['partner'] },
            { id: 209, pid: 61, name: "Papa Paolo", img: "pics/man.jpg", tags: ['partner'] },
            { id: 210, pid: 62, name: "Miriam Ordenes", img: "pics/miriamordenes.png", tags: ['partner'] },
            { id: 211, pid: 80, name: "Pamela", img: "pics/woman.jpg", tags: ['partner'] },
            { id: 212, pid: 81, name: "Jorge Pedrero", img: "pics/jorgepedrero.png", tags: ['partner'] },
            { id: 213, pid: 82, name: "Sra Freddy", img: "pics/srafreddy.png", tags: ['partner'] },
            { id: 214, pid: 91, name: "Patricio Gonzalez", img: "pics/patriciogonzalez.png", tags: ['partner'] },
            { id: 215, pid: 92, name: "Christian Medel Aliaga", img: "pics/man.jpg", tags: ['partner'] },
            { id: 216, pid: 92, name: "Cristian Hernandez", img: "pics/man.jpg", tags: ['partner'] },
            { id: 217, pid: 94, name: "Yenny Ludueña", img: "pics/yennyluduena.png", tags: ['partner'] },
            { id: 218, pid: 90, name: "Gina", img: "pics/gina.png", tags: ['partner'] },
            { id: 219, pid: 110, name: "Julio Martinez", img: "pics/juliomartinez.png", tags: ['partner'] },

            { id: 300, pid: 51, ppid: 200, name: "Tamara Barrera", img: "pics/woman.jpg" },
            { id: 301, pid: 51, ppid: 200, name: "Carlos Barrera", img: "pics/man.jpg" },
            { id: 302, pid: 51, ppid: 200, name: "Tiare Barrera", img: "pics/woman.jpg" },

            { id: 310, pid: 52, ppid: 201, name: "Sebastian Zalazar", img: "pics/man.jpg" },
            { id: 311, pid: 52, ppid: 201, name: "Javiera Zalazar", img: "pics/woman.jpg" },
            
            { id: 320, pid: 50, ppid: 202, name: "Paola Villegas", img: "pics/woman.jpg" },
            { id: 321, pid: 50, ppid: 202, name: "Monin Villegas", img: "pics/man.jpg" },

            { id: 330, pid: 70, ppid: 203, name: "Sebastian Alonso Diaz Peñaloza", img: "pics/sebastiandiaz.png" },
            { id: 331, pid: 70, ppid: 203, name: "Tomas Alonso Diaz Peñaloza", img: "pics/tomasdiaz.png" },

            { id: 340, pid: 72, ppid: 205, name: "Amaru Matias Peñaloza Vidal", img: "pics/man.jpg" },
            { id: 341, pid: 72, ppid: 205, name: "Violeta Rayen Peñaloza Vidal", img: "pics/woman.jpg" },

            { id: 350, pid: 60, ppid: 206, name: "Genesis Maldonado", img: "pics/genesismaldonado.png" },
            { id: 351, pid: 60, ppid: 206, name: "Isidora Maldonado", img: "pics/isidoramaldonado.png" },

            { id: 360, pid: 61, ppid: 207, name: "Geraldine Vasconcelos", img: "pics/woman.jpg" },
            { id: 361, pid: 61, ppid: 208, name: "Camila ...", img: "pics/camila.png" },
            { id: 362, pid: 61, ppid: 209, name: "Paolo ...", img: "pics/paolo.png" },

            { id: 370, pid: 62, ppid: 210, name: "Alexis Maldonado", img: "pics/alexismaldonado.png" },
            { id: 371, pid: 62, ppid: 210, name: "Joselyn Maldonado", img: "pics/joselynmaldonado.png" },

            { id: 380, pid: 80, ppid: 211, name: "Hijos Cristian...", img: "pics/woman.jpg" },

            { id: 390, pid: 81, ppid: 212, name: "Matias Pedrero ", img: "pics/man.jpg" },
            { id: 391, pid: 81, ppid: 212, name: "... Pedrero", img: "pics/man.jpg" },

            { id: 400, pid: 82, ppid: 213, name: "Hija Freddy", img: "pics/woman.jpg" },

            { id: 410, pid: 91, ppid: 214, name: "Andres Gonzalez", img: "pics/andresgonzalez.png" },
            { id: 411, pid: 91, ppid: 214, name: "Pablo Gonzalez", img: "pics/pablogonzalez.png" },

            { id: 420, pid: 92, ppid: 215, name: "Claudio Medel Tapia", img: "pics/claudiomedel.png" },
            { id: 421, pid: 92, ppid: 216, name: "Martin Hernandez Tapia", img: "pics/martinhernandez.png" },
            { id: 422, pid: 92, ppid: 216, name: "Emilia Hernandez Tapia", img: "pics/woman.jpg" },

            { id: 430, pid: 94, ppid: 217, name: "Josefa Tapia Ludueña", img: "pics/josefatapia.png" },
            { id: 431, pid: 94, ppid: 217, name: "Sebastian Tapia Ludueña", img: "pics/sebastiantapia.png" },

            { id: 440, pid: 110, ppid: 219, name: "Gonzalo Martinez Ramirez", img: "pics/gonzalomartinez.png" },
            { id: 441, pid: 110, ppid: 219, name: "Daniela Martinez Ramirez", img: "pics/danielamartinez.png" },
            { id: 442, pid: 110, ppid: 219, name: "Javier Martinez Ramirez", img: "pics/javiermartinez.png" },
            { id: 443, pid: 110, ppid: 219, name: "Agustin Martinez Ramirez", img: "pics/agustinmartinez.png" },

            { id: 450, pid: 90, ppid: 218, name: "Catalina Tapia", img: "pics/catalinatapia.png" },
            { id: 451, pid: 90, ppid: 218, name: "Antonia Tapia", img: "pics/antoniatapia.png" },

            { id: 460, pid: 410, name: "Maria Jose", img: "pics/woman.jpg", tags: ['partner'] },


            { id: 470, pid: 410, ppid: 460, name: "Lionel Gonzalez", img: "pics/man.jpg" },
        ];
    
        
        chart.on('redraw', (sender) => {
                    let minBtns = document.querySelectorAll('*[data-btn-min]');
    
                    minBtns.forEach(btn => {
                        btn.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            chart.minimize(btn.getAttribute('data-btn-min'));
                        });
                    });
    
                    let maxBtns = document.querySelectorAll('*[data-btn-max]');
    
                    maxBtns.forEach(btn => {
                        btn.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            chart.maximize(btn.getAttribute('data-btn-max'));
                        });
                    });
    
                });
    
    
        chart.load(nodes);
    
    };