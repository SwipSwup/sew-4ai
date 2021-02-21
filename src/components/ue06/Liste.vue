<template>
    <div>
        <router-view/>
        <beitrag v-for="beitrag in beitraege" :text-beitrag="beitrag" :mar="1"></beitrag>
        <div class="button-bottom-right">
            <md-button class="md-fab" @click="dialogClick()">
                <md-icon>add</md-icon>
            </md-button>
        </div>

        <md-dialog :md-active.sync="dialog">
            <md-dialog-title>Beitrag hinzufügen</md-dialog-title>

            <md-dialog-content>
                <md-textarea v-model="inputText"></md-textarea>
            </md-dialog-content>

            <md-dialog-actions>
                <md-button class="md-primary" @click="dialog = false">Cancel</md-button>
                <md-button class="md-primary" @click="confirm()">Confirm</md-button>
            </md-dialog-actions>
        </md-dialog>
    </div>
</template>

<script>
    import Beitrag from "./Beitrag";
    export default {
        name: "Liste",
        components: {Beitrag},
        props: {
        },
        data() {
            return {
                dialog: false,
                inputText: String,
                beitraege: ["test Beitrag","2. test Beitrag","toller Beitrag"]
            }
        },
        methods: {
            confirm(){
                if (this.inputText !== ""){
                    this.dialog = false;
                    this.beitraege.push(this.inputText);
                    this.beitraege = [...this.beitraege];
                    this.comments.push([]);
                    this.comments = [...this.comments];
                }
            },
            dialogClick(){
                this.dialog = true;
                this.inputText = "";
            }
        }
    }
</script>

<style scoped>
    .button-bottom-right {
        position: fixed;
        bottom: 20px;
        right: 20px;
    }
</style>