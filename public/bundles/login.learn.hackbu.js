!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}(function(modules){for(var i in modules)if(Object.prototype.hasOwnProperty.call(modules,i))switch(typeof modules[i]){case"function":break;case"object":modules[i]=function(_m){var args=_m.slice(1),fn=modules[_m[0]];return function(a,b,c){fn.apply(this,[a,b,c].concat(args))}}(modules[i]);break;default:modules[i]=modules[modules[i]]}return modules}({0:function(module,exports,__webpack_require__){module.exports=__webpack_require__(231)},2:function(module,exports,__webpack_require__){module.exports=__webpack_require__(3)(7)},3:function(module,exports){module.exports=vendor},4:function(module,exports,__webpack_require__){module.exports=__webpack_require__(3)(40)},73:function(module,exports,__webpack_require__){module.exports=__webpack_require__(3)(2)},75:function(module,exports,__webpack_require__){module.exports=__webpack_require__(3)(208)},84:function(module,exports,__webpack_require__){module.exports=__webpack_require__(3)(5)},95:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_bemClass=__webpack_require__(84);__webpack_require__(96);var ActivityIndicator=function(){var className=(0,_bemClass.block)("activity-indicator");return _react2.default.createElement("div",{className:className})};exports.default=ActivityIndicator},96:function(module,exports){},105:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_lodash=__webpack_require__(73),_lodash2=_interopRequireDefault(_lodash),_classnames=__webpack_require__(106),_classnames2=_interopRequireDefault(_classnames),_TextInput=__webpack_require__(107),_TextInput2=_interopRequireDefault(_TextInput),_SelectInput=__webpack_require__(110),_SelectInput2=_interopRequireDefault(_SelectInput),_DateInput=__webpack_require__(113),_DateInput2=_interopRequireDefault(_DateInput),_NumberInput=__webpack_require__(116),_NumberInput2=_interopRequireDefault(_NumberInput),_VideoInput=__webpack_require__(119),_VideoInput2=_interopRequireDefault(_VideoInput),_CollectionInput=__webpack_require__(122),_CollectionInput2=_interopRequireDefault(_CollectionInput),_PasswordInput=__webpack_require__(125),_PasswordInput2=_interopRequireDefault(_PasswordInput);__webpack_require__(128);var FormView=function(props){var children=props.children.map(function(child,i){return _react2.default.cloneElement(child,{onChange:props.onChange,value:_lodash2.default.get(props.data,child.props.name),key:i,error:_lodash2.default.get(props.error,"errors['"+child.props.name+"'].message")})}),submitButtonClasses=(0,_classnames2.default)({"form-view__submit-button":!0,"form-view__submit-button--disabled":props.disableSubmit}),submitButton=_react2.default.createElement("div",{className:submitButtonClasses,onClick:props.onSubmit},props.submitText);return _react2.default.createElement("div",{className:"form-view"},_react2.default.createElement("div",{className:"form-view__fields-container"},children),submitButton)};FormView.propTypes={onChange:_react2.default.PropTypes.func,onSubmit:_react2.default.PropTypes.func,children:_react2.default.PropTypes.node,data:_react2.default.PropTypes.object,error:_react2.default.PropTypes.object,disableSubmit:_react2.default.PropTypes.bool,submitText:_react2.default.PropTypes.string},FormView.defaultProps={disableSubmit:!1,submitText:"Submit"},FormView.TextInput=_TextInput2.default,FormView.SelectInput=_SelectInput2.default,FormView.DateInput=_DateInput2.default,FormView.NumberInput=_NumberInput2.default,FormView.VideoInput=_VideoInput2.default,FormView.CollectionInput=_CollectionInput2.default,FormView.PasswordInput=_PasswordInput2.default,exports.default=FormView},106:function(module,exports,__webpack_require__){module.exports=__webpack_require__(3)(6)},107:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react);__webpack_require__(108);var TextInput=function(props){return _react2.default.createElement("div",{className:"text-input"},_react2.default.createElement("label",null,props.title),_react2.default.createElement("input",{type:"text",name:props.name,value:props.value,onChange:props.onChange}),_react2.default.createElement("div",{className:"text-input__validation-error"},props.error))};TextInput.propTypes={onChange:_react2.default.PropTypes.func,value:_react2.default.PropTypes.string,name:_react2.default.PropTypes.string.isRequired,title:_react2.default.PropTypes.string.isRequired,error:_react2.default.PropTypes.string},TextInput.defaultProps={value:""},exports.default=TextInput},108:96,110:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react);__webpack_require__(111);var SelectInput=function(props){var choices=props.choices.map(function(choice){return _react2.default.createElement("option",{value:choice,key:choice},choice)});return _react2.default.createElement("div",{className:"select-input"},_react2.default.createElement("label",null,props.title),_react2.default.createElement("select",{value:props.value,name:props.name,onChange:props.onChange},choices),_react2.default.createElement("div",{className:"select-input__validation-error"},props.error))};SelectInput.propTypes={onChange:_react2.default.PropTypes.func,value:_react2.default.PropTypes.string,choices:_react2.default.PropTypes.array,name:_react2.default.PropTypes.string.isRequired,title:_react2.default.PropTypes.string.isRequired,error:_react2.default.PropTypes.string},SelectInput.defaultProps={value:""},exports.default=SelectInput},111:96,113:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__(2),_react2=_interopRequireDefault(_react);__webpack_require__(114);var DateInput=function(_React$Component){function DateInput(props){_classCallCheck(this,DateInput);var _this=_possibleConstructorReturn(this,(DateInput.__proto__||Object.getPrototypeOf(DateInput)).call(this,props));return _this.onChangeYear=_this.onChangeYear.bind(_this),_this.onChangeMonth=_this.onChangeMonth.bind(_this),_this.onChangeDay=_this.onChangeDay.bind(_this),_this}return _inherits(DateInput,_React$Component),_createClass(DateInput,[{key:"onChangeYear",value:function(e,value){value.setYear(e.target.value),this.props.onChange({target:{value:value.toISOString(),name:this.props.name}})}},{key:"onChangeMonth",value:function(e,value){value.setMonth(e.target.value-1),this.props.onChange({target:{value:value.toISOString(),name:this.props.name}})}},{key:"onChangeDay",value:function(e,value){value.setDate(e.target.value),this.props.onChange({target:{value:value.toISOString(),name:this.props.name}})}},{key:"renderYearPicker",value:function(value){var _this2=this;return _react2.default.createElement("input",{type:"number",min:"1995",value:value.getFullYear(),onChange:function(e){return _this2.onChangeYear(e,value)}})}},{key:"renderMonthPicker",value:function(value){var _this3=this;return _react2.default.createElement("input",{type:"number",min:"1",max:"12",value:value.getMonth()+1,onChange:function(e){return _this3.onChangeMonth(e,value)}})}},{key:"renderDayPicker",value:function(value){var _this4=this;return _react2.default.createElement("input",{type:"number",min:"1",max:new Date(value.getFullYear(),value.getMonth()+1,0).getDate(),value:value.getDate(),onChange:function(e){return _this4.onChangeDay(e,value)}})}},{key:"render",value:function(){var value=new Date(this.props.value);return _react2.default.createElement("div",{className:"date-input"},_react2.default.createElement("label",null,this.props.title),_react2.default.createElement("div",{className:"date-input__field-container"},this.renderMonthPicker(value),this.renderDayPicker(value),this.renderYearPicker(value)),_react2.default.createElement("div",{className:"date-input__validation-error"},this.props.error))}}]),DateInput}(_react2.default.Component);DateInput.propTypes={onChange:_react2.default.PropTypes.func,value:_react2.default.PropTypes.string,name:_react2.default.PropTypes.string.isRequired,title:_react2.default.PropTypes.string.isRequired,error:_react2.default.PropTypes.string},DateInput.defaultProps={value:""},exports.default=DateInput},114:96,116:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react);__webpack_require__(117);var NumberInput=function(props){return _react2.default.createElement("div",{className:"text-input"},_react2.default.createElement("label",null,props.title),_react2.default.createElement("input",{type:"number",name:props.name,value:props.value,onChange:props.onChange}),_react2.default.createElement("div",{className:"text-input__validation-error"},props.error))};NumberInput.propTypes={onChange:_react2.default.PropTypes.func,value:_react2.default.PropTypes.number,name:_react2.default.PropTypes.string.isRequired,title:_react2.default.PropTypes.string.isRequired,error:_react2.default.PropTypes.string},NumberInput.defaultProps={value:0},exports.default=NumberInput},117:96,119:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_lodash=__webpack_require__(73),_lodash2=_interopRequireDefault(_lodash),_TextInput=__webpack_require__(107),_TextInput2=_interopRequireDefault(_TextInput);__webpack_require__(120);var VideoInput=function(props){var changeHandler=function(e){var value=_lodash2.default.cloneDeep(props.value);value[e.target.name]=e.target.value,props.onChange({target:{value:value,name:props.name}})},titleInput=_react2.default.createElement("div",{className:"video-input__title-input"},_react2.default.createElement(_TextInput2.default,{title:"Video Title",value:props.value.title,name:"title",onChange:changeHandler})),videoIdInput=_react2.default.createElement("div",{className:"video-input__video-id-input"},_react2.default.createElement(_TextInput2.default,{title:"YouTube ID",value:props.value.videoid,name:"videoid",onChange:changeHandler})),validationError=_react2.default.createElement("div",{className:"video-input__validation-error"},props.error);return _react2.default.createElement("div",{className:"video-input"},_react2.default.createElement("div",{className:"video-input__input-container"},titleInput,videoIdInput),validationError)};VideoInput.propTypes={onChange:_react2.default.PropTypes.func,value:_react2.default.PropTypes.shape({_id:_react2.default.PropTypes.string,title:_react2.default.PropTypes.string,videoid:_react2.default.PropTypes.string}),name:_react2.default.PropTypes.string.isRequired,error:_react2.default.PropTypes.string},VideoInput.defaultProps={value:{title:"",videoid:""}},exports.default=VideoInput},120:96,122:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_lodash=__webpack_require__(73),_lodash2=_interopRequireDefault(_lodash),_bemClass=__webpack_require__(84);__webpack_require__(123);var CollectionInput=function(props){var changeHandler=function(e){var value=_lodash2.default.cloneDeep(props.value);value[e.target.name]=e.target.value,props.onChange({target:{value:value,name:props.name}})},moveUpHandler=function(i){if(!(i<=0)){var element=props.value[i],value=_lodash2.default.cloneDeep(props.value);value[i]=value[i-1],value[i-1]=element,props.onChange({target:{value:value,name:props.name}})}},moveDownHandler=function(i){if(!(i>=props.value.length-1)){var element=props.value[i],value=_lodash2.default.cloneDeep(props.value);value[i]=value[i+1],value[i+1]=element,props.onChange({target:{value:value,name:props.name}})}},deleteHandler=function(id){var value=_lodash2.default.cloneDeep(props.value);props.onChange({target:{value:_lodash2.default.reject(value,["_id",id]),name:props.name}})},insertHandler=function(){var value=_lodash2.default.cloneDeep(props.value);value.push({_id:_lodash2.default.uniqueId("new-item")}),props.onChange({target:{value:value,name:props.name}})},items=_lodash2.default.values(props.value).map(function(item,i){var Input=props.input,classRoot=(0,_bemClass.block)("collection-input"),buttons=_react2.default.createElement("div",{className:"collection-input__buttons"},_react2.default.createElement("div",{className:classRoot.element("button").modifier("up"),onClick:function(){return moveUpHandler(i)}}),_react2.default.createElement("div",{className:classRoot.element("button").modifier("down"),onClick:function(){return moveDownHandler(i)}}),_react2.default.createElement("div",{className:classRoot.element("button").modifier("delete"),onClick:function(){return deleteHandler(item._id)}}));return _react2.default.createElement("div",{className:"collection-input__item-container",key:item._id},_react2.default.createElement("div",{className:"collection-input__item"},_react2.default.createElement(Input,{name:i.toString(),value:item,onChange:changeHandler}),buttons))});return _react2.default.createElement("div",{className:"collection-input"},_react2.default.createElement("label",{className:"collection-input__title"},props.title),items,_react2.default.createElement("div",{className:"collection-input__insert-button",onClick:insertHandler},"New Item"))};CollectionInput.propTypes={onChange:_react2.default.PropTypes.func,value:_react2.default.PropTypes.array,name:_react2.default.PropTypes.string.isRequired,title:_react2.default.PropTypes.string.isRequired,error:_react2.default.PropTypes.string},CollectionInput.defaultProps={value:[]},exports.default=CollectionInput},123:96,125:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react);__webpack_require__(126);var PasswordInput=function(props){return _react2.default.createElement("div",{className:"password-input"},_react2.default.createElement("label",null,props.title),_react2.default.createElement("input",{type:"password",name:props.name,value:props.value,onChange:props.onChange}),_react2.default.createElement("div",{className:"password-input__validation-error"},props.error))};PasswordInput.propTypes={onChange:_react2.default.PropTypes.func,value:_react2.default.PropTypes.string,name:_react2.default.PropTypes.string.isRequired,title:_react2.default.PropTypes.string.isRequired,error:_react2.default.PropTypes.string},PasswordInput.defaultProps={value:""},exports.default=PasswordInput},126:96,128:96,231:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_reactDom=__webpack_require__(4),_reactDom2=_interopRequireDefault(_reactDom),_LoginForm=__webpack_require__(232),_LoginForm2=_interopRequireDefault(_LoginForm);__webpack_require__(236);var container=document.getElementById("login-container");_reactDom2.default.render(_react2.default.createElement(_LoginForm2.default,null),container)},232:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_bemClass=__webpack_require__(84),_isomorphicFetch=__webpack_require__(75),_isomorphicFetch2=_interopRequireDefault(_isomorphicFetch),_lodash=__webpack_require__(73),_lodash2=_interopRequireDefault(_lodash),_ActivityIndicator=__webpack_require__(95),_ActivityIndicator2=_interopRequireDefault(_ActivityIndicator),_FormView=__webpack_require__(105),_FormView2=_interopRequireDefault(_FormView);__webpack_require__(233);var LoginForm=function(_React$Component){function LoginForm(props){_classCallCheck(this,LoginForm);var _this=_possibleConstructorReturn(this,(LoginForm.__proto__||Object.getPrototypeOf(LoginForm)).call(this,props));return _this.state={user:{local:{username:"",password:"",email:"",firstname:"",lastname:""}},isFetching:!1,currentForm:"login",error:null},_this.onSubmit=_this.onSubmit.bind(_this),_this.onSwitchForm=_this.onSwitchForm.bind(_this),_this.onEdit=_this.onEdit.bind(_this),_this}return _inherits(LoginForm,_React$Component),_createClass(LoginForm,[{key:"onSuccess",value:function(json){window.location.href="/dashboard"}},{key:"onError",value:function(err){this.setState({error:err,isFetching:!1})}},{key:"onSubmit",value:function(){var route="login"==this.state.currentForm?"session":"users/me",options={credentials:"include",method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(this.state.user)};this.setState({isFetching:!0});var that=this;return(0,_isomorphicFetch2.default)("/api/"+route,options).then(function(response){response.ok?response.json().then(function(json){return that.onSuccess(json)}):response.json().then(function(json){return that.onError(json)})}).catch(function(error){return that.onError(error)})}},{key:"onSwitchForm",value:function(){"login"==this.state.currentForm?this.setState({currentForm:"signup",error:null}):this.setState({currentForm:"login",error:null})}},{key:"onEdit",value:function(e){var user=_lodash2.default.cloneDeep(this.state.user);_lodash2.default.set(user,e.target.name,e.target.value),this.setState({user:user})}},{key:"renderActivityIndicator",value:function(className){return this.state.isFetching&&_react2.default.createElement("div",{className:className.element("activity-indicator")},_react2.default.createElement(_ActivityIndicator2.default,null))}},{key:"renderHeader",value:function(className){return _react2.default.createElement("div",{className:className.element("logo")})}},{key:"renderError",value:function(){return!_lodash2.default.isNil(this.state.error)&&!_lodash2.default.isNil(this.state.error.message)&&_react2.default.createElement("div",{className:"alert alert-danger"},this.state.error.message)}},{key:"renderLoginForm",value:function(className){if(0==this.state.isFetching&&"login"==this.state.currentForm)return _react2.default.createElement("div",{className:className.element("fields").modifier("signup")},this.renderHeader(className),this.renderError(),_react2.default.createElement(_FormView2.default,{data:this.state.user,error:this.state.error,onChange:this.onEdit,onSubmit:this.onSubmit,submitText:"Login"},_react2.default.createElement(_FormView2.default.TextInput,{title:"Username",name:"local.username"}),_react2.default.createElement(_FormView2.default.PasswordInput,{title:"Password",name:"local.password"})))}},{key:"renderSignupForm",value:function(className){if(0==this.state.isFetching&&"signup"==this.state.currentForm)return _react2.default.createElement("div",{className:className.element("fields").modifier("signup")},this.renderHeader(className),this.renderError(),_react2.default.createElement(_FormView2.default,{data:this.state.user,error:this.state.error,onChange:this.onEdit,onSubmit:this.onSubmit,submitText:"Register"},_react2.default.createElement(_FormView2.default.TextInput,{title:"First Name",name:"local.firstname"}),_react2.default.createElement(_FormView2.default.TextInput,{title:"Last Name",name:"local.lastname"}),_react2.default.createElement(_FormView2.default.TextInput,{title:"Email Address",name:"local.email"}),_react2.default.createElement(_FormView2.default.TextInput,{title:"Username",name:"local.username"}),_react2.default.createElement(_FormView2.default.PasswordInput,{title:"Password",name:"local.password"})))}},{key:"renderSwitchLink",value:function(className){if(0==this.state.isFetching)return"login"==this.state.currentForm?_react2.default.createElement("div",{className:className.element("switch-link")},"Don't have an account? ",_react2.default.createElement("b",{onClick:this.onSwitchForm},"Sign Up")):_react2.default.createElement("div",{className:className.element("switch-link")},"Already have an account? ",_react2.default.createElement("b",{onClick:this.onSwitchForm},"Log In"))}},{key:"render",value:function(){var className=(0,_bemClass.block)("auth-form");return _react2.default.createElement("div",{className:className},this.renderActivityIndicator(className),this.renderLoginForm(className),this.renderSignupForm(className),this.renderSwitchLink(className))}}]),LoginForm}(_react2.default.Component);LoginForm.propTypes={},exports.default=LoginForm},233:96,236:96}));