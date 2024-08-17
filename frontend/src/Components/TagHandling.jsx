import React, { useEffect, useState } from "react";

const TagInput = ({ availableTags, onTagsChange, SelectedTags }) => {
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    setTags([...SelectedTags]);
  }, [SelectedTags]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value) {
      setSuggestions(
        availableTags.filter(
          (tag) =>
            tag.toLowerCase().includes(value.toLowerCase()) &&
            !tags.includes(tag)
        )
      );
    } else {
      setSuggestions([]);
    }
  };

  const handleAddTag = (tag) => {
    const newTags = [...tags, tag];
    setTags(newTags);
    onTagsChange(newTags); // Send updated tags to the parent
    setInput("");
    setSuggestions([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      if (suggestions.length && !tags.includes(input.trim())) {
        handleAddTag(suggestions[0]);
      }
    } else if (e.key === "Backspace" && input === "" && tags.length) {
      const newTags = tags.slice(0, tags.length - 1);
      setTags(newTags);
      onTagsChange(newTags); // Send updated tags to the parent
    }
  };

  const handleRemoveTag = (indexToRemove) => {
    const newTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(newTags);
    onTagsChange(newTags); // Send updated tags to the parent
  };
  return (
    <div className="tag-input-container">
      <ul className="tags">
        {tags.map((tag, index) => (
          <li key={index} className="tag">
            {tag}
            <span
              className="tag-close-icon"
              onClick={() => handleRemoveTag(index)}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Add a Tag"
        className="tag-input"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleAddTag(suggestion)}
              className="suggestion-item"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagInput;
