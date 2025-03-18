import React, {useContext, useState} from "react";

// 1. Create the context
const EmojiContext = React.createContext();

// Custom provider component for this context. Uses its own state to keep track of the current user.
// Use it in a top level component such as App.jsx like <EmojiProvider>...</EmojiProvider>
export const EmojiProvider = (props) => {
    const [emoji, setEmoji] = useState('😊'); // default emoji

    // sets emoji object in state, shared via context
    const handleUpdateEmoji = (emoji) => {
        setEmoji(emoji);
    }

    // switches the emoji currently in state 
    const handleSwitchEmoji = () => {
        let newEmoji = emoji === '😊' ? '😒' : '😊';
        setEmoji(newEmoji)
    }

    // 3. Provide the context. The Provider property of any context (EmojiContext.Provider)
    // sends data via its value prop to all children at every level, who can then use it as needed
    return (
        <EmojiContext.Provider value={{emoji, handleUpdateEmoji, handleSwitchEmoji}}>
            {props.children}
        </EmojiContext.Provider>
    ); 
}

// 2. Use the context. This custom hook allows easy access of this particular context
export const useEmojiContext = () => {
    return useContext(EmojiContext);
}
