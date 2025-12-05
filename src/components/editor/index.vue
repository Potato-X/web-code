<template>
    <div ref="editorContainerRef" id="editor-container" class="editor-container">

    </div>
</template>

<script setup lang="ts">
import * as monaco from 'monaco-editor';
import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import TsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import { onMounted, ref } from 'vue';
const editorContainerRef = ref<HTMLElement>()
const editor = ref<monaco.editor.IStandaloneCodeEditor>()
onMounted(() => {
    if (editorContainerRef.value) {
        self.MonacoEnvironment = {
            getWorker(_moduleId: string, label: string) {
                if (label === "typescript" || label === "javascript") {
                    return new TsWorker();
                }
                return new EditorWorker();
            }
        };
        editor.value = monaco.editor.create(document.getElementById("editor-container")!, {
            value: "",
            language: "javascript",
            theme: "vs-dark",
        });
        // monaco.languages.registerCompletionItemProvider('javascript', {
        //     provideCompletionItems(model, position, context, token) {
        //         const word = model.getWordUntilPosition(position); // 光标处的单词
        //         const range = {
        //             startLineNumber: position.lineNumber,
        //             startColumn: word.startColumn,
        //             endLineNumber: position.lineNumber,
        //             endColumn: word.endColumn
        //         };
        //         return {
        //             suggestions: [
        //                 {
        //                     label: 'myFunc',
        //                     kind: monaco.languages.CompletionItemKind.Function,
        //                     insertText: 'myFunc()',
        //                     range: range,              // ⭐ 必须要有
        //                     documentation: '这是一个自定义函数提示'
        //                 },
        //                 {
        //                     label: 'mySnippet',
        //                     kind: monaco.languages.CompletionItemKind.Snippet,
        //                     insertText: 'console.log(${1:value})',
        //                     range: range,               // ⭐ 必须要有
        //                     insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        //                     documentation: '一个 snippet 示例'
        //                 }
        //             ]
        //         };
        //     },
        // });
    }

})
</script>

<style scoped lang="css">
.editor-container {
    height: 100%;
    width: 100%;
}
</style>