import React from "react";

const Blogs = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      <div className="border-2 text-left p-4">
        <h3 className="text-2xl m-4"> What is Context API?</h3>
        <p>
          <span className="font-semibold">Ans:</span> Context API is the alternative to "prop drilling" or
          moving props from grandparent to child to parent, and so on. There are
          no restrictions on what type of values you can provide, so you can
          easily pass in functions that can be used to communicate events back
          from consumers. To create a context, call the createContext function
          with an arbitrary value. This will be the default value provided to
          the consumers. Optionally provide an interface describing your
          provided object. The returned object will contain helper components
          you need to provide or consume this context.
        </p>
      </div>
      <div className="border-2 text-left p-4">
        <h3 className="text-2xl m-4"> What is Context API?</h3>
        <p>
          <span className="font-semibold">Ans:</span> Semantic tag accurately describe the purpose of the
          element and the type of content that is inside them. List of new
          semantic elements:
          article,aside,details,figcaption,figure,footer,header,
          main,mark,nav,section,summary,time
        </p>
      </div>
      <div className="border-2 text-left p-4">
        <h3 className="text-2xl m-4"> What is Context API?</h3>
        <p>
          <span className="font-semibold">Ans:</span> Inline: The element doesn't start on a new line and
          only occupy just the width in requires. You can't set the width or
          height. 
          <br />
          Inline Block: It's formatted just like the inline element,
          where it doesn't start on a new line. But, you can set width and
          height values. 
          <br />
          Block: The element will start on a new line and occupy
          the full width available. And you can set width and height values.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
