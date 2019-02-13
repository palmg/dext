import {Document} from 'dossr'
import React from "react";

/**
 * 1. 仅用于构建整体html文档,如果没有_document.js文件，nextjs会自动产生。
 * 2. 仅仅会在服务端运行，所以切记不要将事件等功能写在这里
 * 3. 通常用于常规静态样式构建.
 */
export default class TextDocument extends Document {}