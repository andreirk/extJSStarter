Ext.data.JsonP.Ext_Class({"alternateClassNames":[],"aliases":{},"enum":null,"parentMixins":[],"tagname":"class","subclasses":[],"extends":null,"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Class.html#Ext-Class' target='_blank'>Class.js</a></div></pre><div class='doc-contents'><p>Handles class creation throughout the framework. This is a low level factory that is used by <a href=\"#!/api/Ext.ClassManager\" rel=\"Ext.ClassManager\" class=\"docClass\">Ext.ClassManager</a> and generally\nshould not be used directly. If you choose to use <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a> you will lose out on the namespace, aliasing and depency loading\nfeatures made available by <a href=\"#!/api/Ext.ClassManager\" rel=\"Ext.ClassManager\" class=\"docClass\">Ext.ClassManager</a>. The only time you would use <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a> directly is to create an anonymous class.</p>\n\n<p>If you wish to create a class you should use <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> which aliases\n<a href=\"#!/api/Ext.ClassManager-method-create\" rel=\"Ext.ClassManager-method-create\" class=\"docClass\">Ext.ClassManager.create</a> to enable namespacing and dynamic dependency resolution.</p>\n\n<p><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a> is the factory and <strong>not</strong> the superclass of everything. For the base class that <strong>all</strong> Ext classes inherit\nfrom, see <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-alias' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/ClassManager.html#Ext-Class-cfg-alias' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-alias' class='name expandable'>alias</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]</span></div><div class='description'><div class='short'>List of short aliases for class names. ...</div><div class='long'><p>List of short aliases for class names.  Most useful for defining xtypes for widgets:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('MyApp.CoolPanel', {\n    extend: '<a href=\"#!/api/Ext.panel.Panel\" rel=\"Ext.panel.Panel\" class=\"docClass\">Ext.panel.Panel</a>',\n    alias: ['widget.coolpanel'],\n    title: 'Yeah!'\n});\n\n// Using <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>\n<a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('widget.coolpanel');\n\n// Using the shorthand for defining widgets by xtype\n<a href=\"#!/api/Ext-method-widget\" rel=\"Ext-method-widget\" class=\"docClass\">Ext.widget</a>('panel', {\n    items: [\n        {xtype: 'coolpanel', html: 'Foo'},\n        {xtype: 'coolpanel', html: 'Bar'}\n    ]\n});\n</code></pre>\n\n<p>Besides \"widget\" for xtype there are alias namespaces like \"feature\" for ftype and \"plugin\" for ptype.</p>\n</div></div></div><div id='cfg-alternateClassName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/ClassManager.html#Ext-Class-cfg-alternateClassName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-alternateClassName' class='name expandable'>alternateClassName</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]</span></div><div class='description'><div class='short'>Defines alternate names for this class. ...</div><div class='long'><p>Defines alternate names for this class.  For example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Developer', {\n    alternateClassName: ['Coder', 'Hacker'],\n    code: function(msg) {\n        alert('Typing... ' + msg);\n    }\n});\n\nvar joe = <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('Developer');\njoe.code('stackoverflow');\n\nvar rms = <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('Hacker');\nrms.code('hack hack');\n</code></pre>\n</div></div></div><div id='cfg-config' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-cfg-config' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-config' class='name expandable'>config</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>List of configuration options with their default values. ...</div><div class='long'><p>List of configuration options with their default values.</p>\n\n<p><strong>Note:</strong> You need to make sure <a href=\"#!/api/Ext.Base-method-initConfig\" rel=\"Ext.Base-method-initConfig\" class=\"docClass\">Ext.Base.initConfig</a> is called from your constructor if you are defining\nyour own class or singleton, unless you are extending a Component. Otherwise the generated getter and setter\nmethods will not be initialized.</p>\n\n<p>Each config item will have its own setter and getter method automatically generated inside the class prototype\nduring class creation time, if the class does not have those methods explicitly defined.</p>\n\n<p>As an example, let's convert the name property of a Person class to be a config item, then add extra age and\ngender items.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.sample.Person', {\n    config: {\n        name: 'Mr. Unknown',\n        age: 0,\n        gender: 'Male'\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n\n    // ...\n});\n</code></pre>\n\n<p>Within the class, this.name still has the default value of \"Mr. Unknown\". However, it's now publicly accessible\nwithout sacrificing encapsulation, via setter and getter methods.</p>\n\n<pre><code>var jacky = new Person({\n    name: \"Jacky\",\n    age: 35\n});\n\nalert(jacky.getAge());      // alerts 35\nalert(jacky.getGender());   // alerts \"Male\"\n\njacky.walk(10);             // alerts \"Jacky is walking 10 steps\"\n\njacky.setName(\"Mr. Nguyen\");\nalert(jacky.getName());     // alerts \"Mr. Nguyen\"\n\njacky.walk(10);             // alerts \"Mr. Nguyen is walking 10 steps\"\n</code></pre>\n\n<p>Notice that we changed the class constructor to invoke this.initConfig() and pass in the provided config object.\nTwo key things happened:</p>\n\n<ul>\n<li>The provided config object when the class is instantiated is recursively merged with the default config object.</li>\n<li>All corresponding setter methods are called with the merged values.</li>\n</ul>\n\n\n<p>Beside storing the given values, throughout the frameworks, setters generally have two key responsibilities:</p>\n\n<ul>\n<li>Filtering / validation / transformation of the given value before it's actually stored within the instance.</li>\n<li>Notification (such as firing events) / post-processing after the value has been set, or changed from a\nprevious value.</li>\n</ul>\n\n\n<p>By standardize this common pattern, the default generated setters provide two extra template methods that you\ncan put your own custom logics into, i.e: an \"applyFoo\" and \"updateFoo\" method for a \"foo\" config item, which are\nexecuted before and after the value is actually set, respectively. Back to the example class, let's validate that\nage must be a valid positive number, and fire an 'agechange' if the value is modified.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.sample.Person', {\n    config: {\n        // ...\n    },\n\n    constructor: {\n        // ...\n    },\n\n    applyAge: function(age) {\n        if (typeof age !== 'number' || age &lt; 0) {\n            console.warn(\"Invalid age, must be a positive number\");\n            return;\n        }\n\n        return age;\n    },\n\n    updateAge: function(newAge, oldAge) {\n        // age has changed from \"oldAge\" to \"newAge\"\n        this.fireEvent('agechange', this, newAge, oldAge);\n    }\n\n    // ...\n});\n\nvar jacky = new Person({\n    name: \"Jacky\",\n    age: 'invalid'\n});\n\nalert(jacky.getAge());      // alerts 0\n\nalert(jacky.setAge(-100));  // alerts 0\nalert(jacky.getAge());      // alerts 0\n\nalert(jacky.setAge(35));    // alerts 0\nalert(jacky.getAge());      // alerts 35\n</code></pre>\n\n<p>In other words, when leveraging the config feature, you mostly never need to define setter and getter methods\nexplicitly. Instead, \"apply<em>\" and \"update</em>\" methods should be implemented where necessary. Your code will be\nconsistent throughout and only contain the minimal logic that you actually care about.</p>\n\n<p>When it comes to inheritance, the default config of the parent class is automatically, recursively merged with\nthe child's default config. The same applies for mixins.</p>\n</div></div></div><div id='cfg-extend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-cfg-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-extend' class='name expandable'>extend</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The parent class that this class extends. ...</div><div class='long'><p>The parent class that this class extends. For example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Person', {\n    say: function(text) { alert(text); }\n});\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Developer', {\n    extend: 'Person',\n    say: function(text) { this.callParent([\"print \"+text]); }\n});\n</code></pre>\n</div></div></div><div id='cfg-inheritableStatics' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-cfg-inheritableStatics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-inheritableStatics' class='name expandable'>inheritableStatics</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>List of inheritable static methods for this class. ...</div><div class='long'><p>List of inheritable static methods for this class.\nOtherwise just like <a href=\"#!/api/Ext.Class-cfg-statics\" rel=\"Ext.Class-cfg-statics\" class=\"docClass\">statics</a> but subclasses inherit these methods.</p>\n</div></div></div><div id='cfg-mixins' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-cfg-mixins' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-mixins' class='name expandable'>mixins</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>List of classes to mix into this class. ...</div><div class='long'><p>List of classes to mix into this class. For example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('CanSing', {\n     sing: function() {\n         alert(\"I'm on the highway to hell...\")\n     }\n});\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Musician', {\n     mixins: ['CanSing']\n})\n</code></pre>\n\n<p>In this case the Musician class will get a <code>sing</code> method from CanSing mixin.</p>\n\n<p>But what if the Musician already has a <code>sing</code> method? Or you want to mix\nin two classes, both of which define <code>sing</code>?  In such a cases it's good\nto define mixins as an object, where you assign a name to each mixin:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Musician', {\n     mixins: {\n         canSing: 'CanSing'\n     },\n\n     sing: function() {\n         // delegate singing operation to mixin\n         this.mixins.canSing.sing.call(this);\n     }\n})\n</code></pre>\n\n<p>In this case the <code>sing</code> method of Musician will overwrite the\nmixed in <code>sing</code> method. But you can access the original mixed in method\nthrough special <code>mixins</code> property.</p>\n</div></div></div><div id='cfg-requires' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Loader.html#Ext-Class-cfg-requires' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-requires' class='name expandable'>requires</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]</span></div><div class='description'><div class='short'>List of classes that have to be loaded before instantiating this class. ...</div><div class='long'><p>List of classes that have to be loaded before instantiating this class.\nFor example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Mother', {\n    requires: ['Child'],\n    giveBirth: function() {\n        // we can be sure that child class is available.\n        return new Child();\n    }\n});\n</code></pre>\n</div></div></div><div id='cfg-singleton' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/ClassManager.html#Ext-Class-cfg-singleton' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-singleton' class='name expandable'>singleton</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>When set to true, the class will be instantiated as singleton. ...</div><div class='long'><p>When set to true, the class will be instantiated as singleton.  For example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Logger', {\n    singleton: true,\n    log: function(msg) {\n        console.log(msg);\n    }\n});\n\nLogger.log('Hello');\n</code></pre>\n</div></div></div><div id='cfg-statics' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-cfg-statics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-statics' class='name expandable'>statics</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>List of static methods for this class. ...</div><div class='long'><p>List of static methods for this class. For example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Computer', {\n     statics: {\n         factory: function(brand) {\n             // 'this' in static methods refer to the class itself\n             return new this(brand);\n         }\n     },\n\n     constructor: function() { ... }\n});\n\nvar dellComputer = Computer.factory('Dell');\n</code></pre>\n</div></div></div><div id='cfg-uses' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Loader.html#Ext-Class-cfg-uses' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-uses' class='name expandable'>uses</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]</span></div><div class='description'><div class='short'>List of optional classes to load together with this class. ...</div><div class='long'><p>List of optional classes to load together with this class. These aren't neccessarily loaded before\nthis class is created, but are guaranteed to be available before <a href=\"#!/api/Ext-method-onReady\" rel=\"Ext-method-onReady\" class=\"docClass\">Ext.onReady</a> listeners are\ninvoked. For example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Mother', {\n    uses: ['Child'],\n    giveBirth: function() {\n        // This code might, or might not work:\n        // return new Child();\n\n        // Instead use <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>() to load the class at the spot if not loaded already:\n        return <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('Child');\n    }\n});\n</code></pre>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-defaultPreprocessors' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-property-defaultPreprocessors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-property-defaultPreprocessors' class='name expandable'>defaultPreprocessors</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-preprocessors' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-property-preprocessors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-property-preprocessors' class='name expandable'>preprocessors</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.Class-method-constructor' class='name expandable'>Ext.Class</a>( <span class='pre'>data, onCreated</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></div><div class='description'><div class='short'>Create a new anonymous class. ...</div><div class='long'><p>Create a new anonymous class.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>An object represent the properties of this class</p>\n</div></li><li><span class='pre'>onCreated</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Optional, the callback function to be executed when this class is fully created.\nNote that the creation process can be asynchronous depending on the pre-processors used.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p>The newly created class</p>\n</div></li></ul></div></div></div><div id='method-create' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-method-create' class='name expandable'>create</a>( <span class='pre'>Class, data</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>Class</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPreprocessors' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-method-getPreprocessors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-method-getPreprocessors' class='name expandable'>getPreprocessors</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onBeforeCreated' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-method-onBeforeCreated' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-method-onBeforeCreated' class='name expandable'>onBeforeCreated</a>( <span class='pre'>Class, data, hooks</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>Class</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>hooks</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-process' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-method-process' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-method-process' class='name expandable'>process</a>( <span class='pre'>Class, data, onCreated</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>Class</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>onCreated</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-getDefaultPreprocessors' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-static-method-getDefaultPreprocessors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-static-method-getDefaultPreprocessors' class='name expandable'>getDefaultPreprocessors</a>( <span class='pre'></span> ) : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>[]<strong class='private signature' >private</strong><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Retrieve the array stack of default pre-processors ...</div><div class='long'><p>Retrieve the array stack of default pre-processors</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>[]</span><div class='sub-desc'><p>defaultPreprocessors</p>\n</div></li></ul></div></div></div><div id='static-method-getPreprocessor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-static-method-getPreprocessor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-static-method-getPreprocessor' class='name expandable'>getPreprocessor</a>( <span class='pre'>name</span> ) : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><strong class='private signature' >private</strong><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Retrieve a pre-processor callback function by its name, which has been registered before ...</div><div class='long'><p>Retrieve a pre-processor callback function by its name, which has been registered before</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span><div class='sub-desc'><p>preprocessor</p>\n</div></li></ul></div></div></div><div id='static-method-registerPreprocessor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-static-method-registerPreprocessor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-static-method-registerPreprocessor' class='name expandable'>registerPreprocessor</a>( <span class='pre'>name, fn</span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><strong class='chainable signature' >chainable</strong><strong class='private signature' >private</strong><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Register a new pre-processor to be used during the class creation process ...</div><div class='long'><p>Register a new pre-processor to be used during the class creation process</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The pre-processor's name</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The callback function to be executed. Typical format:</p>\n\n<pre><code>function(cls, data, fn) {\n    // Your code here\n\n    // Execute this when the processing is finished.\n    // Asynchronous processing is perfectly ok\n    if (fn) {\n        fn.call(this, cls, data);\n    }\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The created class</p>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The set of properties passed in <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a> constructor</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The callback function that <strong>must</strong> to be executed when this\npre-processor finishes, regardless of whether the processing is synchronous or aynchronous.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='static-method-setDefaultPreprocessorPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-static-method-setDefaultPreprocessorPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-static-method-setDefaultPreprocessorPosition' class='name expandable'>setDefaultPreprocessorPosition</a>( <span class='pre'>name, offset, relativeName</span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><strong class='chainable signature' >chainable</strong><strong class='private signature' >private</strong><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Insert this pre-processor at a specific position in the stack, optionally relative to\nany existing pre-processor. ...</div><div class='long'><p>Insert this pre-processor at a specific position in the stack, optionally relative to\nany existing pre-processor. For example:</p>\n\n<pre><code><a href=\"#!/api/Ext.Class-static-method-registerPreprocessor\" rel=\"Ext.Class-static-method-registerPreprocessor\" class=\"docClass\">Ext.Class.registerPreprocessor</a>('debug', function(cls, data, fn) {\n    // Your code here\n\n    if (fn) {\n        fn.call(this, cls, data);\n    }\n}).setDefaultPreprocessorPosition('debug', 'last');\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The pre-processor name. Note that it needs to be registered with\n<a href=\"#!/api/Ext.Class-static-method-registerPreprocessor\" rel=\"Ext.Class-static-method-registerPreprocessor\" class=\"docClass\">registerPreprocessor</a> before this</p>\n</div></li><li><span class='pre'>offset</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The insertion position. Four possible values are:\n'first', 'last', or: 'before', 'after' (relative to the name provided in the third argument)</p>\n</div></li><li><span class='pre'>relativeName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='static-method-setDefaultPreprocessors' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-static-method-setDefaultPreprocessors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-static-method-setDefaultPreprocessors' class='name expandable'>setDefaultPreprocessors</a>( <span class='pre'>preprocessors</span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><strong class='chainable signature' >chainable</strong><strong class='private signature' >private</strong><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Set the default array stack of default pre-processors ...</div><div class='long'><p>Set the default array stack of default pre-processors</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>preprocessors</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>","superclasses":[],"meta":{"docauthor":["Jacky Nguyen <jacky@sencha.com>"],"author":["Jacky Nguyen <jacky@sencha.com>"]},"requires":[],"html_meta":{"docauthor":null,"author":null},"statics":{"property":[],"cfg":[],"css_var":[],"method":[{"tagname":"method","owner":"Ext.Class","meta":{"static":true,"private":true},"name":"getDefaultPreprocessors","id":"static-method-getDefaultPreprocessors"},{"tagname":"method","owner":"Ext.Class","meta":{"static":true,"private":true},"name":"getPreprocessor","id":"static-method-getPreprocessor"},{"tagname":"method","owner":"Ext.Class","meta":{"static":true,"chainable":true,"private":true},"name":"registerPreprocessor","id":"static-method-registerPreprocessor"},{"tagname":"method","owner":"Ext.Class","meta":{"static":true,"chainable":true,"private":true},"name":"setDefaultPreprocessorPosition","id":"static-method-setDefaultPreprocessorPosition"},{"tagname":"method","owner":"Ext.Class","meta":{"static":true,"chainable":true,"private":true},"name":"setDefaultPreprocessors","id":"static-method-setDefaultPreprocessors"}],"event":[],"css_mixin":[]},"files":[{"href":"Class.html#Ext-Class","filename":"Class.js"}],"linenr":5,"members":{"property":[{"tagname":"property","owner":"Ext.Class","meta":{"private":true},"name":"defaultPreprocessors","id":"property-defaultPreprocessors"},{"tagname":"property","owner":"Ext.Class","meta":{"private":true},"name":"preprocessors","id":"property-preprocessors"}],"cfg":[{"tagname":"cfg","owner":"Ext.Class","meta":{},"name":"alias","id":"cfg-alias"},{"tagname":"cfg","owner":"Ext.Class","meta":{},"name":"alternateClassName","id":"cfg-alternateClassName"},{"tagname":"cfg","owner":"Ext.Class","meta":{},"name":"config","id":"cfg-config"},{"tagname":"cfg","owner":"Ext.Class","meta":{},"name":"extend","id":"cfg-extend"},{"tagname":"cfg","owner":"Ext.Class","meta":{},"name":"inheritableStatics","id":"cfg-inheritableStatics"},{"tagname":"cfg","owner":"Ext.Class","meta":{},"name":"mixins","id":"cfg-mixins"},{"tagname":"cfg","owner":"Ext.Class","meta":{},"name":"requires","id":"cfg-requires"},{"tagname":"cfg","owner":"Ext.Class","meta":{},"name":"singleton","id":"cfg-singleton"},{"tagname":"cfg","owner":"Ext.Class","meta":{},"name":"statics","id":"cfg-statics"},{"tagname":"cfg","owner":"Ext.Class","meta":{},"name":"uses","id":"cfg-uses"}],"css_var":[],"method":[{"tagname":"method","owner":"Ext.Class","meta":{},"name":"constructor","id":"method-constructor"},{"tagname":"method","owner":"Ext.Class","meta":{"private":true},"name":"create","id":"method-create"},{"tagname":"method","owner":"Ext.Class","meta":{"private":true},"name":"getPreprocessors","id":"method-getPreprocessors"},{"tagname":"method","owner":"Ext.Class","meta":{"private":true},"name":"onBeforeCreated","id":"method-onBeforeCreated"},{"tagname":"method","owner":"Ext.Class","meta":{"private":true},"name":"process","id":"method-process"}],"event":[],"css_mixin":[]},"inheritable":null,"private":null,"component":false,"name":"Ext.Class","singleton":false,"override":null,"inheritdoc":null,"id":"class-Ext.Class","mixins":[],"mixedInto":[]});