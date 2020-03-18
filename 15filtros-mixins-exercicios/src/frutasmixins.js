export default {
    data() {
        return {
            fruta: "",
            frutas: ["Banana", "Maça", "Laranja"]
        };
    },
    methods: {
        add() {
            this.frutas.push(this.fruta);
            this.fruta = "";
        }
    }
}