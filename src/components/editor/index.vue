<template>
    <div ref="editorContainerRef" class="editor-container">

    </div>
</template>

<script setup lang="ts">
import * as monaco from 'monaco-editor';
import { onMounted, ref } from 'vue';

const editorContainerRef = ref<HTMLElement>()
const editor = ref<monaco.editor.IStandaloneCodeEditor>()
onMounted(() => {
    if (editorContainerRef.value) {
        editor.value = monaco.editor.create(editorContainerRef.value, {
            value: [
                'function hello() {',
                '  console.log("Hello Monaco");',
                '}'
            ].join('\n'),
            language: 'javascript',
            theme: 'vs-dark',          // 或 'vs'（浅色）、'vs-dark'（深色）等
            automaticLayout: true      // 窗口 / 容器尺寸变化时自动调整编辑器大小
        });
    }

})
</script>

<style scoped lang="css">
.editor-container {
    height: 100%;
    width: 100%;
}
</style>