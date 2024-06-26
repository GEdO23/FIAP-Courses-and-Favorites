import { Container, Anchor, Text, AbstractComponent } from "../components.js";
export class Curso extends AbstractComponent {
    constructor() {
        super(...arguments);
        this.styles = {
            "CURSO": "cursos",
            "TITLE": "cursos__title",
            "TEXT_CONTAINER": "cursos__text-container",
            "NAV": "cursos__nav",
            "LINK": "link"
        };
        this.devMode = true;
    }
    create(_title = "default title", _text = ["default text"], _nav) {
        try {
            const curso = new Container().create({ tag: "div", elements: [
                    new Text().create({ content: _title, tag: "h2", className: this.styles.TITLE }),
                    new Container().create({ tag: "div", elements: _text.map(text => new Text().create({ content: text, tag: "p" })), className: this.styles.TEXT_CONTAINER }),
                    new Container().create({ tag: "nav", elements: [
                            _nav.prev ? new Anchor().create({ href: _nav.prev, content: "Curso Anterior", className: this.styles.LINK }) : null,
                            _nav.next ? new Anchor().create({ href: _nav.next, content: "Próximo Curso", className: this.styles.LINK }) : null
                        ], className: this.styles.NAV })
                ], className: this.styles.CURSO });
            this.devLogComponent("CURSO", "create", curso === null || curso === void 0 ? void 0 : curso.innerHTML);
            return curso;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}
