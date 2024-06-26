import { Container, Anchor, Text, AbstractComponent } from "../components.js";

export class Curso extends AbstractComponent {

    private styles = {
        "CURSO": "cursos",
        "TITLE": "cursos__title",
        "TEXT_CONTAINER": "cursos__text-container",
        "NAV": "cursos__nav",
        "LINK": "link"
    };

    protected devMode: boolean = true;

    create(_title: string="default title", _text: string[]=["default text"], _nav: {"prev": string, "next": string}): HTMLElement | null {
        try {
            const curso = new Container().create({ tag: "div", elements: [
                new Text().create({ content: _title, tag: "h2", className: this.styles.TITLE }),
                new Container().create({ tag: "div", elements: _text.map(text => 
                    new Text().create({ content: text, tag: "p" })
                ), className: this.styles.TEXT_CONTAINER }),
                new Container().create({ tag: "nav", elements: [
                    _nav.prev ? new Anchor().create({ href: _nav.prev, content: "Curso Anterior", className: this.styles.LINK }) : null,
                    _nav.next ? new Anchor().create({ href: _nav.next, content: "Próximo Curso", className: this.styles.LINK }) : null
                ], className: this.styles.NAV })
            ], className: this.styles.CURSO })

            this.devLogComponent("CURSO", "create", curso?.innerHTML )

            return curso;
            
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

