const documentContainer = document.createElement('template');

documentContainer.innerHTML = `
  <dom-module id="vcf-enhanced-rich-text-editor-content-styles">
    <template>
      <style>
        [part="content"] {
          box-sizing: border-box;
          position: relative;
          flex: auto;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /*
          Quill core styles.
          CSS selectors removed: margin & padding reset, check list, indentation, video, colors, ordered & unordered list, h1-6, anchor
        */
        .ql-clipboard {
          left: -100000px;
          height: 1px;
          overflow-y: hidden;
          position: absolute;
          top: 50%;
        }

        .ql-clipboard p {
          margin: 0;
          padding: 0;
        }

        .ql-editor {
          box-sizing: border-box;
          line-height: 1.42;
          height: 100%;
          outline: none;
          overflow-y: auto;
          padding: 0.75em 1em;
          tab-size: 4;
          -moz-tab-size: 4;
          text-align: left;
          white-space: pre-wrap;
          word-wrap: break-word;
          flex: 1;
        }

        .ql-editor > * {
          cursor: text;
        }

        .ql-direction-rtl {
          direction: rtl;
          text-align: inherit;
        }

        .ql-align-center {
          text-align: center;
        }

        .ql-align-justify {
          text-align: justify;
        }

        .ql-align-right {
          text-align: right;
        }
        /* quill core end */

        blockquote {
          border-left: 0.25em solid #ccc;
          margin-bottom: 0.3125em;
          margin-top: 0.3125em;
          padding-left: 1em;
        }

        code,
        pre {
          background-color: #f0f0f0;
          border-radius: 0.1875em;
        }

        pre {
          white-space: pre-wrap;
          margin-bottom: 0.3125em;
          margin-top: 0.3125em;
          padding: 0.3125em 0.625em;
        }

        code {
          font-size: 85%;
          padding: 0.125em 0.25em;
        }

        img {
          max-width: 100%;
        }
      </style>
    </template>
  </dom-module>
`;

document.head.appendChild(documentContainer.content);
