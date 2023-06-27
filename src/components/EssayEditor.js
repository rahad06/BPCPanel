import React, { useState, useRef } from 'react';
import ReactQuill from "react-quill";

// const AnnotationPopup = ({ selectedText, position }) => {
//     return (
//         <div
//             className="annotation-popup"
//             style={{
//                 position: 'absolute',
//                 top: `${position.top - 30}px`,
//                 left: `${position.left}px`,
//                 backgroundColor: 'yellow',
//                 padding: '5px',
//             }}
//         >
//             Annotation: {selectedText}
//         </div>
//     );
// };

const EssayEditor = () => {
    const [content, setContent] = useState('');
    // const [annotation, setAnnotation] = useState(null);
    // const editorRef = useRef(null);

    const handleContentChange = (newContent) => {
        setContent(newContent);
    };

    // const handleAnnotation = () => {
    //     const selectedText = window.getSelection().toString();
    //
    //     if (selectedText) {
    //         const editorRect = editorRef.current.getBoundingClientRect();
    //         const selection = window.getSelection().getRangeAt(0);
    //         const rangeRect = selection.getBoundingClientRect();
    //
    //         const position = {
    //             top: rangeRect.top - editorRect.top,
    //             left: rangeRect.left - editorRect.left + rangeRect.width / 2,
    //         };
    //
    //         setAnnotation({ selectedText, position });
    //     }
    // };

    return (
        <div className="essay-editor">
            <div className="editor-content">
                <ReactQuill
                    value={content}
                    onChange={handleContentChange}
                    placeholder="Start writing your essay..."
                />
                {/*{annotation && (*/}
                {/*    <AnnotationPopup*/}
                {/*        selectedText={annotation.selectedText}*/}
                {/*        position={annotation.position}*/}
                {/*    />*/}
                {/*)}*/}
            </div>
            {/*<button onClick={handleAnnotation}>Annotate</button>*/}
        </div>
    );
};

export default EssayEditor;

