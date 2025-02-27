import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './tags.css';

const Tags= () =>{
    const tagsList =[{
        id:1,
        tagName: "javascript",
        tagDesc:"for question regarding programming in ECMASscript (javaScript/JS) and its various dialects/implementations(excluding ActionSCript). please include all relevant tags on your question"
    },
    {
        id:2,
        tagName: "python",
        tagDesc:"python is a multi-paradigm dynamically typed, multipurpose programming language. It is designed to be quick to learn, understand,and use,and enforces a clean and uniform syntax."

    },
    {
        id:3,
        tagName: "c#",
        tagDesc: "C# (pronounced 'see sharp') is a high level,statically typed, multi-paradigm programming language developed by Mircosoft."
    },
    {
        id:4,
        tagName: "java",
        tagDesc:"Java is a high-level object oriented programming language.Use this tag when you're having problems using or understanding the language itself.",
    },
    {
        id:5,
        tagName: "php",
        tagDesc:"PHP is a widely used open source, general-pupose,multi-paradigm, dynimacally typed and interpreted scripting language originally designed for server-side web development. ",
    },
    {
        id:6,
        tagName: "html",
        tagDesc:"HTML(HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser",
    },
    {
        id:7,
        tagName: "anroid",
        tagDesc:"Android is Google's mobile operating system, used for programming or developing digital devices(smartphones, Tablets, automobiles,TV's wears, Glass,Iot)",
    },
    {
        id:8,
        tagName: "css",
        tagDesc:"CSS is a representation style sheet language used for describing the look and formatting of HTMl, XML documents and SVG elements including colors,layout,fonts and animations",
    },
    {
        id:9,
        tagName: "Reactjs",
        tagDesc:"React is a javascript library for building user interfaces. It uses a declararive,component-based paradigm and aims to be both  efficient and flaxiable",
    },
    {
        id:10,
        tagName: "node.js",
        tagDesc:"Node.js is an event-based, non blocking, asynchronous I/O runtime that uses Googl's V8 javaScript engine and library. ",
    }
]
    

  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div className='home-container-2'>
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'> A tag is a keyword or lable that categorizes your question with other, similar questions.</p>
            <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
            <div className='tags-list-container'>
                {
                    tagsList.map((tag) => (
                        < TagsList tag={tag} key={tagsList.id} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Tags
