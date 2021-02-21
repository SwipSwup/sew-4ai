<template>
    <div>
        <md-card md-with-hover class="my-card" :style="getStyle()">
            {{textBeitrag}}
            <div class="comment-icon" @click="addComment()">
                <md-icon>comment</md-icon>
            </div>
        </md-card>

        <md-dialog :md-active.sync="dialog">
            <md-dialog-title>Kommentar hinzufügen</md-dialog-title>

            <md-dialog-content>
                <md-textarea v-model="inputText"></md-textarea>
            </md-dialog-content>

            <md-dialog-actions>
                <md-button class="md-primary" @click="dialog = false">Cancel</md-button>
                <md-button class="md-primary" @click="confirm()">Confirm</md-button>
            </md-dialog-actions>
        </md-dialog>

        <beitrag v-for="comment in comments" :text-beitrag="comment" :mar="mar+5"></beitrag>
    </div>
</template>

<script>
    export default {
        name: "Beitrag",
        props: {
            textBeitrag: String,
            mar: Number
        },
        data() {
            return{
                comments: [],
                dialog: false,
                inputText: String
            }
        },
        methods: {
            getStyle(){
                return "padding-left: " + this.mar + "%;"
            },
            addComment(){
                this.dialog = true;
                this.inputText = "";
            },
            confirm() {
                if (this.inputText !== "") {
                    this.comments.push(this.inputText);
                    this.comments = [...this.comments];
                    this.dialog = false;
                }
            }
        }
    }
</script>

<style scoped>
    .my-card{
        padding: 1%;
        width: 90%;
    }
    .comment-icon{
        float: right;
    }
</style>