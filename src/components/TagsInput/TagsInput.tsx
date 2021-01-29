import React, {useState} from "react";
import {
  InputWrapper,
  Suggestion,
  SuggestionsWrapper,
  Tag,
  TagInput,
  Wrapper
} from "./TagsInput.styles";

interface IProps {
  /**
   * Suggestions to display under the input
   * as the user types.
   */
  suggestions?: {
    name: string;
  }[];
  /**
   * Called when the selected tags are mutated.
   */
  onChange?: (
    tags: {
      name: string;
    }[]
  ) => void;
  /**
   * The placeholder text to show in the input
   * before the user types.
   */
  placeholder?: string;
}

/**
 * Allows for the entry of tags with suggestions.
 */
const TagsInput = ({
  suggestions = [{ name: "test" }, { name: "one" }, { name: "two" }],
  onChange,
  placeholder = "Type here...",
}: IProps) => {
  /*
   * The text in the tag input.
   */
  const [tagValue, setTagValue] = useState("");
  /*
   * Controls whether or not the suggestions are displayed
   * based on whether or not the tag input is focused.
   */
  const [focused, setFocused] = useState(false);
  /*
   * A list of the currently entered tags.
   */
  const [tags, setTags] = useState<string[]>([]);
  /*
   * The index of the selected suggestion.
   */
  const [selectedIndex, setSelectedIndex] = useState(-1);

  /**
   * Filters suggestions by current input value.
   */
  const getSuggestions = () =>
    tagValue == ""
      ? suggestions
      : suggestions.filter((x) => x.name.indexOf(tagValue) >= 0);

  const currSuggestions = getSuggestions();

  /**
   * Called when a key is pressed.
   */
  const keyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSelectedIndex(-1);
      if (selectedIndex > -1)
        return addTag(currSuggestions[selectedIndex].name);

      addTag(tagValue);

      return setTagValue("");
    }

    if (e.key === "Backspace" && tagValue == "") {
      e.preventDefault();
      setTags(tags.slice(0, tags.length - 1));
      return;
    }
    
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(selectedIndex + 1);
      return;
    }

    if (e.key === "ArrowUp") {
      if(selectedIndex > -1)
        setSelectedIndex(selectedIndex - 1);
      return;
    }
  };

  /**
   * Adds a tag.
   */
  const addTag = (name: string) => {
    onChange?.([...tags, name].map((x) => ({ name: x })));
    setTagValue("");
    setTags([...tags, name]);
  };


  return (
    <Wrapper>
      <InputWrapper>
        {tags.map((item, i) => (
          <Tag>{item}</Tag>
        ))}
        <TagInput
          placeholder={placeholder}
          value={tagValue}
          onChange={(e) => setTagValue(e.target.value)}
          onKeyDown={keyPressed}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 100)}
        />
      </InputWrapper>
      {focused ? (
        <SuggestionsWrapper>
          {currSuggestions.map((item, i) => (
            <Suggestion
              href="#"
              selected={selectedIndex == i}
              onClick={(e) => {
                console.log("h");
                e.preventDefault();
                addTag(item.name);
              }}
            >
              {item.name}
            </Suggestion>
          ))}
        </SuggestionsWrapper>
      ) : null}
    </Wrapper>
  );
};

export default TagsInput;
