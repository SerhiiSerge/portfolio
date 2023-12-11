(() => {
    var __webpack_modules__ = {
        801: function(module) {
            /**
 * lightgallery | 2.7.1 | January 11th 2023
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */
            !function(e, l) {
                true ? module.exports = l() : 0;
            }(0, (function() {
                "use strict";
                var e = function() {
                    return (e = Object.assign || function(e) {
                        for (var l, n = 1, t = arguments.length; n < t; n++) for (var c in l = arguments[n]) Object.prototype.hasOwnProperty.call(l, c) && (e[c] = l[c]);
                        return e;
                    }).apply(this, arguments);
                }, l = {
                    fullScreen: !0,
                    fullscreenPluginStrings: {
                        toggleFullscreen: "Toggle Fullscreen"
                    }
                };
                return function() {
                    function n(n, t) {
                        return this.core = n, this.$LG = t, this.settings = e(e({}, l), this.core.settings), 
                        this;
                    }
                    return n.prototype.init = function() {
                        var e = "";
                        if (this.settings.fullScreen) {
                            if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) return;
                            e = '<button type="button" aria-label="' + this.settings.fullscreenPluginStrings.toggleFullscreen + '" class="lg-fullscreen lg-icon"></button>', 
                            this.core.$toolbar.append(e), this.fullScreen();
                        }
                    }, n.prototype.isFullScreen = function() {
                        return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
                    }, n.prototype.requestFullscreen = function() {
                        var e = document.documentElement;
                        e.requestFullscreen ? e.requestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen();
                    }, n.prototype.exitFullscreen = function() {
                        document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
                    }, n.prototype.fullScreen = function() {
                        var e = this;
                        this.$LG(document).on("fullscreenchange.lg.global" + this.core.lgId + " \n            webkitfullscreenchange.lg.global" + this.core.lgId + " \n            mozfullscreenchange.lg.global" + this.core.lgId + " \n            MSFullscreenChange.lg.global" + this.core.lgId, (function() {
                            e.core.lgOpened && e.core.outer.toggleClass("lg-fullscreen-on");
                        })), this.core.outer.find(".lg-fullscreen").first().on("click.lg", (function() {
                            e.isFullScreen() ? e.exitFullscreen() : e.requestFullscreen();
                        }));
                    }, n.prototype.closeGallery = function() {
                        this.isFullScreen() && this.exitFullscreen();
                    }, n.prototype.destroy = function() {
                        this.$LG(document).off("fullscreenchange.lg.global" + this.core.lgId + " \n            webkitfullscreenchange.lg.global" + this.core.lgId + " \n            mozfullscreenchange.lg.global" + this.core.lgId + " \n            MSFullscreenChange.lg.global" + this.core.lgId);
                    }, n;
                }();
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };
        function addTouchClass() {
            if (isMobile.any()) document.documentElement.classList.add("touch");
        }
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function fullVHfix() {
            const fullScreens = document.querySelectorAll("[data-fullscreen]");
            if (fullScreens.length && isMobile.any()) {
                window.addEventListener("resize", fixHeight);
                function fixHeight() {
                    let vh = window.innerHeight * .01;
                    document.documentElement.style.setProperty("--vh", `${vh}px`);
                }
                fixHeight();
            }
        }
        let bodyLockStatus = true;
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function rippleEffect() {
            document.addEventListener("click", (function(e) {
                const targetItem = e.target;
                if (targetItem.closest("[data-ripple]")) {
                    const button = targetItem.closest("[data-ripple]");
                    const ripple = document.createElement("span");
                    const diameter = Math.max(button.clientWidth, button.clientHeight);
                    const radius = diameter / 2;
                    ripple.style.width = ripple.style.height = `${diameter}px`;
                    ripple.style.left = `${e.pageX - (button.getBoundingClientRect().left + scrollX) - radius}px`;
                    ripple.style.top = `${e.pageY - (button.getBoundingClientRect().top + scrollY) - radius}px`;
                    ripple.classList.add("ripple");
                    button.dataset.ripple === "once" && button.querySelector(".ripple") ? button.querySelector(".ripple").remove() : null;
                    button.appendChild(ripple);
                    const timeOut = getAnimationDuration(ripple);
                    setTimeout((() => {
                        ripple ? ripple.remove() : null;
                    }), timeOut);
                    function getAnimationDuration() {
                        const aDuration = window.getComputedStyle(ripple).animationDuration;
                        return aDuration.includes("ms") ? aDuration.replace("ms", "") : aDuration.replace("s", "") * 1e3;
                    }
                }
            }));
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.popupLogging(`Woke up`);
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if (this._dataValue !== "error") {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        } else this.popupLogging(`Attribute in ${buttonOpen.classList} is not filled`);
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                    if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                            const iframe = document.createElement("iframe");
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                            iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                            iframe.setAttribute("src", urlVideo);
                            if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                                this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                            }
                            this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.popupLogging(`Opened popup`);
                    } else this.popupLogging(`There is no such popup. Check the correctness of the entry.`);
                }
            }
            close(selectorValue) {
                if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
                this.popupLogging(`Closed popap`);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                this.youTubeCode = buttons.getAttribute(this.options.youtubeAttribute) ? buttons.getAttribute(this.options.youtubeAttribute) : null;
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && focusedIndex === 0) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
            popupLogging(message) {
                this.options.logging ? FLS(`[Popup]: ${message}`) : null;
            }
        }
        flsModules.popup = new Popup({});
        let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    const headerElement = document.querySelector(headerItem);
                    if (!headerElement.classList.contains("_header-scroll")) {
                        headerElement.style.cssText = `transition-duration: 0s;`;
                        headerElement.classList.add("_header-scroll");
                        headerItemHeight = headerElement.offsetHeight;
                        headerElement.classList.remove("_header-scroll");
                        setTimeout((() => {
                            headerElement.style.cssText = ``;
                        }), 0);
                    } else headerItemHeight = headerElement.offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if (typeof SmoothScroll !== "undefined") (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                FLS(`[gotoBlock]: Юхуу...їдемо до ${targetBlock}`);
            } else FLS(`[gotoBlock]: Йой... Такого блоку немає на сторінці: ${targetBlock}`);
        };
        function formFieldsInit(options = {
            viewPass: false,
            autoHeight: false
        }) {
            document.body.addEventListener("focusin", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.add("_form-focus");
                        targetElement.parentElement.classList.add("_form-focus");
                    }
                    formValidate.removeError(targetElement);
                    targetElement.hasAttribute("data-validate") ? formValidate.removeError(targetElement) : null;
                }
            }));
            document.body.addEventListener("focusout", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.remove("_form-focus");
                        targetElement.parentElement.classList.remove("_form-focus");
                    }
                    targetElement.hasAttribute("data-validate") ? formValidate.validateInput(targetElement) : null;
                }
            }));
            if (options.viewPass) document.addEventListener("click", (function(e) {
                let targetElement = e.target;
                if (targetElement.closest('[class*="__viewpass"]')) {
                    let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                    targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                    targetElement.classList.toggle("_viewpass-active");
                }
            }));
            if (options.autoHeight) {
                const textareas = document.querySelectorAll("textarea[data-autoheight]");
                if (textareas.length) {
                    textareas.forEach((textarea => {
                        const startHeight = textarea.hasAttribute("data-autoheight-min") ? Number(textarea.dataset.autoheightMin) : Number(textarea.offsetHeight);
                        const maxHeight = textarea.hasAttribute("data-autoheight-max") ? Number(textarea.dataset.autoheightMax) : 1 / 0;
                        setHeight(textarea, Math.min(startHeight, maxHeight));
                        textarea.addEventListener("input", (() => {
                            if (textarea.scrollHeight > startHeight) {
                                textarea.style.height = `auto`;
                                setHeight(textarea, Math.min(Math.max(textarea.scrollHeight, startHeight), maxHeight));
                            }
                        }));
                    }));
                    function setHeight(textarea, height) {
                        textarea.style.height = `${height}px`;
                    }
                }
            }
        }
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if (formRequiredItem.dataset.required === "email") {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (flsModules.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        function formSubmit() {
            const forms = document.forms;
            if (forms.length) for (const form of forms) {
                form.addEventListener("submit", (function(e) {
                    const form = e.target;
                    formSubmitAction(form, e);
                }));
                form.addEventListener("reset", (function(e) {
                    const form = e.target;
                    formValidate.formClean(form);
                }));
            }
            async function formSubmitAction(form, e) {
                const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
                if (error === 0) {
                    const ajax = form.hasAttribute("data-ajax");
                    if (ajax) {
                        e.preventDefault();
                        const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                        const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                        const formData = new FormData(form);
                        form.classList.add("_sending");
                        const response = await fetch(formAction, {
                            method: formMethod,
                            body: formData
                        });
                        if (response.ok) {
                            let responseResult = await response.json();
                            form.classList.remove("_sending");
                            formSent(form, responseResult);
                        } else {
                            alert("Error");
                            form.classList.remove("_sending");
                        }
                    } else if (form.hasAttribute("data-dev")) {
                        e.preventDefault();
                        formSent(form);
                    }
                } else {
                    e.preventDefault();
                    if (form.querySelector("._form-error") && form.hasAttribute("data-goto-error")) {
                        const formGoToErrorClass = form.dataset.gotoError ? form.dataset.gotoError : "._form-error";
                        gotoBlock(formGoToErrorClass, true, 1e3);
                    }
                }
            }
            function formSent(form, responseResult = ``) {
                document.dispatchEvent(new CustomEvent("formSent", {
                    detail: {
                        form
                    }
                }));
                setTimeout((() => {
                    if (flsModules.popup) {
                        const popup = form.dataset.popupMessage;
                        popup ? flsModules.popup.open(popup) : null;
                    }
                }), 0);
                formValidate.formClean(form);
                formLogging(`The form was sent!`);
            }
            function formLogging(message) {
                FLS(`[Форми]: ${message}`);
            }
        }
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target, src) {
            if (target === void 0) target = {};
            if (src === void 0) src = {};
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (delay === void 0) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (axis === void 0) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        function utils_elementChildren(element, selector) {
            if (selector === void 0) selector = "";
            return [ ...element.children ].filter((el => el.matches(selector)));
        }
        function utils_createElement(tag, classes) {
            if (classes === void 0) classes = [];
            const el = document.createElement(tag);
            el.classList.add(...Array.isArray(classes) ? classes : [ classes ]);
            return el;
        }
        function utils_elementOffset(el) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            const box = el.getBoundingClientRect();
            const body = document.body;
            const clientTop = el.clientTop || body.clientTop || 0;
            const clientLeft = el.clientLeft || body.clientLeft || 0;
            const scrollTop = el === window ? window.scrollY : el.scrollTop;
            const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
            return {
                top: box.top + scrollTop - clientTop,
                left: box.left + scrollLeft - clientLeft
            };
        }
        function elementPrevAll(el, selector) {
            const prevEls = [];
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (prev.matches(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return prevEls;
        }
        function elementNextAll(el, selector) {
            const nextEls = [];
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (next.matches(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return nextEls;
        }
        function elementStyle(el, prop) {
            const window = ssr_window_esm_getWindow();
            return window.getComputedStyle(el, null).getPropertyValue(prop);
        }
        function utils_elementIndex(el) {
            let child = el;
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function utils_elementParents(el, selector) {
            const parents = [];
            let parent = el.parentElement;
            while (parent) {
                if (selector) {
                    if (parent.matches(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentElement;
            }
            return parents;
        }
        function utils_elementOuterSize(el, size, includeMargins) {
            const window = ssr_window_esm_getWindow();
            if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
            return el.offsetWidth;
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = _temp === void 0 ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (overrides === void 0) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            let needPerspectiveFix = false;
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            if (isSafari()) {
                const ua = String(window.navigator.userAgent);
                if (ua.includes("Version/")) {
                    const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                    needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                }
            }
            return {
                isSafari: needPerspectiveFix || isSafari(),
                needPerspectiveFix,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (options === void 0) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (swiper.__preventObserver__) return;
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: typeof options.childList === "undefined" ? true : options.childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = utils_elementParents(swiper.hostEl);
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.hostEl, {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.wrapperEl, {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        var eventsEmitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            swiper.virtualSize = -spaceBetween;
            slides.forEach((slideEl => {
                if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                slideEl.style.marginBottom = "";
                slideEl.style.marginTop = "";
            }));
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                let slide;
                if (slides[i]) slide = slides[i];
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if (slides[i] && elementStyle(slide, "display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide);
                    const currentTransform = slide.style.transform;
                    const currentWebKitTransform = slide.style.webkitTransform;
                    if (currentTransform) slide.style.transform = "none";
                    if (currentWebKitTransform) slide.style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? utils_elementOuterSize(slide, "width", true) : utils_elementOuterSize(slide, "height", true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide.style.transform = currentTransform;
                    if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
            if (params.setWrapperSize) wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (isVirtual && params.loop) {
                const size = slidesSizesGrid[0] + spaceBetween;
                if (params.slidesPerGroup > 1) {
                    const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                    const groupSize = size * params.slidesPerGroup;
                    for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
                for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                    if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                    slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                    swiper.virtualSize += size;
                }
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode || params.loop) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).forEach((slideEl => {
                    slideEl.style[key] = `${spaceBetween}px`;
                }));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap <= 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
                return swiper.slides[index];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
        function updateSlidesProgress(translate) {
            if (translate === void 0) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideVisibleClass);
            }));
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            let spaceBetween = params.spaceBetween;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides[i].classList.add(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd, progressLoop} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                isBeginning = isBeginningRounded || progress <= 0;
                isEnd = isEndRounded || progress >= 1;
                if (isBeginningRounded) progress = 0;
                if (isEndRounded) progress = 1;
            }
            if (params.loop) {
                const firstSlideIndex = swiper.getSlideIndexByData(0);
                const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
                const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                const translateAbs = Math.abs(translate);
                if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                if (progressLoop > 1) progressLoop -= 1;
            }
            Object.assign(swiper, {
                progress,
                progressLoop,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, slidesEl, activeIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            }));
            let activeSlide;
            if (isVirtual) if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides[activeIndex];
            if (activeSlide) {
                activeSlide.classList.add(params.slideActiveClass);
                let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !nextSlide) nextSlide = slides[0];
                if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
                if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        const processLazyPreloader = (swiper, imageEl) => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
            const slideEl = imageEl.closest(slideSelector());
            if (slideEl) {
                let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (!lazyEl && swiper.isElement) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (lazyEl) lazyEl.remove();
            }
        };
        const unlazy = (swiper, index) => {
            if (!swiper.slides[index]) return;
            const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
            if (imageEl) imageEl.removeAttribute("loading");
        };
        const preload = swiper => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            let amount = swiper.params.lazyPreloadPrevNext;
            const len = swiper.slides.length;
            if (!len || !amount || amount < 0) return;
            amount = Math.min(amount, len);
            const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
            const activeIndex = swiper.activeIndex;
            if (swiper.params.grid && swiper.params.grid.rows > 1) {
                const activeColumn = activeIndex;
                const preloadColumns = [ activeColumn - amount ];
                preloadColumns.push(...Array.from({
                    length: amount
                }).map(((_, i) => activeColumn + slidesPerView + i)));
                swiper.slides.forEach(((slideEl, i) => {
                    if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
                }));
                return;
            }
            const slideIndexLastInView = activeIndex + slidesPerView - 1;
            if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
        };
        function getActiveIndexByTranslate(swiper) {
            const {slidesGrid, params} = swiper;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            let activeIndex;
            for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
            if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            return activeIndex;
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            const getVirtualRealIndex = aIndex => {
                let realIndex = aIndex - swiper.virtual.slidesBefore;
                if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                return realIndex;
            };
            if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.realIndex = getVirtualRealIndex(activeIndex);
                return;
            }
            let realIndex;
            if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (swiper.slides[activeIndex]) realIndex = parseInt(swiper.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10); else realIndex = activeIndex;
            Object.assign(swiper, {
                previousSnapIndex,
                snapIndex,
                previousRealIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            if (swiper.initialized) preload(swiper);
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = e.closest(`.${params.slideClass}, swiper-slide`);
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        var update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate(wrapperEl, axis);
            currentTranslate += swiper.cssOverflowAdjustment();
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
                if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
                wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            }
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (translate === void 0) translate = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (translateBounds === void 0) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        var translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) {
                swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
                swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
            }
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        var transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") index = parseInt(index, 10);
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                        swiper._cssModeVirtualInitialSet = true;
                        requestAnimationFrame((() => {
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        }));
                    } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else newIndex = swiper.getSlideIndexByData(newIndex);
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {enabled, params, animating} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "next"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
            if (!enabled) return swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "prev"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (threshold === void 0) threshold = .5;
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        var slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate(slideRealIndex) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            slides.forEach(((el, index) => {
                el.setAttribute("data-swiper-slide-index", index);
            }));
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next"
            });
        }
        function loopFix(_temp) {
            let {slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = _temp === void 0 ? {} : _temp;
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
            let loopedSlides = params.loopedSlides || slidesPerView;
            if (loopedSlides % params.slidesPerGroup !== 0) loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
            swiper.loopedSlides = loopedSlides;
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            let activeIndex = swiper.activeIndex;
            if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
            const isNext = direction === "next" || !direction;
            const isPrev = direction === "prev" || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            if (activeSlideIndex < loopedSlides) {
                slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
                for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    prependSlidesIndexes.push(slides.length - index - 1);
                }
            } else if (activeSlideIndex > swiper.slides.length - loopedSlides * 2) {
                slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    appendSlidesIndexes.push(index);
                }
            }
            if (isPrev) prependSlidesIndexes.forEach((index => {
                swiper.slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(swiper.slides[index]);
                swiper.slides[index].swiperLoopMoveDOM = false;
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                swiper.slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(swiper.slides[index]);
                swiper.slides[index].swiperLoopMoveDOM = false;
            }));
            swiper.recalcSlides();
            if (params.slidesPerView === "auto") swiper.updateSlides();
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
                        if (setTranslate) {
                            swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                            swiper.touchEventsData.currentTranslate = swiper.translate;
                        }
                    }
                } else if (setTranslate) {
                    swiper.slideToLoop(slideRealIndex, 0, false, true);
                    swiper.touchEventsData.currentTranslate = swiper.translate;
                }
            } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) {
                        swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                        swiper.touchEventsData.currentTranslate = swiper.translate;
                    }
                }
            } else swiper.slideToLoop(slideRealIndex, 0, false, true);
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (!c.destroyed && c.params.loop) c.loopFix({
                        ...loopParams,
                        slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
                    });
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
                    ...loopParams,
                    slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
                });
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            swiper.slides.forEach((slideEl => {
                const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            swiper.slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        var loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        var grabCursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (base === void 0) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            data.evCache.push(event);
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetEl = e.target;
            if (params.touchEventsTarget === "wrapper") if (!swiper.wrapperEl.contains(targetEl)) return;
            if ("which" in e && e.which === 3) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = event.composedPath ? event.composedPath() : event.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if (edgeSwipeDetection === "prevent") event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if (targetEl.nodeName === "SELECT") data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === e.pointerId));
            if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
            const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        prevX: swiper.touches.currentX,
                        prevY: swiper.touches.currentY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            if (!data.isMoved) {
                if (isLoop) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && Math.abs(diff) >= 1) {
                swiper.loopFix({
                    direction: swiper.swipeDirection,
                    setTranslate: true
                });
                loopFixed = true;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === event.pointerId));
            if (pointerIndex >= 0) data.evCache.splice(pointerIndex, 1);
            if ([ "pointercancel", "pointerout", "pointerleave", "contextmenu" ].includes(event.type)) {
                const proceed = [ "pointercancel", "contextmenu" ].includes(event.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
                if (!proceed) return;
            }
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            const isVirtualLoop = isVirtual && params.loop;
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                clearTimeout(swiper.autoplay.resizeTimeout);
                swiper.autoplay.resizeTimeout = setTimeout((() => {
                    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                }), 500);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        function onLoad(e) {
            const swiper = this;
            processLazyPreloader(swiper, e.target);
            if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
            swiper.update();
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, el, wrapperEl, device} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            el[domMethod]("pointerdown", swiper.onTouchStart, {
                passive: false
            });
            document[domMethod]("pointermove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("pointerup", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointercancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerout", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerleave", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("contextmenu", swiper.onTouchEnd, {
                passive: true
            });
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
            el[domMethod]("load", swiper.onLoad, {
                capture: true
            });
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            swiper.onLoad = onLoad.bind(swiper);
            if (!dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        var events$1 = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {realIndex, initialized, params, el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                if (typeof breakpointParams[prop] === "undefined") return;
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (base === void 0) base = "window";
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        var breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function swiper_core_removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        var classes = {
            addClasses,
            removeClasses: swiper_core_removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        var checkOverflow$1 = {
            checkOverflow
        };
        var defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopedSlides: null,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (obj === void 0) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor,
            events: events$1,
            breakpoints,
            checkOverflow: checkOverflow$1,
            classes
        };
        const extendedDefaults = {};
        class Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                const document = ssr_window_esm_getDocument();
                if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                    const swipers = [];
                    document.querySelectorAll(params.el).forEach((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                    },
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        evCache: []
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            getSlideIndex(slideEl) {
                const {slidesEl, params} = this;
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                const firstSlideIndex = utils_elementIndex(slides[0]);
                return utils_elementIndex(slideEl) - firstSlideIndex;
            }
            getSlideIndexByData(index) {
                return this.getSlideIndex(this.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index))[0]);
            }
            recalcSlides() {
                const swiper = this;
                const {slidesEl, params} = swiper;
                swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.forEach((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (view === void 0) view = "current";
                if (exact === void 0) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                }));
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                    setTranslate();
                    if (params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                        translated = swiper.slideTo(slides.length - 1, 0, false, true);
                    } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (needUpdate === void 0) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if (typeof el === "string") el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === "SWIPER-CONTAINER") swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                    hostEl: swiper.isElement ? el.parentNode.host : el,
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                    wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate();
                swiper.attachEvents();
                const lazyElements = [ ...swiper.el.querySelectorAll('[loading="lazy"]') ];
                if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
                lazyElements.forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                preload(swiper);
                swiper.initialized = true;
                preload(swiper);
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (deleteInstance === void 0) deleteInstance = true;
                if (cleanStyles === void 0) cleanStyles = true;
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    el.removeAttribute("style");
                    wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
                const modules = Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => Swiper.installModule(m)));
                    return Swiper;
                }
                Swiper.installModule(module);
                return Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        Swiper.use([ Resize, Observer ]);
        function Keyboard(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            swiper.keyboard = {
                enabled: false
            };
            extendParams({
                keyboard: {
                    enabled: false,
                    onlyInViewport: true,
                    pageUpDown: true
                }
            });
            function handle(event) {
                if (!swiper.enabled) return;
                const {rtlTranslate: rtl} = swiper;
                let e = event;
                if (e.originalEvent) e = e.originalEvent;
                const kc = e.keyCode || e.charCode;
                const pageUpDown = swiper.params.keyboard.pageUpDown;
                const isPageUp = pageUpDown && kc === 33;
                const isPageDown = pageUpDown && kc === 34;
                const isArrowLeft = kc === 37;
                const isArrowRight = kc === 39;
                const isArrowUp = kc === 38;
                const isArrowDown = kc === 40;
                if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) return false;
                if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) return false;
                if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === "input" || document.activeElement.nodeName.toLowerCase() === "textarea")) return;
                if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
                    let inView = false;
                    if (utils_elementParents(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && utils_elementParents(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) return;
                    const el = swiper.el;
                    const swiperWidth = el.clientWidth;
                    const swiperHeight = el.clientHeight;
                    const windowWidth = window.innerWidth;
                    const windowHeight = window.innerHeight;
                    const swiperOffset = utils_elementOffset(el);
                    if (rtl) swiperOffset.left -= el.scrollLeft;
                    const swiperCoord = [ [ swiperOffset.left, swiperOffset.top ], [ swiperOffset.left + swiperWidth, swiperOffset.top ], [ swiperOffset.left, swiperOffset.top + swiperHeight ], [ swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight ] ];
                    for (let i = 0; i < swiperCoord.length; i += 1) {
                        const point = swiperCoord[i];
                        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                            if (point[0] === 0 && point[1] === 0) continue;
                            inView = true;
                        }
                    }
                    if (!inView) return;
                }
                if (swiper.isHorizontal()) {
                    if (isPageUp || isPageDown || isArrowLeft || isArrowRight) if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
                    if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
                    if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
                } else {
                    if (isPageUp || isPageDown || isArrowUp || isArrowDown) if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
                    if (isPageDown || isArrowDown) swiper.slideNext();
                    if (isPageUp || isArrowUp) swiper.slidePrev();
                }
                emit("keyPress", kc);
                return;
            }
            function enable() {
                if (swiper.keyboard.enabled) return;
                document.addEventListener("keydown", handle);
                swiper.keyboard.enabled = true;
            }
            function disable() {
                if (!swiper.keyboard.enabled) return;
                document.removeEventListener("keydown", handle);
                swiper.keyboard.enabled = false;
            }
            on("init", (() => {
                if (swiper.params.keyboard.enabled) enable();
            }));
            on("destroy", (() => {
                if (swiper.keyboard.enabled) disable();
            }));
            Object.assign(swiper.keyboard, {
                enable,
                disable
            });
        }
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && params.auto === true) {
                    let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = utils_createElement("div", checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                prevEl: null
            };
            const makeElementsArray = el => (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
            function getEl(el) {
                let res;
                if (el && typeof el === "string" && swiper.isElement) {
                    res = swiper.el.querySelector(el);
                    if (res) return res;
                }
                if (el) {
                    if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                    if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el);
                }
                if (el && !res) return el;
                return res;
            }
            function toggleEl(el, disabled) {
                const params = swiper.params.navigation;
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    if (subEl) {
                        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                        if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }
                }));
            }
            function update() {
                const {nextEl, prevEl} = swiper.navigation;
                if (swiper.params.loop) {
                    toggleEl(prevEl, false);
                    toggleEl(nextEl, false);
                    return;
                }
                toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                let nextEl = getEl(params.nextEl);
                let prevEl = getEl(params.prevEl);
                Object.assign(swiper.navigation, {
                    nextEl,
                    prevEl
                });
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const initButton = (el, dir) => {
                    if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
                };
                nextEl.forEach((el => initButton(el, "next")));
                prevEl.forEach((el => initButton(el, "prev")));
            }
            function destroy() {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const destroyButton = (el, dir) => {
                    el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
                };
                nextEl.forEach((el => destroyButton(el, "next")));
                prevEl.forEach((el => destroyButton(el, "prev")));
            }
            on("init", (() => {
                if (swiper.params.navigation.enabled === false) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList[swiper.enabled ? "remove" : "add"](swiper.params.navigation.lockClass)));
            }));
            on("click", ((_s, e) => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                    if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                    [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
                init();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function Autoplay(_ref) {
            let {swiper, extendParams, on, emit, params} = _ref;
            swiper.autoplay = {
                running: false,
                paused: false,
                timeLeft: 0
            };
            extendParams({
                autoplay: {
                    enabled: false,
                    delay: 3e3,
                    waitForTransition: true,
                    disableOnInteraction: true,
                    stopOnLastSlide: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: false
                }
            });
            let timeout;
            let raf;
            let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
            let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
            let autoplayTimeLeft;
            let autoplayStartTime = (new Date).getTime;
            let wasPaused;
            let isTouched;
            let pausedByTouch;
            let touchStartTimeout;
            let slideChanged;
            let pausedByInteraction;
            function onTransitionEnd(e) {
                if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
                if (e.target !== swiper.wrapperEl) return;
                swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
                resume();
            }
            const calcTimeLeft = () => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (swiper.autoplay.paused) wasPaused = true; else if (wasPaused) {
                    autoplayDelayCurrent = autoplayTimeLeft;
                    wasPaused = false;
                }
                const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (new Date).getTime();
                swiper.autoplay.timeLeft = timeLeft;
                emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
                raf = requestAnimationFrame((() => {
                    calcTimeLeft();
                }));
            };
            const getSlideDelay = () => {
                let activeSlideEl;
                if (swiper.virtual && swiper.params.virtual.enabled) activeSlideEl = swiper.slides.filter((slideEl => slideEl.classList.contains("swiper-slide-active")))[0]; else activeSlideEl = swiper.slides[swiper.activeIndex];
                if (!activeSlideEl) return;
                const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
                return currentSlideDelay;
            };
            const run = delayForce => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                cancelAnimationFrame(raf);
                calcTimeLeft();
                let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
                autoplayDelayTotal = swiper.params.autoplay.delay;
                autoplayDelayCurrent = swiper.params.autoplay.delay;
                const currentSlideDelay = getSlideDelay();
                if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
                    delay = currentSlideDelay;
                    autoplayDelayTotal = currentSlideDelay;
                    autoplayDelayCurrent = currentSlideDelay;
                }
                autoplayTimeLeft = delay;
                const speed = swiper.params.speed;
                const proceed = () => {
                    if (!swiper || swiper.destroyed) return;
                    if (swiper.params.autoplay.reverseDirection) {
                        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                            swiper.slidePrev(speed, true, true);
                            emit("autoplay");
                        } else if (!swiper.params.autoplay.stopOnLastSlide) {
                            swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                            emit("autoplay");
                        }
                    } else if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                        swiper.slideNext(speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(0, speed, true, true);
                        emit("autoplay");
                    }
                    if (swiper.params.cssMode) {
                        autoplayStartTime = (new Date).getTime();
                        requestAnimationFrame((() => {
                            run();
                        }));
                    }
                };
                if (delay > 0) {
                    clearTimeout(timeout);
                    timeout = setTimeout((() => {
                        proceed();
                    }), delay);
                } else requestAnimationFrame((() => {
                    proceed();
                }));
                return delay;
            };
            const start = () => {
                swiper.autoplay.running = true;
                run();
                emit("autoplayStart");
            };
            const stop = () => {
                swiper.autoplay.running = false;
                clearTimeout(timeout);
                cancelAnimationFrame(raf);
                emit("autoplayStop");
            };
            const pause = (internal, reset) => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                clearTimeout(timeout);
                if (!internal) pausedByInteraction = true;
                const proceed = () => {
                    emit("autoplayPause");
                    if (swiper.params.autoplay.waitForTransition) swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd); else resume();
                };
                swiper.autoplay.paused = true;
                if (reset) {
                    if (slideChanged) autoplayTimeLeft = swiper.params.autoplay.delay;
                    slideChanged = false;
                    proceed();
                    return;
                }
                const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
                autoplayTimeLeft = delay - ((new Date).getTime() - autoplayStartTime);
                if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
                if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
                proceed();
            };
            const resume = () => {
                if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
                autoplayStartTime = (new Date).getTime();
                if (pausedByInteraction) {
                    pausedByInteraction = false;
                    run(autoplayTimeLeft);
                } else run();
                swiper.autoplay.paused = false;
                emit("autoplayResume");
            };
            const onVisibilityChange = () => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                const document = ssr_window_esm_getDocument();
                if (document.visibilityState === "hidden") {
                    pausedByInteraction = true;
                    pause(true);
                }
                if (document.visibilityState === "visible") resume();
            };
            const onPointerEnter = e => {
                if (e.pointerType !== "mouse") return;
                pausedByInteraction = true;
                if (swiper.animating || swiper.autoplay.paused) return;
                pause(true);
            };
            const onPointerLeave = e => {
                if (e.pointerType !== "mouse") return;
                if (swiper.autoplay.paused) resume();
            };
            const attachMouseEvents = () => {
                if (swiper.params.autoplay.pauseOnMouseEnter) {
                    swiper.el.addEventListener("pointerenter", onPointerEnter);
                    swiper.el.addEventListener("pointerleave", onPointerLeave);
                }
            };
            const detachMouseEvents = () => {
                swiper.el.removeEventListener("pointerenter", onPointerEnter);
                swiper.el.removeEventListener("pointerleave", onPointerLeave);
            };
            const attachDocumentEvents = () => {
                const document = ssr_window_esm_getDocument();
                document.addEventListener("visibilitychange", onVisibilityChange);
            };
            const detachDocumentEvents = () => {
                const document = ssr_window_esm_getDocument();
                document.removeEventListener("visibilitychange", onVisibilityChange);
            };
            on("init", (() => {
                if (swiper.params.autoplay.enabled) {
                    attachMouseEvents();
                    attachDocumentEvents();
                    autoplayStartTime = (new Date).getTime();
                    start();
                }
            }));
            on("destroy", (() => {
                detachMouseEvents();
                detachDocumentEvents();
                if (swiper.autoplay.running) stop();
            }));
            on("beforeTransitionStart", ((_s, speed, internal) => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (internal || !swiper.params.autoplay.disableOnInteraction) pause(true, true); else stop();
            }));
            on("sliderFirstMove", (() => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (swiper.params.autoplay.disableOnInteraction) {
                    stop();
                    return;
                }
                isTouched = true;
                pausedByTouch = false;
                pausedByInteraction = false;
                touchStartTimeout = setTimeout((() => {
                    pausedByInteraction = true;
                    pausedByTouch = true;
                    pause(true);
                }), 200);
            }));
            on("touchEnd", (() => {
                if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
                clearTimeout(touchStartTimeout);
                clearTimeout(timeout);
                if (swiper.params.autoplay.disableOnInteraction) {
                    pausedByTouch = false;
                    isTouched = false;
                    return;
                }
                if (pausedByTouch && swiper.params.cssMode) resume();
                pausedByTouch = false;
                isTouched = false;
            }));
            on("slideChange", (() => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                slideChanged = true;
            }));
            Object.assign(swiper.autoplay, {
                start,
                stop,
                pause,
                resume
            });
        }
        function initSliders() {
            if (document.querySelector(".menu__slider")) new Swiper(".menu__slider", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: "auto",
                simulateTouch: false,
                navigation: {
                    prevEl: ".menu__swiper-button-prev",
                    nextEl: ".menu__swiper-button-next"
                }
            });
            if (document.querySelector(".services__slider")) new Swiper(".services__slider", {
                modules: [ Navigation, Keyboard ],
                observer: true,
                observeParents: true,
                slidesPerView: 1.20366,
                navigation: {
                    prevEl: ".services__swiper-button-prev",
                    nextEl: ".services__swiper-button-next"
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: true
                }
            });
            if (document.querySelector(".testemonials__slider")) new Swiper(".testemonials__slider", {
                modules: [ Navigation, Keyboard ],
                observer: true,
                observeParents: true,
                grabCursor: true,
                autoHeight: true,
                navigation: {
                    prevEl: ".testemonials__swiper-button-prev",
                    nextEl: ".testemonials__swiper-button-next"
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: true
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    500: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 1.2,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    },
                    1600: {
                        slidesPerView: 2,
                        spaceBetween: 60
                    },
                    1920: {
                        slidesPerView: 2,
                        spaceBetween: 80
                    }
                }
            });
            if (document.querySelector(".brands__slider")) new Swiper(".brands__slider", {
                modules: [ Keyboard, Autoplay ],
                observer: true,
                observeParents: true,
                speed: 5e3,
                grabCursor: true,
                simulateTouch: true,
                loop: true,
                keyboard: {
                    enabled: true,
                    onlyInViewport: true
                },
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false
                },
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    },
                    581: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                    778: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    975: {
                        slidesPerView: 6,
                        spaceBetween: 40
                    },
                    1440: {
                        slidesPerView: 6,
                        spaceBetween: 100
                    }
                }
            });
            if (document.querySelector(".sliders__slider_full")) new Swiper(".sliders__slider_full", {
                modules: [ Navigation, Keyboard ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                navigation: {
                    prevEl: ".sliders__swiper-button-prev",
                    nextEl: ".sliders__swiper-button-next"
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: true
                }
            });
            if (document.querySelector(".sliders__slider_split")) new Swiper(".sliders__slider_split", {
                modules: [ Navigation, Keyboard ],
                observer: true,
                observeParents: true,
                slidesPerView: 1.372395,
                navigation: {
                    prevEl: ".sliders__swiper-button-prev",
                    nextEl: ".sliders__swiper-button-next"
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: true
                }
            });
        }
        function initAddedSliders() {
            new Swiper(".sliders__slider_full", {
                modules: [ Navigation, Keyboard ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                navigation: {
                    prevEl: ".sliders__swiper-button-prev",
                    nextEl: ".sliders__swiper-button-next"
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: true
                }
            });
        }
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        class ScrollWatcher {
            constructor(props) {
                let defaultConfig = {
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.observer;
                !document.documentElement.classList.contains("watcher") ? this.scrollWatcherRun() : null;
            }
            scrollWatcherUpdate() {
                this.scrollWatcherRun();
            }
            scrollWatcherRun() {
                document.documentElement.classList.add("watcher");
                this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"));
            }
            scrollWatcherConstructor(items) {
                if (items.length) {
                    this.scrollWatcherLogging(`Прокинувся, стежу за об'єктами (${items.length})...`);
                    let uniqParams = uniqArray(Array.from(items).map((function(item) {
                        return `${item.dataset.watchRoot ? item.dataset.watchRoot : null}|${item.dataset.watchMargin ? item.dataset.watchMargin : "0px"}|${item.dataset.watchThreshold ? item.dataset.watchThreshold : 0}`;
                    })));
                    uniqParams.forEach((uniqParam => {
                        let uniqParamArray = uniqParam.split("|");
                        let paramsWatch = {
                            root: uniqParamArray[0],
                            margin: uniqParamArray[1],
                            threshold: uniqParamArray[2]
                        };
                        let groupItems = Array.from(items).filter((function(item) {
                            let watchRoot = item.dataset.watchRoot ? item.dataset.watchRoot : null;
                            let watchMargin = item.dataset.watchMargin ? item.dataset.watchMargin : "0px";
                            let watchThreshold = item.dataset.watchThreshold ? item.dataset.watchThreshold : 0;
                            if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) return item;
                        }));
                        let configWatcher = this.getScrollWatcherConfig(paramsWatch);
                        this.scrollWatcherInit(groupItems, configWatcher);
                    }));
                } else this.scrollWatcherLogging("Сплю, немає об'єктів для стеження. ZzzZZzz");
            }
            getScrollWatcherConfig(paramsWatch) {
                let configWatcher = {};
                if (document.querySelector(paramsWatch.root)) configWatcher.root = document.querySelector(paramsWatch.root); else if (paramsWatch.root !== "null") this.scrollWatcherLogging(`Эмм... батьківського об'єкта ${paramsWatch.root} немає на сторінці`);
                configWatcher.rootMargin = paramsWatch.margin;
                if (paramsWatch.margin.indexOf("px") < 0 && paramsWatch.margin.indexOf("%") < 0) {
                    this.scrollWatcherLogging(`йой, налаштування data-watch-margin потрібно задавати в PX або %`);
                    return;
                }
                if (paramsWatch.threshold === "prx") {
                    paramsWatch.threshold = [];
                    for (let i = 0; i <= 1; i += .005) paramsWatch.threshold.push(i);
                } else paramsWatch.threshold = paramsWatch.threshold.split(",");
                configWatcher.threshold = paramsWatch.threshold;
                return configWatcher;
            }
            scrollWatcherCreate(configWatcher) {
                this.observer = new IntersectionObserver(((entries, observer) => {
                    entries.forEach((entry => {
                        this.scrollWatcherCallback(entry, observer);
                    }));
                }), configWatcher);
            }
            scrollWatcherInit(items, configWatcher) {
                this.scrollWatcherCreate(configWatcher);
                items.forEach((item => this.observer.observe(item)));
            }
            scrollWatcherIntersecting(entry, targetElement) {
                if (entry.isIntersecting) {
                    !targetElement.classList.contains("_watcher-view") ? targetElement.classList.add("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я бачу ${targetElement.classList}, додав клас _watcher-view`);
                } else {
                    targetElement.classList.contains("_watcher-view") ? targetElement.classList.remove("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я не бачу ${targetElement.classList}, прибрав клас _watcher-view`);
                }
            }
            scrollWatcherOff(targetElement, observer) {
                observer.unobserve(targetElement);
                this.scrollWatcherLogging(`Я перестав стежити за ${targetElement.classList}`);
            }
            scrollWatcherLogging(message) {
                this.config.logging ? FLS(`[Спостерігач]: ${message}`) : null;
            }
            scrollWatcherCallback(entry, observer) {
                const targetElement = entry.target;
                this.scrollWatcherIntersecting(entry, targetElement);
                targetElement.hasAttribute("data-watch-once") && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
                document.dispatchEvent(new CustomEvent("watcherCallback", {
                    detail: {
                        entry
                    }
                }));
            }
        }
        flsModules.watcher = new ScrollWatcher({});
        const myScrollWatcher = new ScrollWatcher({
            logging: true
        });
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if (e.type === "click") {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        if (flsModules.fullpage) {
                            const fullpageSection = document.querySelector(`${gotoLinkSelector}`).closest("[data-fp-section]");
                            const fullpageSectionId = fullpageSection ? +fullpageSection.dataset.fpId : null;
                            if (fullpageSectionId !== null) {
                                flsModules.fullpage.switchingSection(fullpageSectionId);
                                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                            }
                        } else gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if (e.type === "watcherCallback" && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if (targetElement.dataset.watch === "navigator") {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        function headerScroll() {
            addWindowScrollEvent = true;
            const header = document.querySelector("header.header");
            const headerShow = header.hasAttribute("data-scroll-show");
            const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
            let scrollDirection = 0;
            document.addEventListener("windowScroll", (function(e) {
                const scrollTop = window.scrollY;
                if (scrollTop >= startPoint) {
                    !header.classList.contains("_header-scroll") ? header.classList.add("_header-scroll") : null;
                    if (headerShow) if (scrollTop > scrollDirection) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null; else !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                } else {
                    header.classList.contains("_header-scroll") ? header.classList.remove("_header-scroll") : null;
                    if (headerShow) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null;
                }
                scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
            }));
        }
        function digitsCounter() {
            if (document.querySelectorAll("[data-digits-counter]").length) document.querySelectorAll("[data-digits-counter]").forEach((element => {
                element.dataset.digitsCounter = element.innerHTML;
                element.innerHTML = `0`;
            }));
            function digitsCountersInit(digitsCountersItems) {
                let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
                if (digitsCounters.length) digitsCounters.forEach((digitsCounter => {
                    digitsCountersAnimate(digitsCounter);
                }));
            }
            function digitsCountersAnimate(digitsCounter) {
                let startTimestamp = null;
                const duration = parseInt(digitsCounter.dataset.digitsCounterSpeed) ? parseInt(digitsCounter.dataset.digitsCounterSpeed) : 1e3;
                const startValue = parseInt(digitsCounter.dataset.digitsCounter);
                const startPosition = 0;
                const step = timestamp => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
                    if (progress < 1) window.requestAnimationFrame(step);
                };
                window.requestAnimationFrame(step);
            }
            function digitsCounterAction(e) {
                const entry = e.detail.entry;
                const targetElement = entry.target;
                if (targetElement.querySelectorAll("[data-digits-counter]").length) digitsCountersInit(targetElement.querySelectorAll("[data-digits-counter]"));
            }
            document.addEventListener("watcherCallback", digitsCounterAction);
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        /*!
 * lightgallery | 2.7.1 | January 11th 2023
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
        var __assign = function() {
            __assign = Object.assign || function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        function __spreadArrays() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
            var r = Array(s), k = 0;
            for (i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
            k++) r[k] = a[j];
            return r;
        }
        var lGEvents = {
            afterAppendSlide: "lgAfterAppendSlide",
            init: "lgInit",
            hasVideo: "lgHasVideo",
            containerResize: "lgContainerResize",
            updateSlides: "lgUpdateSlides",
            afterAppendSubHtml: "lgAfterAppendSubHtml",
            beforeOpen: "lgBeforeOpen",
            afterOpen: "lgAfterOpen",
            slideItemLoad: "lgSlideItemLoad",
            beforeSlide: "lgBeforeSlide",
            afterSlide: "lgAfterSlide",
            posterClick: "lgPosterClick",
            dragStart: "lgDragStart",
            dragMove: "lgDragMove",
            dragEnd: "lgDragEnd",
            beforeNextSlide: "lgBeforeNextSlide",
            beforePrevSlide: "lgBeforePrevSlide",
            beforeClose: "lgBeforeClose",
            afterClose: "lgAfterClose",
            rotateLeft: "lgRotateLeft",
            rotateRight: "lgRotateRight",
            flipHorizontal: "lgFlipHorizontal",
            flipVertical: "lgFlipVertical",
            autoplay: "lgAutoplay",
            autoplayStart: "lgAutoplayStart",
            autoplayStop: "lgAutoplayStop"
        };
        var lightGalleryCoreSettings = {
            mode: "lg-slide",
            easing: "ease",
            speed: 400,
            licenseKey: "0000-0000-000-0000",
            height: "100%",
            width: "100%",
            addClass: "",
            startClass: "lg-start-zoom",
            backdropDuration: 300,
            container: "",
            startAnimationDuration: 400,
            zoomFromOrigin: true,
            hideBarsDelay: 0,
            showBarsAfter: 1e4,
            slideDelay: 0,
            supportLegacyBrowser: true,
            allowMediaOverlap: false,
            videoMaxSize: "1280-720",
            loadYouTubePoster: true,
            defaultCaptionHeight: 0,
            ariaLabelledby: "",
            ariaDescribedby: "",
            resetScrollPosition: true,
            hideScrollbar: false,
            closable: true,
            swipeToClose: true,
            closeOnTap: true,
            showCloseIcon: true,
            showMaximizeIcon: false,
            loop: true,
            escKey: true,
            keyPress: true,
            trapFocus: true,
            controls: true,
            slideEndAnimation: true,
            hideControlOnEnd: false,
            mousewheel: false,
            getCaptionFromTitleOrAlt: true,
            appendSubHtmlTo: ".lg-sub-html",
            subHtmlSelectorRelative: false,
            preload: 2,
            numberOfSlideItemsInDom: 10,
            selector: "",
            selectWithin: "",
            nextHtml: "",
            prevHtml: "",
            index: 0,
            iframeWidth: "100%",
            iframeHeight: "100%",
            iframeMaxWidth: "100%",
            iframeMaxHeight: "100%",
            download: true,
            counter: true,
            appendCounterTo: ".lg-toolbar",
            swipeThreshold: 50,
            enableSwipe: true,
            enableDrag: true,
            dynamic: false,
            dynamicEl: [],
            extraProps: [],
            exThumbImage: "",
            isMobile: void 0,
            mobileSettings: {
                controls: false,
                showCloseIcon: false,
                download: false
            },
            plugins: [],
            strings: {
                closeGallery: "Close gallery",
                toggleMaximize: "Toggle maximize",
                previousSlide: "Previous slide",
                nextSlide: "Next slide",
                download: "Download",
                playVideo: "Play video"
            }
        };
        function initLgPolyfills() {
            (function() {
                if (typeof window.CustomEvent === "function") return false;
                function CustomEvent(event, params) {
                    params = params || {
                        bubbles: false,
                        cancelable: false,
                        detail: null
                    };
                    var evt = document.createEvent("CustomEvent");
                    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                    return evt;
                }
                window.CustomEvent = CustomEvent;
            })();
            (function() {
                if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
            })();
        }
        var lgQuery = function() {
            function lgQuery(selector) {
                this.cssVenderPrefixes = [ "TransitionDuration", "TransitionTimingFunction", "Transform", "Transition" ];
                this.selector = this._getSelector(selector);
                this.firstElement = this._getFirstEl();
                return this;
            }
            lgQuery.generateUUID = function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(c) {
                    var r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
                    return v.toString(16);
                }));
            };
            lgQuery.prototype._getSelector = function(selector, context) {
                if (context === void 0) context = document;
                if (typeof selector !== "string") return selector;
                context = context || document;
                var fl = selector.substring(0, 1);
                if (fl === "#") return context.querySelector(selector); else return context.querySelectorAll(selector);
            };
            lgQuery.prototype._each = function(func) {
                if (!this.selector) return this;
                if (this.selector.length !== void 0) [].forEach.call(this.selector, func); else func(this.selector, 0);
                return this;
            };
            lgQuery.prototype._setCssVendorPrefix = function(el, cssProperty, value) {
                var property = cssProperty.replace(/-([a-z])/gi, (function(s, group1) {
                    return group1.toUpperCase();
                }));
                if (this.cssVenderPrefixes.indexOf(property) !== -1) {
                    el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
                    el.style["webkit" + property] = value;
                    el.style["moz" + property] = value;
                    el.style["ms" + property] = value;
                    el.style["o" + property] = value;
                } else el.style[property] = value;
            };
            lgQuery.prototype._getFirstEl = function() {
                if (this.selector && this.selector.length !== void 0) return this.selector[0]; else return this.selector;
            };
            lgQuery.prototype.isEventMatched = function(event, eventName) {
                var eventNamespace = eventName.split(".");
                return event.split(".").filter((function(e) {
                    return e;
                })).every((function(e) {
                    return eventNamespace.indexOf(e) !== -1;
                }));
            };
            lgQuery.prototype.attr = function(attr, value) {
                if (value === void 0) {
                    if (!this.firstElement) return "";
                    return this.firstElement.getAttribute(attr);
                }
                this._each((function(el) {
                    el.setAttribute(attr, value);
                }));
                return this;
            };
            lgQuery.prototype.find = function(selector) {
                return $LG(this._getSelector(selector, this.selector));
            };
            lgQuery.prototype.first = function() {
                if (this.selector && this.selector.length !== void 0) return $LG(this.selector[0]); else return $LG(this.selector);
            };
            lgQuery.prototype.eq = function(index) {
                return $LG(this.selector[index]);
            };
            lgQuery.prototype.parent = function() {
                return $LG(this.selector.parentElement);
            };
            lgQuery.prototype.get = function() {
                return this._getFirstEl();
            };
            lgQuery.prototype.removeAttr = function(attributes) {
                var attrs = attributes.split(" ");
                this._each((function(el) {
                    attrs.forEach((function(attr) {
                        return el.removeAttribute(attr);
                    }));
                }));
                return this;
            };
            lgQuery.prototype.wrap = function(className) {
                if (!this.firstElement) return this;
                var wrapper = document.createElement("div");
                wrapper.className = className;
                this.firstElement.parentNode.insertBefore(wrapper, this.firstElement);
                this.firstElement.parentNode.removeChild(this.firstElement);
                wrapper.appendChild(this.firstElement);
                return this;
            };
            lgQuery.prototype.addClass = function(classNames) {
                if (classNames === void 0) classNames = "";
                this._each((function(el) {
                    classNames.split(" ").forEach((function(className) {
                        if (className) el.classList.add(className);
                    }));
                }));
                return this;
            };
            lgQuery.prototype.removeClass = function(classNames) {
                this._each((function(el) {
                    classNames.split(" ").forEach((function(className) {
                        if (className) el.classList.remove(className);
                    }));
                }));
                return this;
            };
            lgQuery.prototype.hasClass = function(className) {
                if (!this.firstElement) return false;
                return this.firstElement.classList.contains(className);
            };
            lgQuery.prototype.hasAttribute = function(attribute) {
                if (!this.firstElement) return false;
                return this.firstElement.hasAttribute(attribute);
            };
            lgQuery.prototype.toggleClass = function(className) {
                if (!this.firstElement) return this;
                if (this.hasClass(className)) this.removeClass(className); else this.addClass(className);
                return this;
            };
            lgQuery.prototype.css = function(property, value) {
                var _this = this;
                this._each((function(el) {
                    _this._setCssVendorPrefix(el, property, value);
                }));
                return this;
            };
            lgQuery.prototype.on = function(events, listener) {
                var _this = this;
                if (!this.selector) return this;
                events.split(" ").forEach((function(event) {
                    if (!Array.isArray(lgQuery.eventListeners[event])) lgQuery.eventListeners[event] = [];
                    lgQuery.eventListeners[event].push(listener);
                    _this.selector.addEventListener(event.split(".")[0], listener);
                }));
                return this;
            };
            lgQuery.prototype.once = function(event, listener) {
                var _this = this;
                this.on(event, (function() {
                    _this.off(event);
                    listener(event);
                }));
                return this;
            };
            lgQuery.prototype.off = function(event) {
                var _this = this;
                if (!this.selector) return this;
                Object.keys(lgQuery.eventListeners).forEach((function(eventName) {
                    if (_this.isEventMatched(event, eventName)) {
                        lgQuery.eventListeners[eventName].forEach((function(listener) {
                            _this.selector.removeEventListener(eventName.split(".")[0], listener);
                        }));
                        lgQuery.eventListeners[eventName] = [];
                    }
                }));
                return this;
            };
            lgQuery.prototype.trigger = function(event, detail) {
                if (!this.firstElement) return this;
                var customEvent = new CustomEvent(event.split(".")[0], {
                    detail: detail || null
                });
                this.firstElement.dispatchEvent(customEvent);
                return this;
            };
            lgQuery.prototype.load = function(url) {
                var _this = this;
                fetch(url).then((function(res) {
                    return res.text();
                })).then((function(html) {
                    _this.selector.innerHTML = html;
                }));
                return this;
            };
            lgQuery.prototype.html = function(html) {
                if (html === void 0) {
                    if (!this.firstElement) return "";
                    return this.firstElement.innerHTML;
                }
                this._each((function(el) {
                    el.innerHTML = html;
                }));
                return this;
            };
            lgQuery.prototype.append = function(html) {
                this._each((function(el) {
                    if (typeof html === "string") el.insertAdjacentHTML("beforeend", html); else el.appendChild(html);
                }));
                return this;
            };
            lgQuery.prototype.prepend = function(html) {
                this._each((function(el) {
                    el.insertAdjacentHTML("afterbegin", html);
                }));
                return this;
            };
            lgQuery.prototype.remove = function() {
                this._each((function(el) {
                    el.parentNode.removeChild(el);
                }));
                return this;
            };
            lgQuery.prototype.empty = function() {
                this._each((function(el) {
                    el.innerHTML = "";
                }));
                return this;
            };
            lgQuery.prototype.scrollTop = function(scrollTop) {
                if (scrollTop !== void 0) {
                    document.body.scrollTop = scrollTop;
                    document.documentElement.scrollTop = scrollTop;
                    return this;
                } else return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            };
            lgQuery.prototype.scrollLeft = function(scrollLeft) {
                if (scrollLeft !== void 0) {
                    document.body.scrollLeft = scrollLeft;
                    document.documentElement.scrollLeft = scrollLeft;
                    return this;
                } else return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
            };
            lgQuery.prototype.offset = function() {
                if (!this.firstElement) return {
                    left: 0,
                    top: 0
                };
                var rect = this.firstElement.getBoundingClientRect();
                var bodyMarginLeft = $LG("body").style().marginLeft;
                return {
                    left: rect.left - parseFloat(bodyMarginLeft) + this.scrollLeft(),
                    top: rect.top + this.scrollTop()
                };
            };
            lgQuery.prototype.style = function() {
                if (!this.firstElement) return {};
                return this.firstElement.currentStyle || window.getComputedStyle(this.firstElement);
            };
            lgQuery.prototype.width = function() {
                var style = this.style();
                return this.firstElement.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
            };
            lgQuery.prototype.height = function() {
                var style = this.style();
                return this.firstElement.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
            };
            lgQuery.eventListeners = {};
            return lgQuery;
        }();
        function $LG(selector) {
            initLgPolyfills();
            return new lgQuery(selector);
        }
        var defaultDynamicOptions = [ "src", "sources", "subHtml", "subHtmlUrl", "html", "video", "poster", "slideName", "responsive", "srcset", "sizes", "iframe", "downloadUrl", "download", "width", "facebookShareUrl", "tweetText", "iframeTitle", "twitterShareUrl", "pinterestShareUrl", "pinterestText", "fbHtml", "disqusIdentifier", "disqusUrl" ];
        function convertToData(attr) {
            if (attr === "href") return "src";
            attr = attr.replace("data-", "");
            attr = attr.charAt(0).toLowerCase() + attr.slice(1);
            attr = attr.replace(/-([a-z])/g, (function(g) {
                return g[1].toUpperCase();
            }));
            return attr;
        }
        var utils = {
            getSize: function(el, container, spacing, defaultLgSize) {
                if (spacing === void 0) spacing = 0;
                var LGel = $LG(el);
                var lgSize = LGel.attr("data-lg-size") || defaultLgSize;
                if (!lgSize) return;
                var isResponsiveSizes = lgSize.split(",");
                if (isResponsiveSizes[1]) {
                    var wWidth = window.innerWidth;
                    for (var i = 0; i < isResponsiveSizes.length; i++) {
                        var size_1 = isResponsiveSizes[i];
                        var responsiveWidth = parseInt(size_1.split("-")[2], 10);
                        if (responsiveWidth > wWidth) {
                            lgSize = size_1;
                            break;
                        }
                        if (i === isResponsiveSizes.length - 1) lgSize = size_1;
                    }
                }
                var size = lgSize.split("-");
                var width = parseInt(size[0], 10);
                var height = parseInt(size[1], 10);
                var cWidth = container.width();
                var cHeight = container.height() - spacing;
                var maxWidth = Math.min(cWidth, width);
                var maxHeight = Math.min(cHeight, height);
                var ratio = Math.min(maxWidth / width, maxHeight / height);
                return {
                    width: width * ratio,
                    height: height * ratio
                };
            },
            getTransform: function(el, container, top, bottom, imageSize) {
                if (!imageSize) return;
                var LGel = $LG(el).find("img").first();
                if (!LGel.get()) return;
                var containerRect = container.get().getBoundingClientRect();
                var wWidth = containerRect.width;
                var wHeight = container.height() - (top + bottom);
                var elWidth = LGel.width();
                var elHeight = LGel.height();
                var elStyle = LGel.style();
                var x = (wWidth - elWidth) / 2 - LGel.offset().left + (parseFloat(elStyle.paddingLeft) || 0) + (parseFloat(elStyle.borderLeft) || 0) + $LG(window).scrollLeft() + containerRect.left;
                var y = (wHeight - elHeight) / 2 - LGel.offset().top + (parseFloat(elStyle.paddingTop) || 0) + (parseFloat(elStyle.borderTop) || 0) + $LG(window).scrollTop() + top;
                var scX = elWidth / imageSize.width;
                var scY = elHeight / imageSize.height;
                var transform = "translate3d(" + (x *= -1) + "px, " + (y *= -1) + "px, 0) scale3d(" + scX + ", " + scY + ", 1)";
                return transform;
            },
            getIframeMarkup: function(iframeWidth, iframeHeight, iframeMaxWidth, iframeMaxHeight, src, iframeTitle) {
                var title = iframeTitle ? 'title="' + iframeTitle + '"' : "";
                return '<div class="lg-video-cont lg-has-iframe" style="width:' + iframeWidth + "; max-width:" + iframeMaxWidth + "; height: " + iframeHeight + "; max-height:" + iframeMaxHeight + '">\n                    <iframe class="lg-object" frameborder="0" ' + title + ' src="' + src + '"  allowfullscreen="true"></iframe>\n                </div>';
            },
            getImgMarkup: function(index, src, altAttr, srcset, sizes, sources) {
                var srcsetAttr = srcset ? 'srcset="' + srcset + '"' : "";
                var sizesAttr = sizes ? 'sizes="' + sizes + '"' : "";
                var imgMarkup = "<img " + altAttr + " " + srcsetAttr + "  " + sizesAttr + ' class="lg-object lg-image" data-index="' + index + '" src="' + src + '" />';
                var sourceTag = "";
                if (sources) {
                    var sourceObj = typeof sources === "string" ? JSON.parse(sources) : sources;
                    sourceTag = sourceObj.map((function(source) {
                        var attrs = "";
                        Object.keys(source).forEach((function(key) {
                            attrs += " " + key + '="' + source[key] + '"';
                        }));
                        return "<source " + attrs + "></source>";
                    }));
                }
                return "" + sourceTag + imgMarkup;
            },
            getResponsiveSrc: function(srcItms) {
                var rsWidth = [];
                var rsSrc = [];
                var src = "";
                for (var i = 0; i < srcItms.length; i++) {
                    var _src = srcItms[i].split(" ");
                    if (_src[0] === "") _src.splice(0, 1);
                    rsSrc.push(_src[0]);
                    rsWidth.push(_src[1]);
                }
                var wWidth = window.innerWidth;
                for (var j = 0; j < rsWidth.length; j++) if (parseInt(rsWidth[j], 10) > wWidth) {
                    src = rsSrc[j];
                    break;
                }
                return src;
            },
            isImageLoaded: function(img) {
                if (!img) return false;
                if (!img.complete) return false;
                if (img.naturalWidth === 0) return false;
                return true;
            },
            getVideoPosterMarkup: function(_poster, dummyImg, videoContStyle, playVideoString, _isVideo) {
                var videoClass = "";
                if (_isVideo && _isVideo.youtube) videoClass = "lg-has-youtube"; else if (_isVideo && _isVideo.vimeo) videoClass = "lg-has-vimeo"; else videoClass = "lg-has-html5";
                return '<div class="lg-video-cont ' + videoClass + '" style="' + videoContStyle + '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' + playVideoString + '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' + playVideoString + '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' + (dummyImg || "") + '\n            <img class="lg-object lg-video-poster" src="' + _poster + '" />\n        </div>';
            },
            getFocusableElements: function(container) {
                var elements = container.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
                var visibleElements = [].filter.call(elements, (function(element) {
                    var style = window.getComputedStyle(element);
                    return style.display !== "none" && style.visibility !== "hidden";
                }));
                return visibleElements;
            },
            getDynamicOptions: function(items, extraProps, getCaptionFromTitleOrAlt, exThumbImage) {
                var dynamicElements = [];
                var availableDynamicOptions = __spreadArrays(defaultDynamicOptions, extraProps);
                [].forEach.call(items, (function(item) {
                    var dynamicEl = {};
                    for (var i = 0; i < item.attributes.length; i++) {
                        var attr = item.attributes[i];
                        if (attr.specified) {
                            var dynamicAttr = convertToData(attr.name);
                            var label = "";
                            if (availableDynamicOptions.indexOf(dynamicAttr) > -1) label = dynamicAttr;
                            if (label) dynamicEl[label] = attr.value;
                        }
                    }
                    var currentItem = $LG(item);
                    var alt = currentItem.find("img").first().attr("alt");
                    var title = currentItem.attr("title");
                    var thumb = exThumbImage ? currentItem.attr(exThumbImage) : currentItem.find("img").first().attr("src");
                    dynamicEl.thumb = thumb;
                    if (getCaptionFromTitleOrAlt && !dynamicEl.subHtml) dynamicEl.subHtml = title || alt || "";
                    dynamicEl.alt = alt || title || "";
                    dynamicElements.push(dynamicEl);
                }));
                return dynamicElements;
            },
            isMobile: function() {
                return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            },
            isVideo: function(src, isHTML5VIdeo, index) {
                if (!src) if (isHTML5VIdeo) return {
                    html5: true
                }; else {
                    console.error("lightGallery :- data-src is not provided on slide item " + (index + 1) + ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/");
                    return;
                }
                var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i);
                var vimeo = src.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i);
                var wistia = src.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);
                if (youtube) return {
                    youtube
                }; else if (vimeo) return {
                    vimeo
                }; else if (wistia) return {
                    wistia
                };
            }
        };
        var lgId = 0;
        var LightGallery = function() {
            function LightGallery(element, options) {
                this.lgOpened = false;
                this.index = 0;
                this.plugins = [];
                this.lGalleryOn = false;
                this.lgBusy = false;
                this.currentItemsInDom = [];
                this.prevScrollTop = 0;
                this.bodyPaddingRight = 0;
                this.isDummyImageRemoved = false;
                this.dragOrSwipeEnabled = false;
                this.mediaContainerPosition = {
                    top: 0,
                    bottom: 0
                };
                if (!element) return this;
                lgId++;
                this.lgId = lgId;
                this.el = element;
                this.LGel = $LG(element);
                this.generateSettings(options);
                this.buildModules();
                if (this.settings.dynamic && this.settings.dynamicEl !== void 0 && !Array.isArray(this.settings.dynamicEl)) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
                this.galleryItems = this.getItems();
                this.normalizeSettings();
                this.init();
                this.validateLicense();
                return this;
            }
            LightGallery.prototype.generateSettings = function(options) {
                this.settings = __assign(__assign({}, lightGalleryCoreSettings), options);
                if (this.settings.isMobile && typeof this.settings.isMobile === "function" ? this.settings.isMobile() : utils.isMobile()) {
                    var mobileSettings = __assign(__assign({}, this.settings.mobileSettings), this.settings.mobileSettings);
                    this.settings = __assign(__assign({}, this.settings), mobileSettings);
                }
            };
            LightGallery.prototype.normalizeSettings = function() {
                if (this.settings.slideEndAnimation) this.settings.hideControlOnEnd = false;
                if (!this.settings.closable) this.settings.swipeToClose = false;
                this.zoomFromOrigin = this.settings.zoomFromOrigin;
                if (this.settings.dynamic) this.zoomFromOrigin = false;
                if (!this.settings.container) this.settings.container = document.body;
                this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length);
            };
            LightGallery.prototype.init = function() {
                var _this = this;
                this.addSlideVideoInfo(this.galleryItems);
                this.buildStructure();
                this.LGel.trigger(lGEvents.init, {
                    instance: this
                });
                if (this.settings.keyPress) this.keyPress();
                setTimeout((function() {
                    _this.enableDrag();
                    _this.enableSwipe();
                    _this.triggerPosterClick();
                }), 50);
                this.arrow();
                if (this.settings.mousewheel) this.mousewheel();
                if (!this.settings.dynamic) this.openGalleryOnItemClick();
            };
            LightGallery.prototype.openGalleryOnItemClick = function() {
                var _this = this;
                var _loop_1 = function(index) {
                    var element = this_1.items[index];
                    var $element = $LG(element);
                    var uuid = lgQuery.generateUUID();
                    $element.attr("data-lg-id", uuid).on("click.lgcustom-item-" + uuid, (function(e) {
                        e.preventDefault();
                        var currentItemIndex = _this.settings.index || index;
                        _this.openGallery(currentItemIndex, element);
                    }));
                };
                var this_1 = this;
                for (var index = 0; index < this.items.length; index++) _loop_1(index);
            };
            LightGallery.prototype.buildModules = function() {
                var _this = this;
                this.settings.plugins.forEach((function(plugin) {
                    _this.plugins.push(new plugin(_this, $LG));
                }));
            };
            LightGallery.prototype.validateLicense = function() {
                if (!this.settings.licenseKey) console.error("Please provide a valid license key"); else if (this.settings.licenseKey === "0000-0000-000-0000") console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use");
            };
            LightGallery.prototype.getSlideItem = function(index) {
                return $LG(this.getSlideItemId(index));
            };
            LightGallery.prototype.getSlideItemId = function(index) {
                return "#lg-item-" + this.lgId + "-" + index;
            };
            LightGallery.prototype.getIdName = function(id) {
                return id + "-" + this.lgId;
            };
            LightGallery.prototype.getElementById = function(id) {
                return $LG("#" + this.getIdName(id));
            };
            LightGallery.prototype.manageSingleSlideClassName = function() {
                if (this.galleryItems.length < 2) this.outer.addClass("lg-single-item"); else this.outer.removeClass("lg-single-item");
            };
            LightGallery.prototype.buildStructure = function() {
                var _this = this;
                var container = this.$container && this.$container.get();
                if (container) return;
                var controls = "";
                var subHtmlCont = "";
                if (this.settings.controls) controls = '<button type="button" id="' + this.getIdName("lg-prev") + '" aria-label="' + this.settings.strings["previousSlide"] + '" class="lg-prev lg-icon"> ' + this.settings.prevHtml + ' </button>\n                <button type="button" id="' + this.getIdName("lg-next") + '" aria-label="' + this.settings.strings["nextSlide"] + '" class="lg-next lg-icon"> ' + this.settings.nextHtml + " </button>";
                if (this.settings.appendSubHtmlTo !== ".lg-item") subHtmlCont = '<div class="lg-sub-html" role="status" aria-live="polite"></div>';
                var addClasses = "";
                if (this.settings.allowMediaOverlap) addClasses += "lg-media-overlap ";
                var ariaLabelledby = this.settings.ariaLabelledby ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"' : "";
                var ariaDescribedby = this.settings.ariaDescribedby ? 'aria-describedby="' + this.settings.ariaDescribedby + '"' : "";
                var containerClassName = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? "lg-inline" : "");
                var closeIcon = this.settings.closable && this.settings.showCloseIcon ? '<button type="button" aria-label="' + this.settings.strings["closeGallery"] + '" id="' + this.getIdName("lg-close") + '" class="lg-close lg-icon"></button>' : "";
                var maximizeIcon = this.settings.showMaximizeIcon ? '<button type="button" aria-label="' + this.settings.strings["toggleMaximize"] + '" id="' + this.getIdName("lg-maximize") + '" class="lg-maximize lg-icon"></button>' : "";
                var template = '\n        <div class="' + containerClassName + '" id="' + this.getIdName("lg-container") + '" tabindex="-1" aria-modal="true" ' + ariaLabelledby + " " + ariaDescribedby + ' role="dialog"\n        >\n            <div id="' + this.getIdName("lg-backdrop") + '" class="lg-backdrop"></div>\n\n            <div id="' + this.getIdName("lg-outer") + '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' + addClasses + ' ">\n\n              <div id="' + this.getIdName("lg-content") + '" class="lg-content">\n                <div id="' + this.getIdName("lg-inner") + '" class="lg-inner">\n                </div>\n                ' + controls + '\n              </div>\n                <div id="' + this.getIdName("lg-toolbar") + '" class="lg-toolbar lg-group">\n                    ' + maximizeIcon + "\n                    " + closeIcon + "\n                    </div>\n                    " + (this.settings.appendSubHtmlTo === ".lg-outer" ? subHtmlCont : "") + '\n                <div id="' + this.getIdName("lg-components") + '" class="lg-components">\n                    ' + (this.settings.appendSubHtmlTo === ".lg-sub-html" ? subHtmlCont : "") + "\n                </div>\n            </div>\n        </div>\n        ";
                $LG(this.settings.container).append(template);
                if (document.body !== this.settings.container) $LG(this.settings.container).css("position", "relative");
                this.outer = this.getElementById("lg-outer");
                this.$lgComponents = this.getElementById("lg-components");
                this.$backdrop = this.getElementById("lg-backdrop");
                this.$container = this.getElementById("lg-container");
                this.$inner = this.getElementById("lg-inner");
                this.$content = this.getElementById("lg-content");
                this.$toolbar = this.getElementById("lg-toolbar");
                this.$backdrop.css("transition-duration", this.settings.backdropDuration + "ms");
                var outerClassNames = this.settings.mode + " ";
                this.manageSingleSlideClassName();
                if (this.settings.enableDrag) outerClassNames += "lg-grab ";
                this.outer.addClass(outerClassNames);
                this.$inner.css("transition-timing-function", this.settings.easing);
                this.$inner.css("transition-duration", this.settings.speed + "ms");
                if (this.settings.download) this.$toolbar.append('<a id="' + this.getIdName("lg-download") + '" target="_blank" rel="noopener" aria-label="' + this.settings.strings["download"] + '" download class="lg-download lg-icon"></a>');
                this.counter();
                $LG(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, (function() {
                    _this.refreshOnResize();
                }));
                this.hideBars();
                this.manageCloseGallery();
                this.toggleMaximize();
                this.initModules();
            };
            LightGallery.prototype.refreshOnResize = function() {
                if (this.lgOpened) {
                    var currentGalleryItem = this.galleryItems[this.index];
                    var __slideVideoInfo = currentGalleryItem.__slideVideoInfo;
                    this.mediaContainerPosition = this.getMediaContainerPosition();
                    var _a = this.mediaContainerPosition, top_1 = _a.top, bottom = _a.bottom;
                    this.currentImageSize = utils.getSize(this.items[this.index], this.outer, top_1 + bottom, __slideVideoInfo && this.settings.videoMaxSize);
                    if (__slideVideoInfo) this.resizeVideoSlide(this.index, this.currentImageSize);
                    if (this.zoomFromOrigin && !this.isDummyImageRemoved) {
                        var imgStyle = this.getDummyImgStyles(this.currentImageSize);
                        this.outer.find(".lg-current .lg-dummy-img").first().attr("style", imgStyle);
                    }
                    this.LGel.trigger(lGEvents.containerResize);
                }
            };
            LightGallery.prototype.resizeVideoSlide = function(index, imageSize) {
                var lgVideoStyle = this.getVideoContStyle(imageSize);
                var currentSlide = this.getSlideItem(index);
                currentSlide.find(".lg-video-cont").attr("style", lgVideoStyle);
            };
            LightGallery.prototype.updateSlides = function(items, index) {
                if (this.index > items.length - 1) this.index = items.length - 1;
                if (items.length === 1) this.index = 0;
                if (!items.length) {
                    this.closeGallery();
                    return;
                }
                var currentSrc = this.galleryItems[index].src;
                this.galleryItems = items;
                this.updateControls();
                this.$inner.empty();
                this.currentItemsInDom = [];
                var _index = 0;
                this.galleryItems.some((function(galleryItem, itemIndex) {
                    if (galleryItem.src === currentSrc) {
                        _index = itemIndex;
                        return true;
                    }
                    return false;
                }));
                this.currentItemsInDom = this.organizeSlideItems(_index, -1);
                this.loadContent(_index, true);
                this.getSlideItem(_index).addClass("lg-current");
                this.index = _index;
                this.updateCurrentCounter(_index);
                this.LGel.trigger(lGEvents.updateSlides);
            };
            LightGallery.prototype.getItems = function() {
                this.items = [];
                if (!this.settings.dynamic) {
                    if (this.settings.selector === "this") this.items.push(this.el); else if (this.settings.selector) if (typeof this.settings.selector === "string") if (this.settings.selectWithin) {
                        var selectWithin = $LG(this.settings.selectWithin);
                        this.items = selectWithin.find(this.settings.selector).get();
                    } else this.items = this.el.querySelectorAll(this.settings.selector); else this.items = this.settings.selector; else this.items = this.el.children;
                    return utils.getDynamicOptions(this.items, this.settings.extraProps, this.settings.getCaptionFromTitleOrAlt, this.settings.exThumbImage);
                } else return this.settings.dynamicEl || [];
            };
            LightGallery.prototype.shouldHideScrollbar = function() {
                return this.settings.hideScrollbar && document.body === this.settings.container;
            };
            LightGallery.prototype.hideScrollbar = function() {
                if (!this.shouldHideScrollbar()) return;
                this.bodyPaddingRight = parseFloat($LG("body").style().paddingRight);
                var bodyRect = document.documentElement.getBoundingClientRect();
                var scrollbarWidth = window.innerWidth - bodyRect.width;
                $LG(document.body).css("padding-right", scrollbarWidth + this.bodyPaddingRight + "px");
                $LG(document.body).addClass("lg-overlay-open");
            };
            LightGallery.prototype.resetScrollBar = function() {
                if (!this.shouldHideScrollbar()) return;
                $LG(document.body).css("padding-right", this.bodyPaddingRight + "px");
                $LG(document.body).removeClass("lg-overlay-open");
            };
            LightGallery.prototype.openGallery = function(index, element) {
                var _this = this;
                if (index === void 0) index = this.settings.index;
                if (this.lgOpened) return;
                this.lgOpened = true;
                this.outer.removeClass("lg-hide-items");
                this.hideScrollbar();
                this.$container.addClass("lg-show");
                var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, index);
                this.currentItemsInDom = itemsToBeInsertedToDom;
                var items = "";
                itemsToBeInsertedToDom.forEach((function(item) {
                    items = items + '<div id="' + item + '" class="lg-item"></div>';
                }));
                this.$inner.append(items);
                this.addHtml(index);
                var transform = "";
                this.mediaContainerPosition = this.getMediaContainerPosition();
                var _a = this.mediaContainerPosition, top = _a.top, bottom = _a.bottom;
                if (!this.settings.allowMediaOverlap) this.setMediaContainerPosition(top, bottom);
                var __slideVideoInfo = this.galleryItems[index].__slideVideoInfo;
                if (this.zoomFromOrigin && element) {
                    this.currentImageSize = utils.getSize(element, this.outer, top + bottom, __slideVideoInfo && this.settings.videoMaxSize);
                    transform = utils.getTransform(element, this.outer, top, bottom, this.currentImageSize);
                }
                if (!this.zoomFromOrigin || !transform) {
                    this.outer.addClass(this.settings.startClass);
                    this.getSlideItem(index).removeClass("lg-complete");
                }
                var timeout = this.settings.zoomFromOrigin ? 100 : this.settings.backdropDuration;
                setTimeout((function() {
                    _this.outer.addClass("lg-components-open");
                }), timeout);
                this.index = index;
                this.LGel.trigger(lGEvents.beforeOpen);
                this.getSlideItem(index).addClass("lg-current");
                this.lGalleryOn = false;
                this.prevScrollTop = $LG(window).scrollTop();
                setTimeout((function() {
                    if (_this.zoomFromOrigin && transform) {
                        var currentSlide_1 = _this.getSlideItem(index);
                        currentSlide_1.css("transform", transform);
                        setTimeout((function() {
                            currentSlide_1.addClass("lg-start-progress lg-start-end-progress").css("transition-duration", _this.settings.startAnimationDuration + "ms");
                            _this.outer.addClass("lg-zoom-from-image");
                        }));
                        setTimeout((function() {
                            currentSlide_1.css("transform", "translate3d(0, 0, 0)");
                        }), 100);
                    }
                    setTimeout((function() {
                        _this.$backdrop.addClass("in");
                        _this.$container.addClass("lg-show-in");
                    }), 10);
                    setTimeout((function() {
                        if (_this.settings.trapFocus && document.body === _this.settings.container) _this.trapFocus();
                    }), _this.settings.backdropDuration + 50);
                    if (!_this.zoomFromOrigin || !transform) setTimeout((function() {
                        _this.outer.addClass("lg-visible");
                    }), _this.settings.backdropDuration);
                    _this.slide(index, false, false, false);
                    _this.LGel.trigger(lGEvents.afterOpen);
                }));
                if (document.body === this.settings.container) $LG("html").addClass("lg-on");
            };
            LightGallery.prototype.getMediaContainerPosition = function() {
                if (this.settings.allowMediaOverlap) return {
                    top: 0,
                    bottom: 0
                };
                var top = this.$toolbar.get().clientHeight || 0;
                var subHtml = this.outer.find(".lg-components .lg-sub-html").get();
                var captionHeight = this.settings.defaultCaptionHeight || subHtml && subHtml.clientHeight || 0;
                var thumbContainer = this.outer.find(".lg-thumb-outer").get();
                var thumbHeight = thumbContainer ? thumbContainer.clientHeight : 0;
                var bottom = thumbHeight + captionHeight;
                return {
                    top,
                    bottom
                };
            };
            LightGallery.prototype.setMediaContainerPosition = function(top, bottom) {
                if (top === void 0) top = 0;
                if (bottom === void 0) bottom = 0;
                this.$content.css("top", top + "px").css("bottom", bottom + "px");
            };
            LightGallery.prototype.hideBars = function() {
                var _this = this;
                setTimeout((function() {
                    _this.outer.removeClass("lg-hide-items");
                    if (_this.settings.hideBarsDelay > 0) {
                        _this.outer.on("mousemove.lg click.lg touchstart.lg", (function() {
                            _this.outer.removeClass("lg-hide-items");
                            clearTimeout(_this.hideBarTimeout);
                            _this.hideBarTimeout = setTimeout((function() {
                                _this.outer.addClass("lg-hide-items");
                            }), _this.settings.hideBarsDelay);
                        }));
                        _this.outer.trigger("mousemove.lg");
                    }
                }), this.settings.showBarsAfter);
            };
            LightGallery.prototype.initPictureFill = function($img) {
                if (this.settings.supportLegacyBrowser) try {
                    picturefill({
                        elements: [ $img.get() ]
                    });
                } catch (e) {
                    console.warn("lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.");
                }
            };
            LightGallery.prototype.counter = function() {
                if (this.settings.counter) {
                    var counterHtml = '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' + this.getIdName("lg-counter-current") + '" class="lg-counter-current">' + (this.index + 1) + ' </span> /\n                <span id="' + this.getIdName("lg-counter-all") + '" class="lg-counter-all">' + this.galleryItems.length + " </span></div>";
                    this.outer.find(this.settings.appendCounterTo).append(counterHtml);
                }
            };
            LightGallery.prototype.addHtml = function(index) {
                var subHtml;
                var subHtmlUrl;
                if (this.galleryItems[index].subHtmlUrl) subHtmlUrl = this.galleryItems[index].subHtmlUrl; else subHtml = this.galleryItems[index].subHtml;
                if (!subHtmlUrl) if (subHtml) {
                    var fL = subHtml.substring(0, 1);
                    if (fL === "." || fL === "#") if (this.settings.subHtmlSelectorRelative && !this.settings.dynamic) subHtml = $LG(this.items).eq(index).find(subHtml).first().html(); else subHtml = $LG(subHtml).first().html();
                } else subHtml = "";
                if (this.settings.appendSubHtmlTo !== ".lg-item") if (subHtmlUrl) this.outer.find(".lg-sub-html").load(subHtmlUrl); else this.outer.find(".lg-sub-html").html(subHtml); else {
                    var currentSlide = $LG(this.getSlideItemId(index));
                    if (subHtmlUrl) currentSlide.load(subHtmlUrl); else currentSlide.append('<div class="lg-sub-html">' + subHtml + "</div>");
                }
                if (typeof subHtml !== "undefined" && subHtml !== null) if (subHtml === "") this.outer.find(this.settings.appendSubHtmlTo).addClass("lg-empty-html"); else this.outer.find(this.settings.appendSubHtmlTo).removeClass("lg-empty-html");
                this.LGel.trigger(lGEvents.afterAppendSubHtml, {
                    index
                });
            };
            LightGallery.prototype.preload = function(index) {
                for (var i = 1; i <= this.settings.preload; i++) {
                    if (i >= this.galleryItems.length - index) break;
                    this.loadContent(index + i, false);
                }
                for (var j = 1; j <= this.settings.preload; j++) {
                    if (index - j < 0) break;
                    this.loadContent(index - j, false);
                }
            };
            LightGallery.prototype.getDummyImgStyles = function(imageSize) {
                if (!imageSize) return "";
                return "width:" + imageSize.width + "px;\n                margin-left: -" + imageSize.width / 2 + "px;\n                margin-top: -" + imageSize.height / 2 + "px;\n                height:" + imageSize.height + "px";
            };
            LightGallery.prototype.getVideoContStyle = function(imageSize) {
                if (!imageSize) return "";
                return "width:" + imageSize.width + "px;\n                height:" + imageSize.height + "px";
            };
            LightGallery.prototype.getDummyImageContent = function($currentSlide, index, alt) {
                var $currentItem;
                if (!this.settings.dynamic) $currentItem = $LG(this.items).eq(index);
                if ($currentItem) {
                    var _dummyImgSrc = void 0;
                    if (!this.settings.exThumbImage) _dummyImgSrc = $currentItem.find("img").first().attr("src"); else _dummyImgSrc = $currentItem.attr(this.settings.exThumbImage);
                    if (!_dummyImgSrc) return "";
                    var imgStyle = this.getDummyImgStyles(this.currentImageSize);
                    var dummyImgContent = "<img " + alt + ' style="' + imgStyle + '" class="lg-dummy-img" src="' + _dummyImgSrc + '" />';
                    $currentSlide.addClass("lg-first-slide");
                    this.outer.addClass("lg-first-slide-loading");
                    return dummyImgContent;
                }
                return "";
            };
            LightGallery.prototype.setImgMarkup = function(src, $currentSlide, index) {
                var currentGalleryItem = this.galleryItems[index];
                var alt = currentGalleryItem.alt, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
                var imgContent = "";
                var altAttr = alt ? 'alt="' + alt + '"' : "";
                if (this.isFirstSlideWithZoomAnimation()) imgContent = this.getDummyImageContent($currentSlide, index, altAttr); else imgContent = utils.getImgMarkup(index, src, altAttr, srcset, sizes, sources);
                var imgMarkup = '<picture class="lg-img-wrap"> ' + imgContent + "</picture>";
                $currentSlide.prepend(imgMarkup);
            };
            LightGallery.prototype.onSlideObjectLoad = function($slide, isHTML5VideoWithoutPoster, onLoad, onError) {
                var mediaObject = $slide.find(".lg-object").first();
                if (utils.isImageLoaded(mediaObject.get()) || isHTML5VideoWithoutPoster) onLoad(); else {
                    mediaObject.on("load.lg error.lg", (function() {
                        onLoad && onLoad();
                    }));
                    mediaObject.on("error.lg", (function() {
                        onError && onError();
                    }));
                }
            };
            LightGallery.prototype.onLgObjectLoad = function(currentSlide, index, delay, speed, isFirstSlide, isHTML5VideoWithoutPoster) {
                var _this = this;
                this.onSlideObjectLoad(currentSlide, isHTML5VideoWithoutPoster, (function() {
                    _this.triggerSlideItemLoad(currentSlide, index, delay, speed, isFirstSlide);
                }), (function() {
                    currentSlide.addClass("lg-complete lg-complete_");
                    currentSlide.html('<span class="lg-error-msg">Oops... Failed to load content...</span>');
                }));
            };
            LightGallery.prototype.triggerSlideItemLoad = function($currentSlide, index, delay, speed, isFirstSlide) {
                var _this = this;
                var currentGalleryItem = this.galleryItems[index];
                var _speed = isFirstSlide && this.getSlideType(currentGalleryItem) === "video" && !currentGalleryItem.poster ? speed : 0;
                setTimeout((function() {
                    $currentSlide.addClass("lg-complete lg-complete_");
                    _this.LGel.trigger(lGEvents.slideItemLoad, {
                        index,
                        delay: delay || 0,
                        isFirstSlide
                    });
                }), _speed);
            };
            LightGallery.prototype.isFirstSlideWithZoomAnimation = function() {
                return !!(!this.lGalleryOn && this.zoomFromOrigin && this.currentImageSize);
            };
            LightGallery.prototype.addSlideVideoInfo = function(items) {
                var _this = this;
                items.forEach((function(element, index) {
                    element.__slideVideoInfo = utils.isVideo(element.src, !!element.video, index);
                    if (element.__slideVideoInfo && _this.settings.loadYouTubePoster && !element.poster && element.__slideVideoInfo.youtube) element.poster = "//img.youtube.com/vi/" + element.__slideVideoInfo.youtube[1] + "/maxresdefault.jpg";
                }));
            };
            LightGallery.prototype.loadContent = function(index, rec) {
                var _this = this;
                var currentGalleryItem = this.galleryItems[index];
                var $currentSlide = $LG(this.getSlideItemId(index));
                var poster = currentGalleryItem.poster, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
                var src = currentGalleryItem.src;
                var video = currentGalleryItem.video;
                var _html5Video = video && typeof video === "string" ? JSON.parse(video) : video;
                if (currentGalleryItem.responsive) {
                    var srcDyItms = currentGalleryItem.responsive.split(",");
                    src = utils.getResponsiveSrc(srcDyItms) || src;
                }
                var videoInfo = currentGalleryItem.__slideVideoInfo;
                var lgVideoStyle = "";
                var iframe = !!currentGalleryItem.iframe;
                var isFirstSlide = !this.lGalleryOn;
                var delay = 0;
                if (isFirstSlide) if (this.zoomFromOrigin && this.currentImageSize) delay = this.settings.startAnimationDuration + 10; else delay = this.settings.backdropDuration + 10;
                if (!$currentSlide.hasClass("lg-loaded")) {
                    if (videoInfo) {
                        var _a = this.mediaContainerPosition, top_2 = _a.top, bottom = _a.bottom;
                        var videoSize = utils.getSize(this.items[index], this.outer, top_2 + bottom, videoInfo && this.settings.videoMaxSize);
                        lgVideoStyle = this.getVideoContStyle(videoSize);
                    }
                    if (iframe) {
                        var markup = utils.getIframeMarkup(this.settings.iframeWidth, this.settings.iframeHeight, this.settings.iframeMaxWidth, this.settings.iframeMaxHeight, src, currentGalleryItem.iframeTitle);
                        $currentSlide.prepend(markup);
                    } else if (poster) {
                        var dummyImg = "";
                        var hasStartAnimation = isFirstSlide && this.zoomFromOrigin && this.currentImageSize;
                        if (hasStartAnimation) dummyImg = this.getDummyImageContent($currentSlide, index, "");
                        markup = utils.getVideoPosterMarkup(poster, dummyImg || "", lgVideoStyle, this.settings.strings["playVideo"], videoInfo);
                        $currentSlide.prepend(markup);
                    } else if (videoInfo) {
                        markup = '<div class="lg-video-cont " style="' + lgVideoStyle + '"></div>';
                        $currentSlide.prepend(markup);
                    } else {
                        this.setImgMarkup(src, $currentSlide, index);
                        if (srcset || sources) {
                            var $img = $currentSlide.find(".lg-object");
                            this.initPictureFill($img);
                        }
                    }
                    if (poster || videoInfo) this.LGel.trigger(lGEvents.hasVideo, {
                        index,
                        src,
                        html5Video: _html5Video,
                        hasPoster: !!poster
                    });
                    this.LGel.trigger(lGEvents.afterAppendSlide, {
                        index
                    });
                    if (this.lGalleryOn && this.settings.appendSubHtmlTo === ".lg-item") this.addHtml(index);
                }
                var _speed = 0;
                if (delay && !$LG(document.body).hasClass("lg-from-hash")) _speed = delay;
                if (this.isFirstSlideWithZoomAnimation()) {
                    setTimeout((function() {
                        $currentSlide.removeClass("lg-start-end-progress lg-start-progress").removeAttr("style");
                    }), this.settings.startAnimationDuration + 100);
                    if (!$currentSlide.hasClass("lg-loaded")) setTimeout((function() {
                        if (_this.getSlideType(currentGalleryItem) === "image") {
                            var alt = currentGalleryItem.alt;
                            var altAttr = alt ? 'alt="' + alt + '"' : "";
                            $currentSlide.find(".lg-img-wrap").append(utils.getImgMarkup(index, src, altAttr, srcset, sizes, currentGalleryItem.sources));
                            if (srcset || sources) {
                                var $img = $currentSlide.find(".lg-object");
                                _this.initPictureFill($img);
                            }
                        }
                        if (_this.getSlideType(currentGalleryItem) === "image" || _this.getSlideType(currentGalleryItem) === "video" && poster) {
                            _this.onLgObjectLoad($currentSlide, index, delay, _speed, true, false);
                            _this.onSlideObjectLoad($currentSlide, !!(videoInfo && videoInfo.html5 && !poster), (function() {
                                _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                            }), (function() {
                                _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                            }));
                        }
                    }), this.settings.startAnimationDuration + 100);
                }
                $currentSlide.addClass("lg-loaded");
                if (!this.isFirstSlideWithZoomAnimation() || this.getSlideType(currentGalleryItem) === "video" && !poster) this.onLgObjectLoad($currentSlide, index, delay, _speed, isFirstSlide, !!(videoInfo && videoInfo.html5 && !poster));
                if ((!this.zoomFromOrigin || !this.currentImageSize) && $currentSlide.hasClass("lg-complete_") && !this.lGalleryOn) setTimeout((function() {
                    $currentSlide.addClass("lg-complete");
                }), this.settings.backdropDuration);
                this.lGalleryOn = true;
                if (rec === true) if (!$currentSlide.hasClass("lg-complete_")) $currentSlide.find(".lg-object").first().on("load.lg error.lg", (function() {
                    _this.preload(index);
                })); else this.preload(index);
            };
            LightGallery.prototype.loadContentOnFirstSlideLoad = function(index, $currentSlide, speed) {
                var _this = this;
                setTimeout((function() {
                    $currentSlide.find(".lg-dummy-img").remove();
                    $currentSlide.removeClass("lg-first-slide");
                    _this.outer.removeClass("lg-first-slide-loading");
                    _this.isDummyImageRemoved = true;
                    _this.preload(index);
                }), speed + 300);
            };
            LightGallery.prototype.getItemsToBeInsertedToDom = function(index, prevIndex, numberOfItems) {
                var _this = this;
                if (numberOfItems === void 0) numberOfItems = 0;
                var itemsToBeInsertedToDom = [];
                var possibleNumberOfItems = Math.max(numberOfItems, 3);
                possibleNumberOfItems = Math.min(possibleNumberOfItems, this.galleryItems.length);
                var prevIndexItem = "lg-item-" + this.lgId + "-" + prevIndex;
                if (this.galleryItems.length <= 3) {
                    this.galleryItems.forEach((function(_element, index) {
                        itemsToBeInsertedToDom.push("lg-item-" + _this.lgId + "-" + index);
                    }));
                    return itemsToBeInsertedToDom;
                }
                if (index < (this.galleryItems.length - 1) / 2) {
                    for (var idx = index; idx > index - possibleNumberOfItems / 2 && idx >= 0; idx--) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
                    var numberOfExistingItems = itemsToBeInsertedToDom.length;
                    for (idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index + idx + 1));
                } else {
                    for (idx = index; idx <= this.galleryItems.length - 1 && idx < index + possibleNumberOfItems / 2; idx++) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
                    numberOfExistingItems = itemsToBeInsertedToDom.length;
                    for (idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index - idx - 1));
                }
                if (this.settings.loop) if (index === this.galleryItems.length - 1) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + 0); else if (index === 0) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1));
                if (itemsToBeInsertedToDom.indexOf(prevIndexItem) === -1) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + prevIndex);
                return itemsToBeInsertedToDom;
            };
            LightGallery.prototype.organizeSlideItems = function(index, prevIndex) {
                var _this = this;
                var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, prevIndex, this.settings.numberOfSlideItemsInDom);
                itemsToBeInsertedToDom.forEach((function(item) {
                    if (_this.currentItemsInDom.indexOf(item) === -1) _this.$inner.append('<div id="' + item + '" class="lg-item"></div>');
                }));
                this.currentItemsInDom.forEach((function(item) {
                    if (itemsToBeInsertedToDom.indexOf(item) === -1) $LG("#" + item).remove();
                }));
                return itemsToBeInsertedToDom;
            };
            LightGallery.prototype.getPreviousSlideIndex = function() {
                var prevIndex = 0;
                try {
                    var currentItemId = this.outer.find(".lg-current").first().attr("id");
                    prevIndex = parseInt(currentItemId.split("-")[3]) || 0;
                } catch (error) {
                    prevIndex = 0;
                }
                return prevIndex;
            };
            LightGallery.prototype.setDownloadValue = function(index) {
                if (this.settings.download) {
                    var currentGalleryItem = this.galleryItems[index];
                    var hideDownloadBtn = currentGalleryItem.downloadUrl === false || currentGalleryItem.downloadUrl === "false";
                    if (hideDownloadBtn) this.outer.addClass("lg-hide-download"); else {
                        var $download = this.getElementById("lg-download");
                        this.outer.removeClass("lg-hide-download");
                        $download.attr("href", currentGalleryItem.downloadUrl || currentGalleryItem.src);
                        if (currentGalleryItem.download) $download.attr("download", currentGalleryItem.download);
                    }
                }
            };
            LightGallery.prototype.makeSlideAnimation = function(direction, currentSlideItem, previousSlideItem) {
                var _this = this;
                if (this.lGalleryOn) previousSlideItem.addClass("lg-slide-progress");
                setTimeout((function() {
                    _this.outer.addClass("lg-no-trans");
                    _this.outer.find(".lg-item").removeClass("lg-prev-slide lg-next-slide");
                    if (direction === "prev") {
                        currentSlideItem.addClass("lg-prev-slide");
                        previousSlideItem.addClass("lg-next-slide");
                    } else {
                        currentSlideItem.addClass("lg-next-slide");
                        previousSlideItem.addClass("lg-prev-slide");
                    }
                    setTimeout((function() {
                        _this.outer.find(".lg-item").removeClass("lg-current");
                        currentSlideItem.addClass("lg-current");
                        _this.outer.removeClass("lg-no-trans");
                    }), 50);
                }), this.lGalleryOn ? this.settings.slideDelay : 0);
            };
            LightGallery.prototype.slide = function(index, fromTouch, fromThumb, direction) {
                var _this = this;
                var prevIndex = this.getPreviousSlideIndex();
                this.currentItemsInDom = this.organizeSlideItems(index, prevIndex);
                if (this.lGalleryOn && prevIndex === index) return;
                var numberOfGalleryItems = this.galleryItems.length;
                if (!this.lgBusy) {
                    if (this.settings.counter) this.updateCurrentCounter(index);
                    var currentSlideItem = this.getSlideItem(index);
                    var previousSlideItem_1 = this.getSlideItem(prevIndex);
                    var currentGalleryItem = this.galleryItems[index];
                    var videoInfo = currentGalleryItem.__slideVideoInfo;
                    this.outer.attr("data-lg-slide-type", this.getSlideType(currentGalleryItem));
                    this.setDownloadValue(index);
                    if (videoInfo) {
                        var _a = this.mediaContainerPosition, top_3 = _a.top, bottom = _a.bottom;
                        var videoSize = utils.getSize(this.items[index], this.outer, top_3 + bottom, videoInfo && this.settings.videoMaxSize);
                        this.resizeVideoSlide(index, videoSize);
                    }
                    this.LGel.trigger(lGEvents.beforeSlide, {
                        prevIndex,
                        index,
                        fromTouch: !!fromTouch,
                        fromThumb: !!fromThumb
                    });
                    this.lgBusy = true;
                    clearTimeout(this.hideBarTimeout);
                    this.arrowDisable(index);
                    if (!direction) if (index < prevIndex) direction = "prev"; else if (index > prevIndex) direction = "next";
                    if (!fromTouch) this.makeSlideAnimation(direction, currentSlideItem, previousSlideItem_1); else {
                        this.outer.find(".lg-item").removeClass("lg-prev-slide lg-current lg-next-slide");
                        var touchPrev = void 0;
                        var touchNext = void 0;
                        if (numberOfGalleryItems > 2) {
                            touchPrev = index - 1;
                            touchNext = index + 1;
                            if (index === 0 && prevIndex === numberOfGalleryItems - 1) {
                                touchNext = 0;
                                touchPrev = numberOfGalleryItems - 1;
                            } else if (index === numberOfGalleryItems - 1 && prevIndex === 0) {
                                touchNext = 0;
                                touchPrev = numberOfGalleryItems - 1;
                            }
                        } else {
                            touchPrev = 0;
                            touchNext = 1;
                        }
                        if (direction === "prev") this.getSlideItem(touchNext).addClass("lg-next-slide"); else this.getSlideItem(touchPrev).addClass("lg-prev-slide");
                        currentSlideItem.addClass("lg-current");
                    }
                    if (!this.lGalleryOn) this.loadContent(index, true); else setTimeout((function() {
                        _this.loadContent(index, true);
                        if (_this.settings.appendSubHtmlTo !== ".lg-item") _this.addHtml(index);
                    }), this.settings.speed + 50 + (fromTouch ? 0 : this.settings.slideDelay));
                    setTimeout((function() {
                        _this.lgBusy = false;
                        previousSlideItem_1.removeClass("lg-slide-progress");
                        _this.LGel.trigger(lGEvents.afterSlide, {
                            prevIndex,
                            index,
                            fromTouch,
                            fromThumb
                        });
                    }), (this.lGalleryOn ? this.settings.speed + 100 : 100) + (fromTouch ? 0 : this.settings.slideDelay));
                }
                this.index = index;
            };
            LightGallery.prototype.updateCurrentCounter = function(index) {
                this.getElementById("lg-counter-current").html(index + 1 + "");
            };
            LightGallery.prototype.updateCounterTotal = function() {
                this.getElementById("lg-counter-all").html(this.galleryItems.length + "");
            };
            LightGallery.prototype.getSlideType = function(item) {
                if (item.__slideVideoInfo) return "video"; else if (item.iframe) return "iframe"; else return "image";
            };
            LightGallery.prototype.touchMove = function(startCoords, endCoords, e) {
                var distanceX = endCoords.pageX - startCoords.pageX;
                var distanceY = endCoords.pageY - startCoords.pageY;
                var allowSwipe = false;
                if (this.swipeDirection) allowSwipe = true; else if (Math.abs(distanceX) > 15) {
                    this.swipeDirection = "horizontal";
                    allowSwipe = true;
                } else if (Math.abs(distanceY) > 15) {
                    this.swipeDirection = "vertical";
                    allowSwipe = true;
                }
                if (!allowSwipe) return;
                var $currentSlide = this.getSlideItem(this.index);
                if (this.swipeDirection === "horizontal") {
                    e === null || e === void 0 ? void 0 : e.preventDefault();
                    this.outer.addClass("lg-dragging");
                    this.setTranslate($currentSlide, distanceX, 0);
                    var width = $currentSlide.get().offsetWidth;
                    var slideWidthAmount = width * 15 / 100;
                    var gutter = slideWidthAmount - Math.abs(distanceX * 10 / 100);
                    this.setTranslate(this.outer.find(".lg-prev-slide").first(), -width + distanceX - gutter, 0);
                    this.setTranslate(this.outer.find(".lg-next-slide").first(), width + distanceX + gutter, 0);
                } else if (this.swipeDirection === "vertical") if (this.settings.swipeToClose) {
                    e === null || e === void 0 ? void 0 : e.preventDefault();
                    this.$container.addClass("lg-dragging-vertical");
                    var opacity = 1 - Math.abs(distanceY) / window.innerHeight;
                    this.$backdrop.css("opacity", opacity);
                    var scale = 1 - Math.abs(distanceY) / (window.innerWidth * 2);
                    this.setTranslate($currentSlide, 0, distanceY, scale, scale);
                    if (Math.abs(distanceY) > 100) this.outer.addClass("lg-hide-items").removeClass("lg-components-open");
                }
            };
            LightGallery.prototype.touchEnd = function(endCoords, startCoords, event) {
                var _this = this;
                var distance;
                if (this.settings.mode !== "lg-slide") this.outer.addClass("lg-slide");
                setTimeout((function() {
                    _this.$container.removeClass("lg-dragging-vertical");
                    _this.outer.removeClass("lg-dragging lg-hide-items").addClass("lg-components-open");
                    var triggerClick = true;
                    if (_this.swipeDirection === "horizontal") {
                        distance = endCoords.pageX - startCoords.pageX;
                        var distanceAbs = Math.abs(endCoords.pageX - startCoords.pageX);
                        if (distance < 0 && distanceAbs > _this.settings.swipeThreshold) {
                            _this.goToNextSlide(true);
                            triggerClick = false;
                        } else if (distance > 0 && distanceAbs > _this.settings.swipeThreshold) {
                            _this.goToPrevSlide(true);
                            triggerClick = false;
                        }
                    } else if (_this.swipeDirection === "vertical") {
                        distance = Math.abs(endCoords.pageY - startCoords.pageY);
                        if (_this.settings.closable && _this.settings.swipeToClose && distance > 100) {
                            _this.closeGallery();
                            return;
                        } else _this.$backdrop.css("opacity", 1);
                    }
                    _this.outer.find(".lg-item").removeAttr("style");
                    if (triggerClick && Math.abs(endCoords.pageX - startCoords.pageX) < 5) {
                        var target = $LG(event.target);
                        if (_this.isPosterElement(target)) _this.LGel.trigger(lGEvents.posterClick);
                    }
                    _this.swipeDirection = void 0;
                }));
                setTimeout((function() {
                    if (!_this.outer.hasClass("lg-dragging") && _this.settings.mode !== "lg-slide") _this.outer.removeClass("lg-slide");
                }), this.settings.speed + 100);
            };
            LightGallery.prototype.enableSwipe = function() {
                var _this = this;
                var startCoords = {};
                var endCoords = {};
                var isMoved = false;
                var isSwiping = false;
                if (this.settings.enableSwipe) {
                    this.$inner.on("touchstart.lg", (function(e) {
                        _this.dragOrSwipeEnabled = true;
                        var $item = _this.getSlideItem(_this.index);
                        if (($LG(e.target).hasClass("lg-item") || $item.get().contains(e.target)) && !_this.outer.hasClass("lg-zoomed") && !_this.lgBusy && e.touches.length === 1) {
                            isSwiping = true;
                            _this.touchAction = "swipe";
                            _this.manageSwipeClass();
                            startCoords = {
                                pageX: e.touches[0].pageX,
                                pageY: e.touches[0].pageY
                            };
                        }
                    }));
                    this.$inner.on("touchmove.lg", (function(e) {
                        if (isSwiping && _this.touchAction === "swipe" && e.touches.length === 1) {
                            endCoords = {
                                pageX: e.touches[0].pageX,
                                pageY: e.touches[0].pageY
                            };
                            _this.touchMove(startCoords, endCoords, e);
                            isMoved = true;
                        }
                    }));
                    this.$inner.on("touchend.lg", (function(event) {
                        if (_this.touchAction === "swipe") {
                            if (isMoved) {
                                isMoved = false;
                                _this.touchEnd(endCoords, startCoords, event);
                            } else if (isSwiping) {
                                var target = $LG(event.target);
                                if (_this.isPosterElement(target)) _this.LGel.trigger(lGEvents.posterClick);
                            }
                            _this.touchAction = void 0;
                            isSwiping = false;
                        }
                    }));
                }
            };
            LightGallery.prototype.enableDrag = function() {
                var _this = this;
                var startCoords = {};
                var endCoords = {};
                var isDraging = false;
                var isMoved = false;
                if (this.settings.enableDrag) {
                    this.outer.on("mousedown.lg", (function(e) {
                        _this.dragOrSwipeEnabled = true;
                        var $item = _this.getSlideItem(_this.index);
                        if ($LG(e.target).hasClass("lg-item") || $item.get().contains(e.target)) if (!_this.outer.hasClass("lg-zoomed") && !_this.lgBusy) {
                            e.preventDefault();
                            if (!_this.lgBusy) {
                                _this.manageSwipeClass();
                                startCoords = {
                                    pageX: e.pageX,
                                    pageY: e.pageY
                                };
                                isDraging = true;
                                _this.outer.get().scrollLeft += 1;
                                _this.outer.get().scrollLeft -= 1;
                                _this.outer.removeClass("lg-grab").addClass("lg-grabbing");
                                _this.LGel.trigger(lGEvents.dragStart);
                            }
                        }
                    }));
                    $LG(window).on("mousemove.lg.global" + this.lgId, (function(e) {
                        if (isDraging && _this.lgOpened) {
                            isMoved = true;
                            endCoords = {
                                pageX: e.pageX,
                                pageY: e.pageY
                            };
                            _this.touchMove(startCoords, endCoords);
                            _this.LGel.trigger(lGEvents.dragMove);
                        }
                    }));
                    $LG(window).on("mouseup.lg.global" + this.lgId, (function(event) {
                        if (!_this.lgOpened) return;
                        var target = $LG(event.target);
                        if (isMoved) {
                            isMoved = false;
                            _this.touchEnd(endCoords, startCoords, event);
                            _this.LGel.trigger(lGEvents.dragEnd);
                        } else if (_this.isPosterElement(target)) _this.LGel.trigger(lGEvents.posterClick);
                        if (isDraging) {
                            isDraging = false;
                            _this.outer.removeClass("lg-grabbing").addClass("lg-grab");
                        }
                    }));
                }
            };
            LightGallery.prototype.triggerPosterClick = function() {
                var _this = this;
                this.$inner.on("click.lg", (function(event) {
                    if (!_this.dragOrSwipeEnabled && _this.isPosterElement($LG(event.target))) _this.LGel.trigger(lGEvents.posterClick);
                }));
            };
            LightGallery.prototype.manageSwipeClass = function() {
                var _touchNext = this.index + 1;
                var _touchPrev = this.index - 1;
                if (this.settings.loop && this.galleryItems.length > 2) if (this.index === 0) _touchPrev = this.galleryItems.length - 1; else if (this.index === this.galleryItems.length - 1) _touchNext = 0;
                this.outer.find(".lg-item").removeClass("lg-next-slide lg-prev-slide");
                if (_touchPrev > -1) this.getSlideItem(_touchPrev).addClass("lg-prev-slide");
                this.getSlideItem(_touchNext).addClass("lg-next-slide");
            };
            LightGallery.prototype.goToNextSlide = function(fromTouch) {
                var _this = this;
                var _loop = this.settings.loop;
                if (fromTouch && this.galleryItems.length < 3) _loop = false;
                if (!this.lgBusy) if (this.index + 1 < this.galleryItems.length) {
                    this.index++;
                    this.LGel.trigger(lGEvents.beforeNextSlide, {
                        index: this.index
                    });
                    this.slide(this.index, !!fromTouch, false, "next");
                } else if (_loop) {
                    this.index = 0;
                    this.LGel.trigger(lGEvents.beforeNextSlide, {
                        index: this.index
                    });
                    this.slide(this.index, !!fromTouch, false, "next");
                } else if (this.settings.slideEndAnimation && !fromTouch) {
                    this.outer.addClass("lg-right-end");
                    setTimeout((function() {
                        _this.outer.removeClass("lg-right-end");
                    }), 400);
                }
            };
            LightGallery.prototype.goToPrevSlide = function(fromTouch) {
                var _this = this;
                var _loop = this.settings.loop;
                if (fromTouch && this.galleryItems.length < 3) _loop = false;
                if (!this.lgBusy) if (this.index > 0) {
                    this.index--;
                    this.LGel.trigger(lGEvents.beforePrevSlide, {
                        index: this.index,
                        fromTouch
                    });
                    this.slide(this.index, !!fromTouch, false, "prev");
                } else if (_loop) {
                    this.index = this.galleryItems.length - 1;
                    this.LGel.trigger(lGEvents.beforePrevSlide, {
                        index: this.index,
                        fromTouch
                    });
                    this.slide(this.index, !!fromTouch, false, "prev");
                } else if (this.settings.slideEndAnimation && !fromTouch) {
                    this.outer.addClass("lg-left-end");
                    setTimeout((function() {
                        _this.outer.removeClass("lg-left-end");
                    }), 400);
                }
            };
            LightGallery.prototype.keyPress = function() {
                var _this = this;
                $LG(window).on("keydown.lg.global" + this.lgId, (function(e) {
                    if (_this.lgOpened && _this.settings.escKey === true && e.keyCode === 27) {
                        e.preventDefault();
                        if (_this.settings.allowMediaOverlap && _this.outer.hasClass("lg-can-toggle") && _this.outer.hasClass("lg-components-open")) _this.outer.removeClass("lg-components-open"); else _this.closeGallery();
                    }
                    if (_this.lgOpened && _this.galleryItems.length > 1) {
                        if (e.keyCode === 37) {
                            e.preventDefault();
                            _this.goToPrevSlide();
                        }
                        if (e.keyCode === 39) {
                            e.preventDefault();
                            _this.goToNextSlide();
                        }
                    }
                }));
            };
            LightGallery.prototype.arrow = function() {
                var _this = this;
                this.getElementById("lg-prev").on("click.lg", (function() {
                    _this.goToPrevSlide();
                }));
                this.getElementById("lg-next").on("click.lg", (function() {
                    _this.goToNextSlide();
                }));
            };
            LightGallery.prototype.arrowDisable = function(index) {
                if (!this.settings.loop && this.settings.hideControlOnEnd) {
                    var $prev = this.getElementById("lg-prev");
                    var $next = this.getElementById("lg-next");
                    if (index + 1 === this.galleryItems.length) $next.attr("disabled", "disabled").addClass("disabled"); else $next.removeAttr("disabled").removeClass("disabled");
                    if (index === 0) $prev.attr("disabled", "disabled").addClass("disabled"); else $prev.removeAttr("disabled").removeClass("disabled");
                }
            };
            LightGallery.prototype.setTranslate = function($el, xValue, yValue, scaleX, scaleY) {
                if (scaleX === void 0) scaleX = 1;
                if (scaleY === void 0) scaleY = 1;
                $el.css("transform", "translate3d(" + xValue + "px, " + yValue + "px, 0px) scale3d(" + scaleX + ", " + scaleY + ", 1)");
            };
            LightGallery.prototype.mousewheel = function() {
                var _this = this;
                var lastCall = 0;
                this.outer.on("wheel.lg", (function(e) {
                    if (!e.deltaY || _this.galleryItems.length < 2) return;
                    e.preventDefault();
                    var now = (new Date).getTime();
                    if (now - lastCall < 1e3) return;
                    lastCall = now;
                    if (e.deltaY > 0) _this.goToNextSlide(); else if (e.deltaY < 0) _this.goToPrevSlide();
                }));
            };
            LightGallery.prototype.isSlideElement = function(target) {
                return target.hasClass("lg-outer") || target.hasClass("lg-item") || target.hasClass("lg-img-wrap");
            };
            LightGallery.prototype.isPosterElement = function(target) {
                var playButton = this.getSlideItem(this.index).find(".lg-video-play-button").get();
                return target.hasClass("lg-video-poster") || target.hasClass("lg-video-play-button") || playButton && playButton.contains(target.get());
            };
            LightGallery.prototype.toggleMaximize = function() {
                var _this = this;
                this.getElementById("lg-maximize").on("click.lg", (function() {
                    _this.$container.toggleClass("lg-inline");
                    _this.refreshOnResize();
                }));
            };
            LightGallery.prototype.invalidateItems = function() {
                for (var index = 0; index < this.items.length; index++) {
                    var element = this.items[index];
                    var $element = $LG(element);
                    $element.off("click.lgcustom-item-" + $element.attr("data-lg-id"));
                }
            };
            LightGallery.prototype.trapFocus = function() {
                var _this = this;
                this.$container.get().focus({
                    preventScroll: true
                });
                $LG(window).on("keydown.lg.global" + this.lgId, (function(e) {
                    if (!_this.lgOpened) return;
                    var isTabPressed = e.key === "Tab" || e.keyCode === 9;
                    if (!isTabPressed) return;
                    var focusableEls = utils.getFocusableElements(_this.$container.get());
                    var firstFocusableEl = focusableEls[0];
                    var lastFocusableEl = focusableEls[focusableEls.length - 1];
                    if (e.shiftKey) {
                        if (document.activeElement === firstFocusableEl) {
                            lastFocusableEl.focus();
                            e.preventDefault();
                        }
                    } else if (document.activeElement === lastFocusableEl) {
                        firstFocusableEl.focus();
                        e.preventDefault();
                    }
                }));
            };
            LightGallery.prototype.manageCloseGallery = function() {
                var _this = this;
                if (!this.settings.closable) return;
                var mousedown = false;
                this.getElementById("lg-close").on("click.lg", (function() {
                    _this.closeGallery();
                }));
                if (this.settings.closeOnTap) {
                    this.outer.on("mousedown.lg", (function(e) {
                        var target = $LG(e.target);
                        if (_this.isSlideElement(target)) mousedown = true; else mousedown = false;
                    }));
                    this.outer.on("mousemove.lg", (function() {
                        mousedown = false;
                    }));
                    this.outer.on("mouseup.lg", (function(e) {
                        var target = $LG(e.target);
                        if (_this.isSlideElement(target) && mousedown) if (!_this.outer.hasClass("lg-dragging")) _this.closeGallery();
                    }));
                }
            };
            LightGallery.prototype.closeGallery = function(force) {
                var _this = this;
                if (!this.lgOpened || !this.settings.closable && !force) return 0;
                this.LGel.trigger(lGEvents.beforeClose);
                if (this.settings.resetScrollPosition && !this.settings.hideScrollbar) $LG(window).scrollTop(this.prevScrollTop);
                var currentItem = this.items[this.index];
                var transform;
                if (this.zoomFromOrigin && currentItem) {
                    var _a = this.mediaContainerPosition, top_4 = _a.top, bottom = _a.bottom;
                    var _b = this.galleryItems[this.index], __slideVideoInfo = _b.__slideVideoInfo, poster = _b.poster;
                    var imageSize = utils.getSize(currentItem, this.outer, top_4 + bottom, __slideVideoInfo && poster && this.settings.videoMaxSize);
                    transform = utils.getTransform(currentItem, this.outer, top_4, bottom, imageSize);
                }
                if (this.zoomFromOrigin && transform) {
                    this.outer.addClass("lg-closing lg-zoom-from-image");
                    this.getSlideItem(this.index).addClass("lg-start-end-progress").css("transition-duration", this.settings.startAnimationDuration + "ms").css("transform", transform);
                } else {
                    this.outer.addClass("lg-hide-items");
                    this.outer.removeClass("lg-zoom-from-image");
                }
                this.destroyModules();
                this.lGalleryOn = false;
                this.isDummyImageRemoved = false;
                this.zoomFromOrigin = this.settings.zoomFromOrigin;
                clearTimeout(this.hideBarTimeout);
                this.hideBarTimeout = false;
                $LG("html").removeClass("lg-on");
                this.outer.removeClass("lg-visible lg-components-open");
                this.$backdrop.removeClass("in").css("opacity", 0);
                var removeTimeout = this.zoomFromOrigin && transform ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration) : this.settings.backdropDuration;
                this.$container.removeClass("lg-show-in");
                setTimeout((function() {
                    if (_this.zoomFromOrigin && transform) _this.outer.removeClass("lg-zoom-from-image");
                    _this.$container.removeClass("lg-show");
                    _this.resetScrollBar();
                    _this.$backdrop.removeAttr("style").css("transition-duration", _this.settings.backdropDuration + "ms");
                    _this.outer.removeClass("lg-closing " + _this.settings.startClass);
                    _this.getSlideItem(_this.index).removeClass("lg-start-end-progress");
                    _this.$inner.empty();
                    if (_this.lgOpened) _this.LGel.trigger(lGEvents.afterClose, {
                        instance: _this
                    });
                    if (_this.$container.get()) _this.$container.get().blur();
                    _this.lgOpened = false;
                }), removeTimeout + 100);
                return removeTimeout + 100;
            };
            LightGallery.prototype.initModules = function() {
                this.plugins.forEach((function(module) {
                    try {
                        module.init();
                    } catch (err) {
                        console.warn("lightGallery:- make sure lightGallery module is properly initiated");
                    }
                }));
            };
            LightGallery.prototype.destroyModules = function(destroy) {
                this.plugins.forEach((function(module) {
                    try {
                        if (destroy) module.destroy(); else module.closeGallery && module.closeGallery();
                    } catch (err) {
                        console.warn("lightGallery:- make sure lightGallery module is properly destroyed");
                    }
                }));
            };
            LightGallery.prototype.refresh = function(galleryItems) {
                if (!this.settings.dynamic) this.invalidateItems();
                if (galleryItems) this.galleryItems = galleryItems; else this.galleryItems = this.getItems();
                this.updateControls();
                this.openGalleryOnItemClick();
                this.LGel.trigger(lGEvents.updateSlides);
            };
            LightGallery.prototype.updateControls = function() {
                this.addSlideVideoInfo(this.galleryItems);
                this.updateCounterTotal();
                this.manageSingleSlideClassName();
            };
            LightGallery.prototype.destroyGallery = function() {
                this.destroyModules(true);
                if (!this.settings.dynamic) this.invalidateItems();
                $LG(window).off(".lg.global" + this.lgId);
                this.LGel.off(".lg");
                this.$container.remove();
            };
            LightGallery.prototype.destroy = function() {
                var closeTimeout = this.closeGallery(true);
                if (closeTimeout) setTimeout(this.destroyGallery.bind(this), closeTimeout); else this.destroyGallery();
                return closeTimeout;
            };
            return LightGallery;
        }();
        function lightGallery(el, options) {
            return new LightGallery(el, options);
        }
        const lightgallery_es5 = lightGallery;
        var lg_fullscreen_min = __webpack_require__(801);
        function initGallery() {
            const galleries = document.querySelectorAll("[data-gallery]");
            if (galleries.length) {
                let galleryItems = [];
                galleries.forEach((gallery => {
                    galleryItems.push({
                        gallery,
                        galleryClass: lightgallery_es5(gallery, {
                            plugins: [ lg_fullscreen_min ],
                            licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
                            speed: 500,
                            download: false,
                            mobileSettings: {
                                controls: true,
                                showCloseIcon: true,
                                download: false
                            }
                        })
                    });
                }));
                flsModules.gallery = galleryItems;
            }
        }
        window.addEventListener("load", (function(e) {
            initGallery();
        }));
        class DynamicAdapt {
            constructor(type) {
                this.type = type;
            }
            init() {
                this.objects = [];
                this.daClassname = "_dynamic_adapt_";
                this.nodes = [ ...document.querySelectorAll("[data-da]") ];
                this.nodes.forEach((node => {
                    const data = node.dataset.da.trim();
                    const dataArray = data.split(",");
                    const object = {};
                    object.element = node;
                    object.parent = node.parentNode;
                    object.destination = document.querySelector(`${dataArray[0].trim()}`);
                    object.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                    object.place = dataArray[2] ? dataArray[2].trim() : "last";
                    object.index = this.indexInParent(object.parent, object.element);
                    this.objects.push(object);
                }));
                this.arraySort(this.objects);
                this.mediaQueries = this.objects.map((({breakpoint}) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)).filter(((item, index, self) => self.indexOf(item) === index));
                this.mediaQueries.forEach((media => {
                    const mediaSplit = media.split(",");
                    const matchMedia = window.matchMedia(mediaSplit[0]);
                    const mediaBreakpoint = mediaSplit[1];
                    const objectsFilter = this.objects.filter((({breakpoint}) => breakpoint === mediaBreakpoint));
                    matchMedia.addEventListener("change", (() => {
                        this.mediaHandler(matchMedia, objectsFilter);
                    }));
                    this.mediaHandler(matchMedia, objectsFilter);
                }));
            }
            mediaHandler(matchMedia, objects) {
                if (matchMedia.matches) objects.forEach((object => {
                    this.moveTo(object.place, object.element, object.destination);
                })); else objects.forEach((({parent, element, index}) => {
                    if (element.classList.contains(this.daClassname)) this.moveBack(parent, element, index);
                }));
            }
            moveTo(place, element, destination) {
                element.classList.add(this.daClassname);
                if (place === "last" || place >= destination.children.length) {
                    destination.append(element);
                    return;
                }
                if (place === "first") {
                    destination.prepend(element);
                    return;
                }
                destination.children[place].before(element);
            }
            moveBack(parent, element, index) {
                element.classList.remove(this.daClassname);
                if (parent.children[index] !== void 0) parent.children[index].before(element); else parent.append(element);
            }
            indexInParent(parent, element) {
                return [ ...parent.children ].indexOf(element);
            }
            arraySort(arr) {
                if (this.type === "min") arr.sort(((a, b) => {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return -1;
                        if (a.place === "last" || b.place === "first") return 1;
                        return 0;
                    }
                    return a.breakpoint - b.breakpoint;
                })); else {
                    arr.sort(((a, b) => {
                        if (a.breakpoint === b.breakpoint) {
                            if (a.place === b.place) return 0;
                            if (a.place === "first" || b.place === "last") return 1;
                            if (a.place === "last" || b.place === "first") return -1;
                            return 0;
                        }
                        return b.breakpoint - a.breakpoint;
                    }));
                    return;
                }
            }
        }
        const da = new DynamicAdapt("max");
        da.init();
        let map;
        let directionsService;
        let directionsDisplay;
        let originMarker = null;
        let routeDurationOverlay = null;
        let openDrivingRouteButton = document.getElementById("openDrivingRoute");
        const originInput = document.getElementById("origin");
        const destination = new google.maps.LatLng(37.7749, -122.4194);
        const originAutocomplete = new google.maps.places.Autocomplete(originInput);
        const clearOriginInputButton = document.getElementById("clearOriginInput");
        const routeButton = document.getElementById("route-button");
        function initMap() {
            map = new google.maps.Map(document.getElementById("map"), {
                center: destination,
                zoom: 15,
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                styles: [ {
                    elementType: "geometry",
                    stylers: [ {
                        color: "#333333"
                    } ]
                }, {
                    elementType: "labels.icon",
                    stylers: [ {
                        visibility: "off"
                    } ]
                }, {
                    elementType: "labels.text.fill",
                    stylers: [ {
                        color: "#666666"
                    } ]
                }, {
                    elementType: "labels.text.stroke",
                    stylers: [ {
                        color: "#282828"
                    } ]
                }, {
                    featureType: "administrative.land_parcel",
                    elementType: "labels.text.fill",
                    stylers: [ {
                        color: "#666666"
                    } ]
                }, {
                    featureType: "administrative.land_parcel",
                    elementType: "labels.text.stroke",
                    stylers: [ {
                        color: "#282828"
                    } ]
                }, {
                    featureType: "poi",
                    elementType: "geometry",
                    stylers: [ {
                        color: "#333333"
                    } ]
                }, {
                    featureType: "poi",
                    elementType: "labels.text.fill",
                    stylers: [ {
                        color: "red"
                    } ]
                }, {
                    featureType: "poi",
                    elementType: "labels.text.stroke",
                    stylers: [ {
                        color: "#282828"
                    } ]
                }, {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [ {
                        color: "#333333"
                    } ]
                }, {
                    featureType: "poi.park",
                    elementType: "labels.text.fill",
                    stylers: [ {
                        color: "#666666"
                    } ]
                }, {
                    featureType: "poi.park",
                    elementType: "labels.text.stroke",
                    stylers: [ {
                        color: "#282828"
                    } ]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [ {
                        color: "#282828"
                    } ]
                }, {
                    featureType: "road.arterial",
                    elementType: "labels.text.fill",
                    stylers: [ {
                        color: "#666666"
                    } ]
                }, {
                    featureType: "road.arterial",
                    elementType: "labels.text.stroke",
                    stylers: [ {
                        color: "#282828"
                    } ]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [ {
                        color: "#2E2E2E"
                    } ]
                }, {
                    featureType: "road.highway",
                    elementType: "labels.text.fill",
                    stylers: [ {
                        color: "#666666"
                    } ]
                }, {
                    featureType: "road.highway",
                    elementType: "labels.text.stroke",
                    stylers: [ {
                        color: "#282828"
                    } ]
                }, {
                    featureType: "road.local",
                    elementType: "labels.text.fill",
                    stylers: [ {
                        color: "#666666"
                    } ]
                }, {
                    featureType: "road.local",
                    elementType: "labels.text.stroke",
                    stylers: [ {
                        color: "#282828"
                    } ]
                }, {
                    featureType: "transit.station",
                    elementType: "geometry",
                    stylers: [ {
                        color: "#282828"
                    } ]
                }, {
                    featureType: "transit.line",
                    elementType: "geometry",
                    stylers: [ {
                        color: "#333333"
                    } ]
                }, {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [ {
                        color: "#2B2B2B"
                    } ]
                }, {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [ {
                        color: "#666666"
                    } ]
                }, {
                    featureType: "water",
                    elementType: "labels.text.stroke",
                    stylers: [ {
                        color: "#282828"
                    } ]
                }, {
                    featureType: "landscape.natural",
                    elementType: "geometry",
                    stylers: [ {
                        color: "#333333"
                    } ]
                } ]
            });
            const marker = new google.maps.Marker({
                position: destination,
                map,
                icon: {
                    url: "../../img/icons/map-pin.svg"
                },
                animation: google.maps.Animation.DROP
            });
            map.addListener("zoom_changed", (function() {
                marker.setIcon({
                    url: "../../img/icons/map-pin.svg",
                    scaledSize: new google.maps.Size(50, 45)
                });
            }));
            const infoWindow = new google.maps.InfoWindow({
                content: "Renovations, Renovations Rd"
            });
            marker.addListener("mouseover", (function() {
                infoWindow.open(map, marker);
            }));
            marker.addListener("mouseout", (function() {
                infoWindow.close();
            }));
            directionsService = new google.maps.DirectionsService;
            directionsDisplay = new google.maps.DirectionsRenderer;
            directionsDisplay.setMap(map);
            map.addListener("click", (function(event) {
                if (originMarker) clearMap();
                originMarker = createMarker(event.latLng);
                calculateDrivingRoute(originMarker.getPosition());
            }));
        }
        function createMarker(location) {
            return new google.maps.Marker({
                position: location,
                map
            });
        }
        function calculateDrivingRoute(origin) {
            const request = {
                origin,
                destination,
                travelMode: google.maps.TravelMode.DRIVING
            };
            directionsService.route(request, (function(result, status) {
                if (status === "OK") {
                    directionsDisplay.setDirections(result);
                    displayRouteDuration(result.routes[0]);
                    openDrivingRouteButton.style.display = "block";
                } else alert("Unable to calculate a driving route.");
            }));
        }
        routeButton.onclick = function() {
            clearMap();
            const originPlace = originAutocomplete.getPlace();
            if (originPlace && originPlace.geometry) {
                originMarker = createMarker(originPlace.geometry.location);
                calculateDrivingRoute(originPlace.geometry.location);
            } else alert("Please select a valid starting point.");
        };
        clearOriginInputButton.addEventListener("click", (function() {
            originInput.value = "";
            clearOriginInputButton.style.display = "none";
        }));
        originInput.addEventListener("input", (function() {
            if (originInput.value.trim() !== "") clearOriginInputButton.style.display = "block"; else clearOriginInputButton.style.display = "none";
        }));
        function displayRouteDuration(route) {
            const duration = route.legs[0].duration.text;
            if (routeDurationOverlay) routeDurationOverlay.setMap(null);
            routeDurationOverlay = new CustomOverlay(map, duration, originMarker.getPosition());
            routeDurationOverlay.setMap(map);
        }
        openDrivingRouteButton.onclick = function() {
            const originStr = originMarker.getPosition().toUrlValue();
            const url = `https://www.google.com/maps/dir/?api=1&origin=${originStr}&destination=${destination}&travelmode=driving`;
            window.open(url);
        };
        function clearMap() {
            if (originMarker) {
                originMarker.setMap(null);
                originMarker = null;
            }
            directionsDisplay.setDirections({
                routes: []
            });
            if (routeDurationOverlay) routeDurationOverlay.setMap(null);
            openDrivingRouteButton.style.display = "none";
        }
        function CustomOverlay(map, content, position) {
            this.content = content;
            this.position = position;
            this.setMap(map);
        }
        CustomOverlay.prototype = new google.maps.OverlayView;
        CustomOverlay.prototype.onAdd = function() {
            this.container = document.createElement("div");
            this.container.className = "travel-duration";
            this.container.innerHTML = this.content;
            this.getPanes().floatPane.appendChild(this.container);
        };
        CustomOverlay.prototype.draw = function() {
            const projection = this.getProjection();
            const position = projection.fromLatLngToDivPixel(this.position);
            this.container.style.left = position.x + "px";
            this.container.style.top = position.y + "px";
        };
        CustomOverlay.prototype.onRemove = function() {
            this.container.parentNode.removeChild(this.container);
            this.container = null;
        };
        initMap();
        const menuButtons = document.querySelectorAll(".menu__button");
        const buttonsContainer = document.querySelector(".menu__buttons");
        function switchButton(newButton) {
            const oldButton = buttonsContainer.querySelector(".menu__button.active");
            menuButtons.forEach((button => {
                button.classList.remove("active");
            }));
            newButton.classList.add("active");
            moveIndicator(oldButton, newButton);
        }
        function moveIndicator(oldButton, newButton) {
            const newButtonPosition = oldButton.compareDocumentPosition(newButton);
            const newButtonWidth = newButton.offsetWidth / buttonsContainer.offsetWidth;
            let transitionWidth;
            if (newButtonPosition === 4) transitionWidth = newButton.offsetLeft + newButton.offsetWidth - oldButton.offsetLeft; else {
                transitionWidth = oldButton.offsetLeft + oldButton.offsetWidth - newButton.offsetLeft;
                buttonsContainer.style.setProperty("--_left", newButton.offsetLeft + "px");
            }
            buttonsContainer.style.setProperty("--_width", transitionWidth / buttonsContainer.offsetWidth);
            setTimeout((() => {
                buttonsContainer.style.setProperty("--_left", newButton.offsetLeft + "px");
                buttonsContainer.style.setProperty("--_width", newButtonWidth);
            }), 600);
        }
        const tagMain = document.querySelector(".main");
        const header = document.querySelector(".header");
        const templateHome = `<section class="main__start-screen start-screen">\n<div data-fullscreen class="start-screen__container">\n    <div class="start-screen__about">\n        <h1 class="start-screen__title">Renovation Experts<br> From San Francisco</h1>\n        <div class="start-screen__text">\n            <p>\n                We Are Your Source for Home Renovations in San Francisco Since the Beginning of\n                Time\n            </p>\n        </div>\n        <button data-goto="main" data-template-about-us data-ripple="once" class="start-screen__button button button_about">\n            Learn more about us\n            <svg width="11" height="6" viewBox="0 0 11 6" fill="none">\n                <path\n                    d="M5.13843 5.39451L0.525925 1.11238C0.374891 0.972083 0.375145 0.744936 0.526706 0.604872C0.678249 0.464917 0.923736 0.465278 1.07489 0.605595L5.41286 4.63284L9.75081 0.605451C9.90198 0.465152 10.1473 0.464791 10.2989 0.604728C10.3749 0.674941 10.4128 0.766924 10.4128 0.858908C10.4128 0.950656 10.3751 1.04228 10.2997 1.11236L5.68727 5.39451C5.61466 5.46208 5.51583 5.5 5.41286 5.5C5.30989 5.5 5.21118 5.46197 5.13843 5.39451Z"\n                    fill="white" />\n            </svg>\n        </button>\n    </div>\n    <div class="start-screen__call call">\n        <div class="call__heading">\n            <div class="call__time">30 <span>sec.</span></div>\n            <div class="call__text">\n                <p>\n                    This time we need to call you back and provide a <strong>free consultation</strong>\n                    on\n                    any\n                    issues\n                </p>\n            </div>\n        </div>\n        <form data-dev data-popup-message="#form-message" action="files/sendmail/sendmail.php"\n            method="POST" class="call__form form form_call">\n            <div class="form__text">\n                <p>\n                    *We guarantee that your data will not be transferred to third parties\n                </p>\n            </div>\n            <div class="form__column form__column_minimize">\n                <div class="form__rows">\n                    <div class="form__row">\n                        <input id="name-start-screen" type="text" name="name"\n                            placeholder="How to call you?" class="form__input">\n                        <label for="name-start-screen" class="form__label">How to call you?</label>\n                    </div>\n                    <div class="form__row">\n                        <input id="email-start-screen" type="email" name="email"\n                            placeholder="Your Email" class="form__input">\n                        <label for="email-start-screen" class="form__label">Your Email</label>\n                    </div>\n                    <div class="form__row">\n                        <input id="tel-start-screen" type="tel" name="phone"\n                            placeholder="Your contact phone" pattern="d{1,}"\n                            data-error="This field must be filled!" data-required class="form__input">\n                        <label for="tel-start-screen" class="form__label">Your contact phone</label>\n                    </div>\n                </div>\n            </div>\n            <button type="submit" data-ripple="once" class="form__button button button_low">\n                book a call now\n            </button>\n        </form>\n    </div>\n    <div class="start-screen__image">\n        <img src="img/a-bedroom-with-a-large-bed.jpeg" loading="lazy" alt="A bedroom with a large bed">\n    </div>\n</div>\n</section>\n<section class="main__about-us about-us">\n<div class="about-us__container">\n    <h2 class="about-us__headline headline">ABOUT US</h2>\n    <div class="about-us__content">\n        <div class="about-us__heading heading">\n            <h3 data-watch data-watch-once\n                class="heading__title title title_decor title_color-changeable">An Industry-Leading\n                Team</h3>\n            <div class="heading__subtitle subtitle">\n                <p>\n                    Improve the appearance, energy-efficiency and overall value of your home by turning\n                    to the experts at Home Renovations in San Francisco\n                </p>\n            </div>\n        </div>\n        <div class="about-us__body">\n            <article class="about-us__card card">\n                <div class="card__wrapper">\n                    <div data-watch data-watch-once class="card__icon">\n                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">\n                            <path\n                                d="M32.0833 20.1667C25.5127 20.1667 20.1667 25.5127 20.1667 32.0833C20.1667 38.654 25.5127 44 32.0833 44C38.654 44 44 38.654 44 32.0833C44 25.5127 38.654 20.1667 32.0833 20.1667ZM32.0833 42.1667C26.5247 42.1667 22 37.6438 22 32.0833C22 26.5228 26.5247 22 32.0833 22C37.642 22 42.1667 26.5228 42.1667 32.0833C42.1667 37.6438 37.642 42.1667 32.0833 42.1667ZM34.5657 33.2677C34.9232 33.6252 34.9232 34.2063 34.5657 34.5638C34.386 34.7435 34.1513 34.8315 33.9167 34.8315C33.682 34.8315 33.4473 34.7417 33.2677 34.5638L31.4343 32.7305C31.262 32.5582 31.1667 32.3253 31.1667 32.0815V28.4148C31.1667 27.9088 31.5773 27.4982 32.0833 27.4982C32.5893 27.4982 33 27.9088 33 28.4148V31.702L34.5657 33.2677ZM35.75 7.33333H32.032C31.5737 3.21383 28.072 0 23.8333 0H19.25C15.0113 0 11.5078 3.21383 11.0513 7.33333H8.25C3.7015 7.33333 0 11.0348 0 15.5833V35.75C0 40.2985 3.7015 44 8.25 44H19.25C19.756 44 20.1667 43.5893 20.1667 43.0833C20.1667 42.5773 19.756 42.1667 19.25 42.1667H8.25C4.71167 42.1667 1.83333 39.2883 1.83333 35.75V23.8333H17.4167C17.9227 23.8333 18.3333 23.4227 18.3333 22.9167C18.3333 22.4107 17.9227 22 17.4167 22H1.83333V15.5833C1.83333 12.045 4.71167 9.16667 8.25 9.16667H35.75C39.2883 9.16667 42.1667 12.045 42.1667 15.5833V19.25C42.1667 19.756 42.5773 20.1667 43.0833 20.1667C43.5893 20.1667 44 19.756 44 19.25V15.5833C44 11.0348 40.2985 7.33333 35.75 7.33333ZM19.25 1.83333H23.8333C27.06 1.83333 29.7385 4.22767 30.184 7.33333H12.8993C13.3448 4.22767 16.0233 1.83333 19.25 1.83333Z"\n                                fill="url(#paint0_linear_55_58)" />\n                            <defs>\n                                <linearGradient id="paint0_linear_55_58" x1="3.06977" y1="41.4437"\n                                    x2="44" y2="0.00181039" gradientUnits="userSpaceOnUse">\n                                    <stop offset="0%" stop-color="#BCA36B" />\n                                    <stop offset="100%" stop-color="#DCC696" />\n                                </linearGradient>\n                            </defs>\n                        </svg>\n                    </div>\n                    <h4 class="card__title title title_card title_color-changeable">Experience</h4>\n                    <div class="card__text">\n                        <p>\n                            Improve the appearance, energy-efficiency and overall value of your home by\n                            turning\n                            to the experts at Home Renovations in San Francisco\n                        </p>\n                    </div>\n                </div>\n            </article>\n            <article class="about-us__card card">\n                <div class="card__wrapper">\n                    <div data-watch data-watch-once class="card__icon">\n                        <svg width="33" height="43" viewBox="0 0 33 43" fill="none">\n                            <path\n                                d="M27.4754 4.08106C23.9695 1.0261 19.2609 -0.421646 14.5485 0.106925C7.22699 0.927554 1.17612 6.69166 0.162144 13.8086C-0.6098 19.2089 1.40532 24.5771 5.55108 28.166C7.84674 30.153 9.16326 33.0485 9.16326 36.1053V36.7288C9.16326 40.1869 12.042 43 15.5808 43H17.4144C20.9533 43 23.832 40.1869 23.832 36.7288V36.0963C23.832 33.0754 25.2109 30.1674 27.7156 27.9062C31.0729 24.8709 33 20.5761 33 16.1235C33 11.5312 30.9867 7.1414 27.4754 4.08106ZM21.9984 36.727C21.9984 39.1961 19.943 41.2064 17.4144 41.2064H15.5808C13.0523 41.2064 10.9969 39.1961 10.9969 36.727V36.1035C10.9969 35.4065 10.9363 34.7149 10.8227 34.0394H22.1818C22.0608 34.7149 21.9984 35.4011 21.9984 36.0945V36.727ZM26.4706 26.5892C24.6608 28.2233 23.3626 30.1602 22.6439 32.2476H10.3771C9.69134 30.1674 8.45549 28.2878 6.76675 26.8239C3.08123 23.6346 1.29164 18.8613 1.9774 14.0558C2.8777 7.73447 8.25197 2.61719 14.7557 1.88615C15.348 1.81985 15.9366 1.7876 16.5196 1.7876C20.1282 1.7876 23.5331 3.04721 26.2579 5.41951C29.3768 8.13941 31.1682 12.0401 31.1682 16.1217C31.1682 20.1353 29.5015 23.8532 26.4724 26.5892H26.4706ZM15.5808 20.6011V8.05878C15.5808 7.56425 15.9916 7.1629 16.4976 7.1629C17.0037 7.1629 17.4144 7.56425 17.4144 8.05878V20.6011C17.4144 21.0957 17.0037 21.497 16.4976 21.497C15.9916 21.497 15.5808 21.0957 15.5808 20.6011ZM18.3312 26.8723C18.3312 27.8614 17.5098 28.6641 16.4976 28.6641C15.4855 28.6641 14.664 27.8614 14.664 26.8723C14.664 25.8833 15.4855 25.0806 16.4976 25.0806C17.5098 25.0806 18.3312 25.8833 18.3312 26.8723Z"\n                                fill="url(#paint0_linear_55_65)" />\n                            <defs>\n                                <linearGradient id="paint0_linear_55_65" x1="2.30233" y1="40.5018"\n                                    x2="41.0654" y2="10.3815" gradientUnits="userSpaceOnUse">\n                                    <stop offset="0%" stop-color="#BCA36B" />\n                                    <stop offset="100%" stop-color="#DCC696" />\n                                </linearGradient>\n                            </defs>\n                        </svg>\n                    </div>\n                    <h4 class="card__title title title_card title_color-changeable">Innovative</h4>\n                    <div class="card__text">\n                        <p>\n                            Improve the appearance, energy-efficiency and overall value of your home by\n                            turning\n                            to the experts at Home Renovations in San Francisco\n                        </p>\n                    </div>\n                </div>\n            </article>\n            <article class="about-us__card card">\n                <div class="card__wrapper">\n                    <div data-watch data-watch-once class="card__icon">\n                        <svg width="41" height="43" viewBox="0 0 41 43" fill="none">\n                            <path\n                                d="M26.7709 43.0001C26.2764 43.0001 25.8751 42.5988 25.8751 42.1043V39.071C25.8751 36.7669 27.0701 34.6903 28.9944 33.6512C34.8065 30.5158 38.4167 24.4707 38.4167 17.8755C38.4167 11.0815 34.6471 4.95405 28.5823 1.88492C28.3135 1.74696 28.0735 1.85984 27.9839 1.91538C27.8871 1.9745 27.6667 2.1465 27.6667 2.47438V14.3352C27.6667 18.2876 24.4525 21.5019 20.5001 21.5019C16.5477 21.5019 13.3334 18.2876 13.3334 14.3352V2.47259C13.3334 2.14471 13.113 1.9745 13.0163 1.91359C12.9285 1.85984 12.6866 1.74517 12.4179 1.88313C6.35308 4.95404 2.58341 11.0815 2.58341 17.8755C2.58341 24.4707 6.19362 30.5158 12.0058 33.6512C13.93 34.6903 15.1251 36.7669 15.1251 39.071V42.1043C15.1251 42.5988 14.7237 43.0001 14.2292 43.0001C13.7347 43.0001 13.3334 42.5988 13.3334 42.1043V39.071C13.3334 37.4262 12.4985 35.9535 11.1547 35.2278C4.76387 31.7789 0.791748 25.1282 0.791748 17.8738C0.791748 10.4025 4.93587 3.66225 11.6098 0.284962C12.3552 -0.0912881 13.2349 -0.0518715 13.9569 0.388878C14.6879 0.838587 15.1251 1.61975 15.1251 2.47259V14.3334C15.1251 17.2968 17.5367 19.7084 20.5001 19.7084C23.4635 19.7084 25.8751 17.2968 25.8751 14.3334V2.47259C25.8751 1.61796 26.3123 0.838587 27.0432 0.388878C27.7653 -0.0536631 28.645 -0.0930798 29.3903 0.284962C36.0643 3.66225 40.2084 10.4007 40.2084 17.8738C40.2084 25.1282 36.2363 31.7789 29.8454 35.2278C28.5017 35.9517 27.6667 37.4262 27.6667 39.071V42.1043C27.6667 42.5988 27.2654 43.0001 26.7709 43.0001Z"\n                                fill="url(#paint0_linear_55_72)" />\n                            <defs>\n                                <linearGradient id="paint0_linear_55_72" x1="3.54175" y1="40.5034"\n                                    x2="43.4108" y2="3.47688" gradientUnits="userSpaceOnUse">\n                                    <stop offset="0%" stop-color="#BCA36B" />\n                                    <stop offset="100%" stop-color="#DCC696" />\n                                </linearGradient>\n                            </defs>\n                        </svg>\n                    </div>\n                    <h4 class="card__title title title_card title_color-changeable">Service</h4>\n                    <div class="card__text">\n                        <p>\n                            Improve the appearance, energy-efficiency and overall value of your home by\n                            turning\n                            to the experts at Home Renovations in San Francisco\n                        </p>\n                    </div>\n                </div>\n            </article>\n            <article class="about-us__card card">\n                <div class="card__wrapper">\n                    <div data-watch data-watch-once class="card__icon">\n                        <svg width="43" height="43" viewBox="0 0 43 43" fill="none">\n                            <path\n                                d="M26.7913 16.8095L26.0603 14.5485L27.9827 13.142C28.7711 12.5687 29.0846 11.5976 28.7818 10.6713C28.5059 9.81845 27.748 8.96025 26.6802 8.96025H24.308L23.6057 6.91237C23.3065 5.97891 22.4805 5.37691 21.4987 5.37691C20.5169 5.37691 19.6909 5.98071 19.3989 6.89625L18.6894 8.96025H16.319C15.2529 8.96025 14.4951 9.81845 14.2156 10.6713C13.9146 11.5976 14.2281 12.5669 15.0129 13.1402L16.9371 14.5485L16.2079 16.8095C15.9051 17.743 16.2258 18.7123 17.0177 19.2838C17.7971 19.8464 18.8434 19.8428 19.621 19.2731L21.4987 17.8917L23.3764 19.2713C23.7723 19.5633 24.2292 19.7085 24.6843 19.7085C25.134 19.7085 25.5837 19.5687 25.9779 19.2856C26.7698 18.7159 27.0887 17.7448 26.7895 16.8095H26.7913ZM24.9333 17.829C24.7667 17.9508 24.6001 17.949 24.4388 17.829L22.0308 16.0606C21.8732 15.946 21.6868 15.8868 21.5005 15.8868C21.3142 15.8868 21.1278 15.9442 20.9702 16.0606L18.5622 17.829C18.4081 17.9401 18.2182 17.9419 18.0677 17.829C17.9028 17.7125 17.8509 17.5549 17.9136 17.3596L18.8434 14.4822C18.9617 14.1149 18.8327 13.7117 18.5192 13.4842L16.0717 11.6943C15.9087 11.5761 15.8585 11.4166 15.9194 11.2267C16.0144 10.94 16.224 10.7501 16.3208 10.7501H19.3326C19.716 10.7501 20.0546 10.5065 20.18 10.1445L21.1045 7.45704C21.2264 7.07183 21.7728 7.05391 21.909 7.47496L22.8245 10.1445C22.9482 10.5065 23.2886 10.7501 23.672 10.7501H26.6856C26.7823 10.7501 26.9902 10.9382 27.0851 11.2267C27.146 11.4166 27.0959 11.5743 26.9328 11.6943L24.4854 13.4842C24.1719 13.7117 24.0429 14.1149 24.1611 14.484L25.091 17.3578C25.1537 17.5531 25.1035 17.7107 24.9387 17.829H24.9333ZM26.9167 28.6471C38.7722 28.33 43.0005 22.0305 43.0005 16.6859C43.0005 13.7673 40.8774 11.3467 38.0967 10.8558C38.5357 9.81487 38.9029 8.8205 39.1645 7.93541C39.7164 6.07208 39.358 4.10125 38.1845 2.52996C36.9841 0.92283 35.1458 0.00012207 33.1427 0.00012207H9.85465C7.85157 0.00012207 6.01153 0.92283 4.8129 2.52996C3.63936 4.10125 3.28282 6.07208 3.83286 7.93541C4.09445 8.8187 4.46174 9.81487 4.9007 10.8558C2.12182 11.3485 0.000488281 13.7691 0.000488281 16.6859C0.000488281 22.0305 4.22703 28.33 16.0843 28.6471C16.104 28.9033 16.1255 29.1595 16.1255 29.4193V36.7293C16.1255 41.0508 12.1014 41.2049 11.6427 41.2085H9.85465C9.36016 41.2085 8.95882 41.6098 8.95882 42.1043C8.95882 42.5988 9.36016 43.0001 9.85465 43.0001H33.1463C33.6408 43.0001 34.0422 42.5988 34.0422 42.1043C34.0422 41.6098 33.6408 41.2085 33.1463 41.2085H31.3582C30.8996 41.2049 26.8755 41.0508 26.8755 36.7293V29.4193C26.8755 29.1595 26.897 28.9033 26.9167 28.6471ZM41.2088 16.6859C41.2088 21.3855 37.5072 26.4505 27.2302 26.8393C27.7373 24.958 28.7818 23.2595 30.2832 21.9821C33.3631 19.3627 35.7174 15.8241 37.3119 12.5669C39.4799 12.6977 41.2088 14.484 41.2088 16.6859ZM1.79215 16.6859C1.79215 14.4875 3.51753 12.7012 5.68365 12.5687C7.28003 15.8259 9.63428 19.3609 12.7159 21.9821C14.2174 23.2595 15.2619 24.958 15.7707 26.8393C5.49374 26.4505 1.79215 21.3855 1.79215 16.6859ZM16.1595 41.2102C17.1682 40.241 17.9172 38.8255 17.9172 36.7311V29.4211C17.9172 26.0115 16.4462 22.8027 13.8787 20.6186C9.51065 16.9081 6.6637 11.1927 5.55107 7.43016C5.16049 6.11329 5.4167 4.71758 6.24803 3.60495C7.10803 2.45291 8.42311 1.79358 9.85645 1.79358H33.1427C34.5761 1.79358 35.8894 2.45291 36.7512 3.60495C37.5825 4.71758 37.8369 6.1115 37.4481 7.43016C36.3355 11.1962 33.4867 16.9099 29.124 20.6186C26.5566 22.8027 25.0856 26.0115 25.0856 29.4211V36.7311C25.0856 38.8255 25.8345 40.241 26.8432 41.2102H16.1631H16.1595Z"\n                                fill="url(#paint0_linear_55_79)" />\n                            <defs>\n                                <linearGradient id="paint0_linear_55_79" x1="3.00049" y1="40.5019"\n                                    x2="43.0005" y2="0.00189131" gradientUnits="userSpaceOnUse">\n                                    <stop offset="0%" stop-color="#BCA36B" />\n                                    <stop offset="100%" stop-color="#DCC696" />\n                                </linearGradient>\n                            </defs>\n                        </svg>\n                    </div>\n                    <h4 class="card__title title title_card title_color-changeable">Results</h4>\n                    <div class="card__text">\n                        <p>\n                            Improve the appearance, energy-efficiency and overall value of your home by\n                            turning\n                            to the experts at Home Renovations in San Francisco\n                        </p>\n                    </div>\n                </div>\n            </article>\n        </div>\n    </div>\n</div>\n</section>\n<section class="main__work work">\n<div class="work__container">\n    <div class="work__titles">\n        <h2 class="work__headline headline">OUR WORK</h2>\n        <h3 data-watch data-watch-once class="work__title title title_decor">Watch a short video</h3>\n    </div>\n</div>\n<button data-popup="#video-popup" class="work__video-button">Play\n    <img src="img/facade-of-a-house-with-many-large-windows.jpeg" loading="lazy"\n        alt="Facade of a house with many large windows">\n    <svg data-watch data-watch-once width="113" height="113" viewBox="0 0 113 113" fill="none">\n        <rect x="1" y="1" width="111" height="111" stroke="white" stroke-width="2" />\n        <path d="M70 57L50.5 69.9904L50.5 44.0096L70 57Z" fill="#BCA36B" />\n    </svg>\n</button>\n</section>\n<section class="main__achievements achievements">\n<div class="achievements__container">\n    <div class="achievements__body">\n        <h2 class="achievements__headline headline">our achievements</h2>\n        <h3 data-watch data-watch-once\n            class="achievements__title title title_decor title_color-changeable">An Industry-Leading\n            Team</h3>\n        <div class="achievements__text">\n            <p>\n                Our company began with simple renovation projects, such as siding, windows,\n                and\n                doors. As our reputation grew for superior home renovations in San Francisco, our list\n                of\n                services grew as well.\n            </p>\n            <p>\n                Today, we proudly offer a large range of home improvement services with products\n                sourced\n                from leading manufacturers.\n            </p>\n        </div>\n        <div data-watch data-watch-once class="achievements__in-numbers in-numbers">\n            <div class="in-numbers__column">\n                <div class="in-numbers__amount">\n                    <div data-digits-counter class="in-numbers__num">2</div>\n                    <div class="in-numbers__string">K+</div>\n                </div>\n                <div class="in-numbers__text">Completed renovations</div>\n            </div>\n            <div class="in-numbers__column">\n                <div class="in-numbers__amount">\n                    <div data-digits-counter class="in-numbers__num">35</div>\n                    <div class="in-numbers__string">+</div>\n                </div>\n                <div class="in-numbers__text">Years in business</div>\n            </div>\n            <div class="in-numbers__column">\n                <div class="in-numbers__amount">\n                    <div data-digits-counter class="in-numbers__num">2000</div>\n                    <div class="in-numbers__string">+</div>\n                </div>\n                <div class="in-numbers__text">Happy clients</div>\n            </div>\n        </div>\n        <button data-goto="main" data-template-portfolio data-ripple="once"\n            class="achievements__button button button_cases">Learn our best\n            cases</button>\n    </div>\n    <div data-watch data-watch-once class="achievements__images">\n        <div class="achievements__image achievements__image_top">\n            <img src="img/a-bedroom-with-a-large-bed.jpeg" loading="lazy"\n                alt="A bedroom with a large bed">\n        </div>\n        <div class="achievements__image achievements__image_bottom">\n            <img src="img/living-room-with-stairs.jpg" loading="lazy" alt="Living room with stairs">\n        </div>\n    </div>\n</div>\n</section>\n<section class="main__services services">\n<div class="services__container">\n    <div class="services__titles">\n        <h2 class="services__headline headline">OUR Services</h2>\n        <h3 data-watch data-watch-once class="services__title title title_decor">What we do for you</h3>\n    </div>\n    <div class="services__buttons buttons-slider">\n        <button aria-label="Previous slide" type="button" class="services__swiper-button-prev swiper-button-prev">\n            <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                <path\n                    d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                    fill="white" />\n            </svg>\n        </button>\n        <button aria-label="Next slide" type="button" class="services__swiper-button-next swiper-button-next">\n            <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                <path\n                    d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                    fill="white" />\n            </svg>\n        </button>\n    </div>\n</div>\n<div class="services__slider swiper">\n    <div class="services__wrapper swiper-wrapper">\n        <article class="services__slide slide-services swiper-slide">\n            <div data-ripple="once" data-template-services data-goto-top="120" data-goto="#remodeling-block"\n                class="slide-services__card card-slide">\n                <h4 class="card-slide__title title">Exquisite Remodeling</h4>\n                <div class="card-slide__text">\n                    <p>\n                        Home Renovations provides affordable window option for San Francisco\n                        homeowners.\n                    </p>\n                </div>\n            </div>\n            <div data-gallery class="slide-services__gallery">\n                <a href="img/kitchen-with-dark-walls.jpg" class="slide-services__image">\n                    <img src="img/kitchen-with-dark-walls.jpg" loading="lazy"\n                        alt="Kitchen with dark walls">\n                </a>\n            </div>\n        </article>\n        <article class="services__slide slide-services swiper-slide">\n            <div data-ripple="once" data-template-services data-goto-top="120" data-goto="#renovations-block"\n                class="slide-services__card card-slide">\n                <h4 class="card-slide__title title">Seamless Renovations</h4>\n                <div class="card-slide__text">\n                    <p>\n                        Experience a hassle-free renovation process with our team of skilled\n                        professionals. We handle every aspect, from planning to completion, ensuring a\n                        seamless transformation that exceeds your expectations.\n                    </p>\n                </div>\n            </div>\n            <div data-gallery class="slide-services__gallery">\n                <a href="img/two-men-work-with-a-blueprint.jpeg" class="slide-services__image">\n                    <img src="img/two-men-work-with-a-blueprint.jpeg" loading="lazy"\n                        alt="Two men work with a blueprint">\n                </a>\n            </div>\n        </article>\n        <article class="services__slide slide-services swiper-slide">\n            <div data-ripple="once" data-template-services data-goto-top="120" data-goto="#interiors-block"\n                class="slide-services__card card-slide">\n                <h4 class="card-slide__title title">Customized Interiors</h4>\n                <div class="card-slide__text">\n                    <p>\n                        Elevate your living spaces with our tailored interior solutions. Whether it's a\n                        cozy den or a grand entertainment area, we design and craft luxurious interiors\n                        that reflect your unique taste and lifestyle.\n                    </p>\n                </div>\n            </div>\n            <div data-gallery class="slide-services__gallery">\n                <a href="img/living-room-with-a-large-corner-sofa.jpg" class="slide-services__image">\n                    <img src="img/living-room-with-a-large-corner-sofa.jpg" loading="lazy"\n                        alt="Living room with a large corner sofa">\n                </a>\n            </div>\n        </article>\n        <article class="services__slide slide-services swiper-slide">\n            <div data-ripple="once" data-template-services data-goto-top="120" data-goto="#basement-block"\n                class="slide-services__card card-slide">\n                <h4 class="card-slide__title title">Masterful Basement Conversions</h4>\n                <div class="card-slide__text">\n                    <p>\n                        Unlock the hidden potential of your basement with our expert conversion\n                        services. From legal and fully functional rental units to captivating\n                        entertainment spaces, we create stunning environments that maximize your\n                        property's value.\n                    </p>\n                </div>\n            </div>\n            <div data-gallery class="slide-services__gallery">\n                <a href="img/a-room-with-a-brown-leather-sofa-and-a-spiral-metal-staircase.jpg"\n                    class="slide-services__image">\n                    <img src="img/a-room-with-a-brown-leather-sofa-and-a-spiral-metal-staircase.jpg"\n                        loading="lazy"\n                        alt="A room with a brown leather sofa and a spiral metal staircase">\n                </a>\n            </div>\n        </article>\n        <article class="services__slide slide-services swiper-slide">\n            <div data-ripple="once" data-template-services data-goto-top="120" data-goto="#plumbing-block"\n                class="slide-services__card card-slide">\n                <h4 class="card-slide__title title">Premier Plumbing Solutions</h4>\n                <div class="card-slide__text">\n                    <p>\n                        Trust our certified plumbers to deliver top-notch plumbing services. From\n                        elegant fixture installations to efficient repairs, we ensure your plumbing\n                        system operates flawlessly while adding a touch of luxury to your home.\n                    </p>\n                </div>\n            </div>\n            <div data-gallery class="slide-services__gallery">\n                <a href="img/gray-bathroom.jpg" class="slide-services__image">\n                    <img src="img/gray-bathroom.jpg" loading="lazy" alt="Gray bathroom">\n                </a>\n            </div>\n        </article>\n        <article class="services__slide slide-services swiper-slide">\n            <div data-ripple="once" data-template-services data-goto-top="120" data-goto="#electrical-block"\n                class="slide-services__card card-slide">\n                <h4 class="card-slide__title title">Expert Electrical Services</h4>\n                <div class="card-slide__text">\n                    <p>\n                        Illuminate your space with our expert electrical solutions. Our skilled\n                        electricians provide cutting-edge lighting installations, smart home automation\n                        setups, and seamless electrical upgrades that combine functionality with\n                        elegance.\n                    </p>\n                </div>\n            </div>\n            <div data-gallery class="slide-services__gallery">\n                <a href="img/a-lamp-with-an-incandescent-lamp.jpg" class="slide-services__image">\n                    <img src="img/a-lamp-with-an-incandescent-lamp.jpg" loading="lazy"\n                        alt="A lamp with an incandescent lamp">\n                </a>\n            </div>\n        </article>\n        <article class="services__slide slide-services swiper-slide">\n            <div data-ripple="once" data-template-services data-goto-top="120" data-goto="#oasis-block"\n                class="slide-services__card card-slide">\n                <h4 class="card-slide__title title">Outdoor Oasis Creations</h4>\n                <div class="card-slide__text">\n                    <p>\n                        Extend your luxury experience beyond your home's interiors with our outdoor\n                        oasis creations. From beautiful patios to breathtaking landscapes, we create\n                        stunning outdoor spaces that invite relaxation and provide the perfect backdrop\n                        for entertaining.\n                    </p>\n                </div>\n            </div>\n            <div data-gallery class="slide-services__gallery">\n                <a href="img/path-with-an-arch-made-of-plants.jpg" class="slide-services__image">\n                    <img src="img/path-with-an-arch-made-of-plants.jpg" loading="lazy"\n                        alt="Path with an arch made of plants">\n                </a>\n            </div>\n        </article>\n    </div>\n</div>\n</section>\n<section class="main__testemonials testemonials">\n<div class="testemonials__container">\n    <h2 class="testemonials__headline headline">testemonials</h2>\n    <div class="testemonials__content">\n        <div class="testemonials__heading heading">\n            <h3 data-watch data-watch-once\n                class="heading__title title title_decor title_color-changeable">Hear It From Our\n                Customers</h3>\n            <div class="heading__subtitle subtitle">\n                <p>\n                    Improve the appearance, energy-efficiency and overall value of your home by turning\n                    to the local experts at Nisby Home Renovations in Winnipeg\n                </p>\n            </div>\n        </div>\n        <div class="testemonials__slider swiper">\n            <div class="testemonials__wrapper swiper-wrapper">\n                <article class="testemonials__card card swiper-slide">\n                    <div class="card__wrapper">\n                        <h4 class="card__title title title_card title_color-changeable">John | <span>San\n                                Francisco</span></h4>\n                        <div class="card__text">\n                            <p>\n                                “Steve did a great job on our house. Always friendly when approached\n                                with\n                                our\n                                questions. His skillful workmanship is evident in all the areas of the\n                                house”\n                            </p>\n                        </div>\n                    </div>\n                </article>\n                <article class="testemonials__card card swiper-slide">\n                    <div class="card__wrapper">\n                        <h4 class="card__title title title_card title_color-changeable">Frank |\n                            <span>San Diego</span>\n                        </h4>\n                        <div class="card__text">\n                            <p>\n                                “Steve did a great job on our house. Always friendly when approached\n                                with\n                                our\n                                questions. His skillful workmanship is evident in all the areas of the\n                                house”\n                            </p>\n                        </div>\n                    </div>\n                </article>\n                <article class="testemonials__card card swiper-slide">\n                    <div class="card__wrapper">\n                        <h4 class="card__title title title_card title_color-changeable">John | <span>San\n                                Francisco</span></h4>\n                        <div class="card__text">\n                            <p>\n                                “Steve did a great job on our house. Always friendly when approached\n                                with\n                                our\n                                questions. His skillful workmanship is evident in all the areas of the\n                                house”\n                            </p>\n                        </div>\n                    </div>\n                </article>\n                <article class="testemonials__card card swiper-slide">\n                    <div class="card__wrapper">\n                        <h4 class="card__title title title_card title_color-changeable">Frank |\n                            <span>San Diego</span>\n                        </h4>\n                        <div class="card__text">\n                            <p>\n                                “Steve did a great job on our house. Always friendly when approached\n                                with\n                                our\n                                questions. His skillful workmanship is evident in all the areas of the\n                                house”\n                            </p>\n                        </div>\n                    </div>\n                </article>\n            </div>\n        </div>\n        <div class="testemonials__buttons buttons-slider buttons-slider_color-changeable">\n            <button aria-label="Previous slide" type="button" class="testemonials__swiper-button-prev swiper-button-prev">\n                <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                    <path\n                        d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                        fill="white" />\n                </svg>\n            </button>\n            <button aria-label="Next slide" type="button" class="testemonials__swiper-button-next swiper-button-next">\n                <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                    <path\n                        d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                        fill="white" />\n                </svg>\n            </button>\n        </div>\n    </div>\n</div>\n</section>\n<section class="main__brands brands">\n<div class="brands__container">\n    <h2 class="brands__headline headline">Brands We Trust</h2>\n    <div class="brands__slider swiper">\n        <div class="brands__logos swiper-wrapper">\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/tesla.png" loading="lazy" alt="Tesla logo">\n                </div>\n            </div>\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/amazon.png" loading="lazy" alt="Amazon logo">\n                </div>\n            </div>\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/tesla.png" loading="lazy" alt="Tesla logo">\n                </div>\n            </div>\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/amazon.png" loading="lazy" alt="Amazon logo">\n                </div>\n            </div>\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/tesla.png" loading="lazy" alt="Tesla logo">\n                </div>\n            </div>\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/amazon.png" loading="lazy" alt="Amazon logo">\n                </div>\n            </div>\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/tesla.png" loading="lazy" alt="Tesla logo">\n                </div>\n            </div>\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/amazon.png" loading="lazy" alt="Amazon logo">\n                </div>\n            </div>\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/tesla.png" loading="lazy" alt="Tesla logo">\n                </div>\n            </div>\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/amazon.png" loading="lazy" alt="Amazon logo">\n                </div>\n            </div>\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/tesla.png" loading="lazy" alt="Tesla logo">\n                </div>\n            </div>\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/amazon.png" loading="lazy" alt="Amazon logo">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</section>`;
        const templateServices = `<section class="main__start-screen start-screen">\n<div class="start-screen__container">\n    <div class="start-screen__body">\n        <h1 class="start-screen__title">Services</h1>\n        <div class="start-screen__text">\n            <p>\n                Committed to exceeding customer expectations\n            </p>\n        </div>\n        <button data-ripple="once" data-popup="#call-popup"\n            class="start-screen__button button">\n            Get a free quote\n        </button>\n    </div>\n    <div class="start-screen__image">\n        <img src="img/man-with-a-screwdriver-in-the-kitchen.jpg" loading="lazy"\n            alt="Man with a screwdriver in the kitchen">\n    </div>\n</div>\n</section>\n<section class="main__we-do we-do">\n<div class="we-do__container">\n    <h2 data-watch data-watch-once class="we-do__title title title_decor title_color-changeable">What we\n        do for you</h2>\n    <div class="we-do__text-block text-block">\n        <p>\n            When you choose Home Renovations you are guaranteed superior quality craftsmanship,\n            service, and products. We are the leader in the industry in windows, doors, and exteriors\n            because our team is comprised of experienced qualified craftsman, with internal training,\n            and the highest-level of industry leading standards.\n        </p>\n        <p>\n            When you choose Home Renovations you are guaranteed superior quality craftsmanship,\n            service, and products. We are the leader in the industry in windows, doors, and exteriors\n            because our team is comprised of experienced qualified craftsman, with internal training,\n            and the highest-level of industry leading standards.\n        </p>\n    </div>\n</section>\n<div class="main__sliders sliders sliders_counter">\n<article id="remodeling-block" class="sliders__slider sliders__slider_split swiper">\n    <div class="sliders__container">\n        <div class="sliders__card card-slider">\n            <h3 class="card-slider__title title">Exquisite Remodeling</h3>\n            <div class="card-slider__text">\n                <p>\n                    Transform your space into a breathtaking oasis with our unparalleled remodeling\n                    services. From elegant kitchens to luxurious bathrooms, we bring your vision to life\n                    with precision and style.\n                </p>\n            </div>\n        </div>\n        <div class="sliders__buttons">\n            <button data-ripple="once" data-popup="#remodeling-service-popup"\n                class="sliders__order-btn button">order this service</button>\n            <div class="sliders__nav-btns buttons-slider">\n                <button aria-label="Previous slide" type="button" class="sliders__swiper-button-prev swiper-button-prev">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n                <button aria-label="Next slide" type="button" class="sliders__swiper-button-next swiper-button-next">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n            </div>\n        </div>\n    </div>\n    <div data-gallery class="sliders__wrapper swiper-wrapper">\n        <a href="img/kitchen-with-dark-walls.jpg" class="sliders__image swiper-slide">\n            <img src="img/kitchen-with-dark-walls.jpg" loading="lazy" alt="Kitchen with dark walls">\n        </a>\n        <a href="img/laminate-laying-work.jpg" class="sliders__image swiper-slide">\n            <img src="img/laminate-laying-work.jpg" loading="lazy" alt="Laminate laying work">\n        </a>\n    </div>\n</article>\n<article id="renovations-block" class="sliders__slider sliders__slider_split swiper">\n    <div class="sliders__container">\n        <div class="sliders__card card-slider">\n            <h3 class="card-slider__title title">Seamless Renovations</h3>\n            <div class="card-slider__text">\n                <p>\n                    Experience a hassle-free renovation process with our team of skilled professionals.\n                    We handle every aspect, from planning to completion, ensuring a seamless\n                    transformation that exceeds your expectations.\n                </p>\n            </div>\n        </div>\n        <div class="sliders__buttons">\n            <button data-ripple="once" data-popup="#renovations-service-popup"\n                class="sliders__order-btn button">order this service</button>\n            <div class="sliders__nav-btns buttons-slider">\n                <button aria-label="Previous slide" type="button" class="sliders__swiper-button-prev swiper-button-prev">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n                <button aria-label="Next slide" type="button" class="sliders__swiper-button-next swiper-button-next">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n            </div>\n        </div>\n    </div>\n    <div data-gallery class="sliders__wrapper swiper-wrapper">\n        <a href="img/two-men-work-with-a-blueprint.jpeg" class="sliders__image swiper-slide">\n            <img src="img/two-men-work-with-a-blueprint.jpeg" loading="lazy"\n                alt="Two men work with a blueprint">\n        </a>\n        <a href="img/man-with-a-screwdriver-in-the-kitchen.jpg" class="sliders__image swiper-slide">\n            <img src="img/man-with-a-screwdriver-in-the-kitchen.jpg" loading="lazy"\n                alt="Man with a screwdriver in the kitchen">\n        </a>\n    </div>\n</article>\n<article id="interiors-block" class="sliders__slider sliders__slider_split swiper">\n    <div class="sliders__container">\n        <div class="sliders__card card-slider">\n            <h3 class="card-slider__title title">Customized Interiors</h3>\n            <div class="card-slider__text">\n                <p>\n                    Elevate your living spaces with our tailored interior solutions. Whether it's a cozy\n                    den or a grand entertainment area, we design and craft luxurious interiors that\n                    reflect your unique taste and lifestyle.\n                </p>\n            </div>\n        </div>\n        <div class="sliders__buttons">\n            <button data-ripple="once" data-popup="#interiors-service-popup"\n                class="sliders__order-btn button">order this service</button>\n            <div class="sliders__nav-btns buttons-slider">\n                <button aria-label="Previous slide" type="button" class="sliders__swiper-button-prev swiper-button-prev">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n                <button aria-label="Next slide" type="button" class="sliders__swiper-button-next swiper-button-next">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n            </div>\n        </div>\n    </div>\n    <div data-gallery class="sliders__wrapper swiper-wrapper">\n        <a href="img/living-room-with-a-large-corner-sofa.jpg" class="sliders__image swiper-slide">\n            <img src="img/living-room-with-a-large-corner-sofa.jpg" loading="lazy"\n                alt="Lliving room with a large corner sofa.jpg">\n        </a>\n        <a href="img/empty-room-with-big-window-and-new-renovation.jpg"\n            class="sliders__image swiper-slide">\n            <img src="img/empty-room-with-big-window-and-new-renovation.jpg" loading="lazy"\n                alt="Empty room with big window and new renovation.jpg">\n        </a>\n    </div>\n</article>\n<article id="basement-block" class="sliders__slider sliders__slider_split swiper">\n    <div class="sliders__container">\n        <div class="sliders__card card-slider">\n            <h3 class="card-slider__title title">Masterful Basement Conversions</h3>\n            <div class="card-slider__text">\n                <p>\n                    Unlock the hidden potential of your basement with our expert conversion services.\n                    From legal and fully functional rental units to captivating entertainment spaces, we\n                    create stunning environments that maximize your property's value.\n                </p>\n            </div>\n        </div>\n        <div class="sliders__buttons">\n            <button data-ripple="once" data-popup="#basement-service-popup"\n                class="sliders__order-btn button">order this service</button>\n            <div class="sliders__nav-btns buttons-slider">\n                <button aria-label="Previous slide" type="button" class="sliders__swiper-button-prev swiper-button-prev">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n                <button aria-label="Next slide" type="button" class="sliders__swiper-button-next swiper-button-next">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n            </div>\n        </div>\n    </div>\n    <div data-gallery class="sliders__wrapper swiper-wrapper">\n        <a href="img/a-room-with-a-brown-leather-sofa-and-a-spiral-metal-staircase.jpg"\n            class="sliders__image swiper-slide">\n            <img src="img/a-room-with-a-brown-leather-sofa-and-a-spiral-metal-staircase.jpg"\n                loading="lazy" alt="A room with a brown leather sofa and a spiral metal staircase">\n        </a>\n        <a href="img/living-room-with-large-TV-and-pool-table.jpg" class="sliders__image swiper-slide">\n            <img src="img/living-room-with-large-TV-and-pool-table.jpg" loading="lazy"\n                alt="Living room with large TV and pool table">\n        </a>\n    </div>\n</article>\n<article id="plumbing-block" class="sliders__slider sliders__slider_split swiper">\n    <div class="sliders__container">\n        <div class="sliders__card card-slider">\n            <h3 class="card-slider__title title">Premier Plumbing Solutions</h3>\n            <div class="card-slider__text">\n                <p>\n                    Transform your space into a breathtaking oasis with our unparalleled remodeling\n                    services. From elegant kitchens to luxurious bathrooms, we bring your vision to life\n                    with precision and style.\n                </p>\n            </div>\n        </div>\n        <div class="sliders__buttons">\n            <button data-ripple="once" data-popup="#plumbing-service-popup"\n                class="sliders__order-btn button">order this service</button>\n            <div class="sliders__nav-btns buttons-slider">\n                <button aria-label="Previous slide" type="button" class="sliders__swiper-button-prev swiper-button-prev">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n                <button aria-label="Next slide" type="button" class="sliders__swiper-button-next swiper-button-next">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n            </div>\n        </div>\n    </div>\n    <div data-gallery class="sliders__wrapper swiper-wrapper">\n        <a href="img/gray-bathroom.jpg" class="sliders__image swiper-slide">\n            <img src="img/gray-bathroom.jpg" loading="lazy" alt="Gray-bathroom">\n        </a>\n        <a href="img/empty-room-with-new-renovation.jpg" class="sliders__image swiper-slide">\n            <img src="img/empty-room-with-new-renovation.jpg" loading="lazy"\n                alt="Empty room with new renovation">\n        </a>\n    </div>\n</article>\n<article id="electrical-block" class="sliders__slider sliders__slider_split swiper">\n    <div class="sliders__container">\n        <div class="sliders__card card-slider">\n            <h3 class="card-slider__title title">Expert Electrical Services</h3>\n            <div class="card-slider__text">\n                <p>\n                    Illuminate your space with our expert electrical solutions. Our skilled electricians\n                    provide cutting-edge lighting installations, smart home automation setups, and\n                    seamless electrical upgrades that combine functionality with elegance.\n                </p>\n            </div>\n        </div>\n        <div class="sliders__buttons">\n            <button data-ripple="once" data-popup="#electrical-service-popup"\n                class="sliders__order-btn button">order this service</button>\n            <div class="sliders__nav-btns buttons-slider">\n                <button aria-label="Previous slide" type="button" class="sliders__swiper-button-prev swiper-button-prev">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n                <button aria-label="Next slide" type="button" class="sliders__swiper-button-next swiper-button-next">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n            </div>\n        </div>\n    </div>\n    <div data-gallery class="sliders__wrapper swiper-wrapper">\n        <a href="img/a-lamp-with-an-incandescent-lamp.jpg" class="sliders__image swiper-slide">\n            <img src="img/a-lamp-with-an-incandescent-lamp.jpg" loading="lazy"\n                alt="A lamp with an incandescent lamp">\n        </a>\n        <a href="img/a-room-with-a-long-table-and-a-picture-on-the-wall.jpg"\n            class="sliders__image swiper-slide">\n            <img src="img/a-room-with-a-long-table-and-a-picture-on-the-wall.jpg" loading="lazy"\n                alt="A room with a long table and a picture on the wall">\n        </a>\n    </div>\n</article>\n<article id="oasis-block" class="sliders__slider sliders__slider_split swiper">\n    <div class="sliders__container">\n        <div class="sliders__card card-slider">\n            <h3 class="card-slider__title title">Outdoor Oasis Creations</h3>\n            <div class="card-slider__text">\n                <p>\n                    Extend your luxury experience beyond your home's interiors with our outdoor oasis\n                    creations. From beautiful patios to breathtaking landscapes, we create stunning\n                    outdoor spaces that invite relaxation and provide the perfect backdrop for\n                    entertaining\n                </p>\n            </div>\n        </div>\n        <div class="sliders__buttons">\n            <button data-ripple="once" data-popup="#outdoor-service-popup"\n                class="sliders__order-btn button">order this service</button>\n            <div class="sliders__nav-btns buttons-slider">\n                <button aria-label="Previous slide" type="button" class="sliders__swiper-button-prev swiper-button-prev">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n                <button aria-label="Next slide" type="button" class="sliders__swiper-button-next swiper-button-next">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n            </div>\n        </div>\n    </div>\n    <div data-gallery class="sliders__wrapper swiper-wrapper">\n        <a href="img/stairs-in-a-large-green-garden.jpeg" class="sliders__image swiper-slide">\n            <img src="img/stairs-in-a-large-green-garden.jpeg" loading="lazy"\n                alt="Stairs in a large green garden">\n        </a>\n        <a href="img/path-with-an-arch-made-of-plants.jpg" class="sliders__image swiper-slide">\n            <img src="img/path-with-an-arch-made-of-plants.jpg" loading="lazy"\n                alt="Path with an arch made of plants">\n        </a>\n    </div>\n</article>\n</div>`;
        const templatePortfolio = `<section class="main__start-screen start-screen">\n<div class="start-screen__container">\n    <div class="start-screen__body">\n        <h1 class="start-screen__title">Our cases</h1>\n        <div class="start-screen__text">\n            <p>\n                Committed to exceeding customer expectations\n            </p>\n        </div>\n        <button data-ripple="once" data-popup="#call-popup" class="start-screen__button button">\n            Get a free quote\n        </button>\n    </div>\n    <div class="start-screen__image">\n        <img src="img/facade-of-a-house-with-many-large-windows.jpeg" loading="lazy"\n            alt="Facade of a house with many large windows">\n    </div>\n</div>\n</section>\n<section class="main__testemonials testemonials">\n<div class="testemonials__container">\n    <h2 class="testemonials__headline headline">testemonials</h2>\n    <div class="testemonials__content">\n        <div class="testemonials__heading heading">\n            <h3 data-watch data-watch-once\n                class="heading__title title title_decor title_color-changeable">Hear It From Our\n                Customers</h3>\n            <div class="heading__subtitle subtitle">\n                <p>\n                    Improve the appearance, energy-efficiency and overall value of your home by turning\n                    to the local experts at Nisby Home Renovations in Winnipeg\n                </p>\n            </div>\n        </div>\n        <div class="testemonials__slider swiper">\n            <div class="testemonials__wrapper swiper-wrapper">\n                <article class="testemonials__card card swiper-slide">\n                    <div class="card__wrapper">\n                        <h4 class="card__title title title_card title_color-changeable">John | <span>San\n                                Francisco</span></h4>\n                        <div class="card__text">\n                            <p>\n                                “Steve did a great job on our house. Always friendly when approached\n                                with\n                                our\n                                questions. His skillful workmanship is evident in all the areas of the\n                                house”\n                            </p>\n                        </div>\n                    </div>\n                </article>\n                <article class="testemonials__card card swiper-slide">\n                    <div class="card__wrapper">\n                        <h4 class="card__title title title_card title_color-changeable">Frank |\n                            <span>San Diego</span>\n                        </h4>\n                        <div class="card__text">\n                            <p>\n                                “Steve did a great job on our house. Always friendly when approached\n                                with\n                                our\n                                questions. His skillful workmanship is evident in all the areas of the\n                                house”\n                            </p>\n                        </div>\n                    </div>\n                </article>\n                <article class="testemonials__card card swiper-slide">\n                    <div class="card__wrapper">\n                        <h4 class="card__title title title_card title_color-changeable">John | <span>San\n                                Francisco</span></h4>\n                        <div class="card__text">\n                            <p>\n                                “Steve did a great job on our house. Always friendly when approached\n                                with\n                                our\n                                questions. His skillful workmanship is evident in all the areas of the\n                                house”\n                            </p>\n                        </div>\n                    </div>\n                </article>\n                <article class="testemonials__card card swiper-slide">\n                    <div class="card__wrapper">\n                        <h4 class="card__title title title_card title_color-changeable">Frank |\n                            <span>San Diego</span>\n                        </h4>\n                        <div class="card__text">\n                            <p>\n                                “Steve did a great job on our house. Always friendly when approached\n                                with\n                                our\n                                questions. His skillful workmanship is evident in all the areas of the\n                                house”\n                            </p>\n                        </div>\n                    </div>\n                </article>\n            </div>\n        </div>\n        <div class="testemonials__buttons buttons-slider buttons-slider_color-changeable">\n            <button aria-label="Previous slide" type="button" class="testemonials__swiper-button-prev swiper-button-prev">\n                <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                    <path\n                        d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                        fill="white" />\n                </svg>\n            </button>\n            <button aria-label="Next slide" type="button" class="testemonials__swiper-button-next swiper-button-next">\n                <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                    <path\n                        d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                        fill="white" />\n                </svg>\n            </button>\n        </div>\n    </div>\n</div>\n</section>\n<section class="main__brands brands">\n<div class="brands__container">\n    <h2 class="brands__headline headline">Brands We Trust</h2>\n    <div class="brands__slider swiper">\n        <div class="brands__logos swiper-wrapper">\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/tesla.png" loading="lazy" alt="Tesla logo">\n                </div>\n            </div>\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/amazon.png" loading="lazy" alt="Amazon logo">\n                </div>\n            </div>\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/tesla.png" loading="lazy" alt="Tesla logo">\n                </div>\n            </div>\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/amazon.png" loading="lazy" alt="Amazon logo">\n                </div>\n            </div>\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/tesla.png" loading="lazy" alt="Tesla logo">\n                </div>\n            </div>\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/amazon.png" loading="lazy" alt="Amazon logo">\n                </div>\n            </div>\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/tesla.png" loading="lazy" alt="Tesla logo">\n                </div>\n            </div>\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/amazon.png" loading="lazy" alt="Amazon logo">\n                </div>\n            </div>\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/tesla.png" loading="lazy" alt="Tesla logo">\n                </div>\n            </div>\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/amazon.png" loading="lazy" alt="Amazon logo">\n                </div>\n            </div>\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/tesla.png" loading="lazy" alt="Tesla logo">\n                </div>\n            </div>\n            <div class="brands__slide swiper-slide">\n                <div class="brands__image">\n                    <img src="img/brands/amazon.png" loading="lazy" alt="Amazon logo">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</section>\n<div class="main__sliders sliders sliders_more">\n<div class="sliders__body sliders__body_more">\n    <article class="sliders__slider sliders__slider_full swiper">\n        <div class="sliders__container sliders__container_bottom-row">\n            <div class="sliders__card card-slider">\n                <h3 class="card-slider__title title">Room renovate, San Francisco</h3>\n                <div class="card-slider__text">\n                    <p>\n                        Home Renovations provides affordable window option for San Francisco homeowners\n                    </p>\n                </div>\n            </div>\n            <div class="sliders__nav-btns buttons-slider">\n                <button aria-label="Previous slide" type="button" class="sliders__swiper-button-prev swiper-button-prev">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n                <button aria-label="Next slide" type="button" class="sliders__swiper-button-next swiper-button-next">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n            </div>\n        </div>\n        <div data-gallery class="sliders__wrapper swiper-wrapper">\n            <a href="img/living-room-with-a-large-corner-sofa.jpg" class="sliders__image swiper-slide">\n                <img src="img/living-room-with-a-large-corner-sofa.jpg" loading="lazy"\n                    alt="Living room with a large corner sofa">\n            </a>\n            <a href="img/living-room-with-a-large-corner-sofa.jpg" class="sliders__image swiper-slide">\n                <img src="img/living-room-with-a-large-corner-sofa.jpg" loading="lazy"\n                    alt="Living room with a large corner sofa">\n            </a>\n        </div>\n    </article>\n    <article class="sliders__slider sliders__slider_full swiper">\n        <div class="sliders__container sliders__container_bottom-row">\n            <div class="sliders__card card-slider">\n                <h3 class="card-slider__title title">Bathroom Design, San Francisco</h3>\n                <div class="card-slider__text">\n                    <p>\n                        Home Renovations provides affordable window option for San Francisco homeowners\n                    </p>\n                </div>\n            </div>\n            <div class="sliders__nav-btns buttons-slider">\n                <button aria-label="Previous slide" type="button" class="sliders__swiper-button-prev swiper-button-prev">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n                <button aria-label="Next slide" type="button" class="sliders__swiper-button-next swiper-button-next">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n            </div>\n        </div>\n        <div data-gallery class="sliders__wrapper swiper-wrapper">\n            <a href="img/gray-bathroom.jpg" class="sliders__image swiper-slide">\n                <img src="img/gray-bathroom.jpg" loading="lazy" alt="Gray bathroom">\n            </a>\n            <a href="img/gray-bathroom.jpg" class="sliders__image swiper-slide">\n                <img src="img/gray-bathroom.jpg" loading="lazy" alt="Gray bathroom">\n            </a>\n        </div>\n    </article>\n    <article class="sliders__slider sliders__slider_full swiper">\n        <div class="sliders__container sliders__container_bottom-row">\n            <div class="sliders__card card-slider">\n                <h3 class="card-slider__title title">Basement renovate, San Francisco</h3>\n                <div class="card-slider__text">\n                    <p>\n                        Home Renovations provides affordable window option for San Francisco homeowners\n                    </p>\n                </div>\n            </div>\n            <div class="sliders__nav-btns buttons-slider">\n                <button aria-label="Previous slide" type="button" class="sliders__swiper-button-prev swiper-button-prev">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n                <button aria-label="Next slide" type="button" class="sliders__swiper-button-next swiper-button-next">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n            </div>\n        </div>\n        <div data-gallery class="sliders__wrapper swiper-wrapper">\n            <a href="img/living-room-with-large-TV-and-pool-table.jpg"\n                class="sliders__image swiper-slide">\n                <img src="img/living-room-with-large-TV-and-pool-table.jpg" loading="lazy"\n                    alt="Living room with large TV and pool table">\n            </a>\n            <a href="img/living-room-with-large-TV-and-pool-table.jpg"\n                class="sliders__image swiper-slide">\n                <img src="img/living-room-with-large-TV-and-pool-table.jpg" loading="lazy"\n                    alt="Living room with large TV and pool table">\n            </a>\n        </div>\n    </article>\n    <article class="sliders__slider sliders__slider_full swiper">\n        <div class="sliders__container sliders__container_bottom-row">\n            <div class="sliders__card card-slider">\n                <h3 class="card-slider__title title">Outdoor Oasis Creations, San Francisco</h3>\n                <div class="card-slider__text">\n                    <p>\n                        Home Renovations provides affordable window option for San Francisco homeowners\n                    </p>\n                </div>\n            </div>\n            <div class="sliders__nav-btns buttons-slider">\n                <button aria-label="Previous slide" type="button" class="sliders__swiper-button-prev swiper-button-prev">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n                <button aria-label="Next slide" type="button" class="sliders__swiper-button-next swiper-button-next">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n            </div>\n        </div>\n        <div data-gallery class="sliders__wrapper swiper-wrapper">\n            <a href="img/path-with-an-arch-made-of-plants.jpg" class="sliders__image swiper-slide">\n                <img src="img/path-with-an-arch-made-of-plants.jpg" loading="lazy"\n                    alt="Path with an arch made of plants">\n            </a>\n            <a href="img/path-with-an-arch-made-of-plants.jpg" class="sliders__image swiper-slide">\n                <img src="img/path-with-an-arch-made-of-plants.jpg" loading="lazy"\n                    alt="Path with an arch made of plants">\n            </a>\n        </div>\n    </article>\n    <article class="sliders__slider sliders__slider_full swiper">\n        <div class="sliders__container sliders__container_bottom-row">\n            <div class="sliders__card card-slider">\n                <h3 class="card-slider__title title">Electrical renovate, San Francisco</h3>\n                <div class="card-slider__text">\n                    <p>\n                        Home Renovations provides affordable window option for San Francisco homeowners\n                    </p>\n                </div>\n            </div>\n            <div class="sliders__nav-btns buttons-slider">\n                <button aria-label="Previous slide" type="button" class="sliders__swiper-button-prev swiper-button-prev">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n                <button aria-label="Next slide" type="button" class="sliders__swiper-button-next swiper-button-next">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n            </div>\n        </div>\n        <div data-gallery class="sliders__wrapper swiper-wrapper">\n            <a href="img/a-lamp-with-an-incandescent-lamp.jpg" class="sliders__image swiper-slide">\n                <img src="img/a-lamp-with-an-incandescent-lamp.jpg" loading="lazy"\n                    alt="A lamp with an incandescent lamp">\n            </a>\n            <a href="img/a-lamp-with-an-incandescent-lamp.jpg" class="sliders__image swiper-slide">\n                <img src="img/a-lamp-with-an-incandescent-lamp.jpg" loading="lazy"\n                    alt="A lamp with an incandescent lamp">\n            </a>\n        </div>\n    </article>\n    <article class="sliders__slider sliders__slider_full swiper">\n        <div class="sliders__container sliders__container_bottom-row">\n            <div class="sliders__card card-slider">\n                <h3 class="card-slider__title title">Floor Remodeling, San Francisco</h3>\n                <div class="card-slider__text">\n                    <p>\n                        Home Renovations provides affordable window option for San Francisco homeowners\n                    </p>\n                </div>\n            </div>\n            <div class="sliders__nav-btns buttons-slider">\n                <button aria-label="Previous slide" type="button" class="sliders__swiper-button-prev swiper-button-prev">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n                <button aria-label="Next slide" type="button" class="sliders__swiper-button-next swiper-button-next">\n                    <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                        <path\n                            d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                            fill="white" />\n                    </svg>\n                </button>\n            </div>\n        </div>\n        <div data-gallery class="sliders__wrapper swiper-wrapper">\n            <a href="img/laminate-laying-work.jpg" class="sliders__image swiper-slide">\n                <img src="img/laminate-laying-work.jpg" loading="lazy" alt="Laminate laying work">\n            </a>\n            <a href="img/laminate-laying-work.jpg" class="sliders__image swiper-slide">\n                <img src="img/laminate-laying-work.jpg" loading="lazy" alt="Laminate laying work">\n            </a>\n        </div>\n    </article>\n</div>\n<button data-added-num="2" data-ripple="once" class="sliders__more-btn button button_cases">load\n    more</button>\n</div>`;
        const templateFaq = `<section class="main__faq faq">\n<div class="faq__container">\n    <div class="faq__heading heading">\n        <h1 class="heading__title title title_color-changeable">FAQ</h1>\n        <div class="heading__subtitle subtitle">\n            <p>\n                Committed to exceeding customer expectations\n            </p>\n        </div>\n    </div>\n    <div class="faq__body">\n        <ul class="faq__list list-faq">\n            <li class="list-faq__item">\n                <div class="list-faq__wrapper">\n                    <h3 class="list-faq__title title title_card title_color-changeable">Is Home\n                        Renovations Accredited?</h3>\n                    <div class="list-faq__answer">\n                        <div class="list-faq__text">\n                            <p>\n                                Certified Home Renovations is a full service residential remodeling\n                                contractor\n                                with a wide range of capabilities to create the perfect new space for\n                                your\n                                home. From the design to the construction process, our qualified\n                                craftsmen\n                                are\n                                dedicated to customer service through professionalism and quality\n                                workmanship.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </li>\n            <li class="list-faq__item">\n                <div class="list-faq__wrapper">\n                    <h3 class="list-faq__title title title_card title_color-changeable">What can I\n                        expect during a\n                        consultation?</h3>\n                    <div class="list-faq__answer">\n                        <div class="list-faq__text">\n                            <p>\n                                Well first off you can expect a free visit to your home. During the\n                                visit we\n                                review your needs and what is currently in place in your home. We\n                                usually\n                                measure things up, take some photos and lots of notes. We answer many\n                                questions there and then and begin to prepare a quotation of the work\n                                you\n                                are looking for.\n                            </p>\n                            <p>\n                                We can show you samples and even help you visualize the end result.\n                                In the gallery to your left you will see two projects, concepts and the\n                                final job completed.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </li>\n            <li class="list-faq__item">\n                <div class="list-faq__wrapper">\n                    <h3 class="list-faq__title title title_card title_color-changeable">Is Home\n                        Renovations Accredited?</h3>\n                    <div class="list-faq__answer">\n                        <div class="list-faq__text">\n                            <p>\n                                Certified Home Renovations is a full service residential remodeling\n                                contractor\n                                with a wide range of capabilities to create the perfect new space for\n                                your\n                                home. From the design to the construction process, our qualified\n                                craftsmen\n                                are\n                                dedicated to customer service through professionalism and quality\n                                workmanship.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </li>\n            <li class="list-faq__item">\n                <div class="list-faq__wrapper">\n                    <h3 class="list-faq__title title title_card title_color-changeable">What can I\n                        expect during a\n                        consultation?</h3>\n                    <div class="list-faq__answer">\n                        <div class="list-faq__text">\n                            <p>\n                                Well first off you can expect a free visit to your home. During the\n                                visit we\n                                review your needs and what is currently in place in your home. We\n                                usually\n                                measure things up, take some photos and lots of notes. We answer many\n                                questions there and then and begin to prepare a quotation of the work\n                                you\n                                are looking for.\n                            </p>\n                            <p>\n                                We can show you samples and even help you visualize the end result.\n                                In the gallery to your left you will see two projects, concepts and the\n                                final job completed.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </li>\n            <li class="list-faq__item">\n                <div class="list-faq__wrapper">\n                    <h3 class="list-faq__title title title_card title_color-changeable">Is Home\n                        Renovations Accredited?</h3>\n                    <div class="list-faq__answer">\n                        <div class="list-faq__text">\n                            <p>\n                                Certified Home Renovations is a full service residential remodeling\n                                contractor\n                                with a wide range of capabilities to create the perfect new space for\n                                your\n                                home. From the design to the construction process, our qualified\n                                craftsmen\n                                are\n                                dedicated to customer service through professionalism and quality\n                                workmanship.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </li>\n            <li class="list-faq__item">\n                <div class="list-faq__wrapper">\n                    <h3 class="list-faq__title title title_card title_color-changeable">What can I\n                        expect during a\n                        consultation?</h3>\n                    <div class="list-faq__answer">\n                        <div class="list-faq__text">\n                            <p>\n                                Well first off you can expect a free visit to your home. During the\n                                visit we\n                                review your needs and what is currently in place in your home. We\n                                usually\n                                measure things up, take some photos and lots of notes. We answer many\n                                questions there and then and begin to prepare a quotation of the work\n                                you\n                                are looking for.\n                            </p>\n                            <p>\n                                We can show you samples and even help you visualize the end result.\n                                In the gallery to your left you will see two projects, concepts and the\n                                final job completed.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </li>\n        </ul>\n        <div class="faq__ask-us ask-us">\n            <h2 class="ask-us__title">Have your own question?</h2>\n            <button data-ripple="once" data-popup="#call-popup" class="ask-us__button button">ask us\n                now</button>\n        </div>\n    </div>\n</div>\n</section>`;
        const templateContactUs = `<section class="main__contact-us contact-us">\n<div class="contact-us__container">\n    <div class="contact-us__heading heading">\n        <h1 class="heading__title title title_color-changeable">Contact us</h1>\n        <div class="heading__subtitle subtitle">\n            <p>\n                Committed to exceeding customer expectations\n            </p>\n        </div>\n    </div>\n    <div class="contact-us__info info-contact">\n        <div class="info-contact__column">\n            <h3 class="info-contact__headline headline headline_small">Phones</h3>\n            <div class="info-contact__text">\n                <a href="tel:1234567890">1 234 567 890</a>\n                <a href="tel:1234567890">1 234 567 890</a>\n            </div>\n        </div>\n        <div class="info-contact__column">\n            <h3 class="info-contact__headline headline headline_small">email</h3>\n            <div class="info-contact__text">\n                <a href="mailto:email@mail.com">email@mail.com</a>\n            </div>\n        </div>\n        <div class="info-contact__column">\n            <h3 class="info-contact__headline headline headline_small">address</h3>\n            <div class="info-contact__text">\n                <p>10 Addres Rd</p>\n            </div>\n        </div>\n        <div class="info-contact__column">\n            <h3 class="info-contact__headline headline headline_small">Working hours</h3>\n            <div class="info-contact__text">\n                <p>Sun: Closed</p>\n                <p>Mon - Sat: 9 am - 7 pm</p>\n            </div>\n        </div>\n    </div>\n    <div class="contact-us__social social">\n        <h3 class="social__title">Follow our Socials</h3>\n        <div class="social__icons">\n            <a href="https://web.telegram.org/" title="Telegram" target="_blank" data-ripple="once"\n                class="social__icon">\n                <svg width="16" height="15" viewBox="0 0 16 15" fill="none">\n                    <path\n                        d="M9.25739 2.45495C-0.892503 6.85482 0.15817 6.38514 0.0590497 6.58489C-0.0598944 6.82783 0.00453366 7.12475 0.212686 7.28131C0.296938 7.34069 1.14441 7.65381 2.09597 7.97773C3.05248 8.30165 3.85535 8.59317 3.88509 8.62556C3.91482 8.65795 4.25679 9.77547 4.64335 11.1143C5.2579 13.236 5.36693 13.5599 5.49579 13.6949C5.65438 13.8514 5.84271 13.8784 6.01617 13.7704C6.07564 13.7326 6.59602 13.2252 7.17092 12.6421L8.22159 11.5786L9.7183 12.7771C12.34 14.8664 12.2657 14.8124 12.4788 14.8124C12.6919 14.8124 12.8852 14.672 12.9645 14.4507C13.0537 14.2023 15.7498 1.5048 15.7498 1.33744C15.7498 0.711201 15.269 0.182137 14.709 0.187536C14.5355 0.187536 13.3709 0.67341 9.25739 2.45495ZM14.3125 1.60737C14.2431 1.67215 12.4292 3.4375 10.2734 5.52676C8.12247 7.61062 6.30857 9.37057 6.2491 9.43535C6.15494 9.53253 6.11033 9.75387 5.93687 10.8444C5.82288 11.557 5.71881 12.1832 5.69898 12.2372C5.65933 12.3398 4.66813 8.55538 4.70283 8.44741C4.72265 8.39882 14.3522 1.4832 14.4116 1.4778C14.4216 1.4778 14.3769 1.53719 14.3125 1.60737Z"\n                        fill="url(#paint-linear-telegram-contact-us)" />\n                    <defs>\n                        <linearGradient id="paint-linear-telegram-contact-us" x1="0.499146" y1="0.187495"\n                            x2="16.8576" y2="1.93662" gradientUnits="userSpaceOnUse">\n                            <stop offset="0%" stop-color="#BCA36B" />\n                            <stop offset="100%" stop-color="#DCC696" />\n                        </linearGradient>\n                    </defs>\n                </svg>\n            </a>\n            <a href="https://www.facebook.com/" title="Facebook" target="_blank" data-ripple="once"\n                class="social__icon">\n                <svg width="18" height="17" viewBox="0 0 18 17" fill="none">\n                    <path\n                        d="M17.1716 8.55127C17.1716 12.7623 14.0821 16.2533 10.049 16.8868V11.0066H12.01L12.3834 8.57377H10.049V6.99526C10.049 6.3294 10.3752 5.68112 11.4201 5.68112H12.4811V3.60971C12.4811 3.60971 11.5178 3.44518 10.5974 3.44518C8.67507 3.44518 7.41929 4.61026 7.41929 6.71893V8.57307H5.28249V11.0059H7.41929V16.8861C3.38687 16.2519 0.296631 12.7616 0.296631 8.55127C0.296631 3.89166 4.07452 0.11377 8.73413 0.11377C13.3937 0.11377 17.1716 3.89096 17.1716 8.55127Z"\n                        fill="url(#paint-linear-facebook-contact-us)" />\n                    <defs>\n                        <linearGradient id="paint-linear-facebook-contact-us" x1="0.831692" y1="16.8868"\n                            x2="18.3839" y2="15.1335" gradientUnits="userSpaceOnUse">\n                            <stop offset="0%" stop-color="#BCA36B" />\n                            <stop offset="100%" stop-color="#DCC696" />\n                        </linearGradient>\n                    </defs>\n                </svg>\n            </a>\n            <a href="https://www.instagram.com/" title="Instagram" target="_blank" data-ripple="once"\n                class="social__icon">\n                <svg width="18" height="17" viewBox="0 0 18 17" fill="none">\n                    <path\n                        d="M9.03076 1.58266C11.2836 1.58266 11.5508 1.59109 12.4402 1.63188C13.3599 1.67406 14.307 1.88359 14.9771 2.55367C15.6535 3.23008 15.8567 4.16805 15.8989 5.09055C15.9397 5.98 15.9481 6.24719 15.9481 8.5C15.9481 10.7528 15.9397 11.02 15.8989 11.9095C15.8574 12.8242 15.643 13.7805 14.9771 14.4463C14.3007 15.1227 13.3634 15.3259 12.4402 15.3681C11.5508 15.4089 11.2836 15.4173 9.03076 15.4173C6.77795 15.4173 6.51076 15.4089 5.62131 15.3681C4.71358 15.3266 3.74467 15.1073 3.08443 14.4463C2.41154 13.7734 2.20482 12.8263 2.16264 11.9095C2.12186 11.02 2.11342 10.7528 2.11342 8.5C2.11342 6.24719 2.12186 5.98 2.16264 5.09055C2.20412 4.1793 2.42068 3.21742 3.08443 2.55367C3.75943 1.87867 4.70092 1.67406 5.62131 1.63188C6.51076 1.59109 6.77795 1.58266 9.03076 1.58266ZM9.03076 0.0625C6.73928 0.0625 6.4517 0.0723438 5.5517 0.113125C4.2474 0.172891 2.95225 0.535703 2.00936 1.47859C1.06295 2.425 0.703652 3.71734 0.643887 5.02094C0.603105 5.92094 0.593262 6.20852 0.593262 8.5C0.593262 10.7915 0.603105 11.0791 0.643887 11.9791C0.703652 13.282 1.06787 14.5806 2.00936 15.5214C2.95506 16.4671 4.24951 16.8271 5.5517 16.8869C6.4517 16.9277 6.73928 16.9375 9.03076 16.9375C11.3222 16.9375 11.6098 16.9277 12.5098 16.8869C13.8134 16.8271 15.11 16.4636 16.0522 15.5214C16.9993 14.5743 17.3579 13.2827 17.4176 11.9791C17.4584 11.0791 17.4683 10.7915 17.4683 8.5C17.4683 6.20852 17.4584 5.92094 17.4176 5.02094C17.3579 3.71664 16.9944 2.42078 16.0522 1.47859C15.1079 0.534297 13.8099 0.172188 12.5098 0.113125C11.6098 0.0723438 11.3222 0.0625 9.03076 0.0625Z"\n                        fill="url(#paint-linear-instagram-01-contact-us)" />\n                    <path\n                        d="M9.03066 4.16748C6.63792 4.16748 4.698 6.1074 4.698 8.50014C4.698 10.8929 6.63792 12.8328 9.03066 12.8328C11.4234 12.8328 13.3633 10.8929 13.3633 8.50014C13.3633 6.1074 11.4234 4.16748 9.03066 4.16748ZM9.03066 11.3126C7.47745 11.3126 6.21815 10.0533 6.21815 8.50014C6.21815 6.94693 7.47745 5.68764 9.03066 5.68764C10.5839 5.68764 11.8432 6.94693 11.8432 8.50014C11.8432 10.0533 10.5839 11.3126 9.03066 11.3126Z"\n                        fill="url(#paint-linear-instagram-02-contact-us)" />\n                    <path\n                        d="M13.535 5.0084C14.0942 5.0084 14.5475 4.55509 14.5475 3.9959C14.5475 3.43671 14.0942 2.9834 13.535 2.9834C12.9758 2.9834 12.5225 3.43671 12.5225 3.9959C12.5225 4.55509 12.9758 5.0084 13.535 5.0084Z"\n                        fill="url(#paint-linear-instagram-03-contact-us)" />\n                    <defs>\n                        <linearGradient id="paint-linear-instagram-01-contact-us" x1="1.12832" y1="16.9375" x2="18.6826"\n                            y2="15.1946" gradientUnits="userSpaceOnUse">\n                            <stop offset="0%" stop-color="#BCA36B" />\n                            <stop offset="100%" stop-color="#DCC696" />\n                        </linearGradient>\n                        <linearGradient id="paint-linear-instagram-02-contact-us" x1="4.97275" y1="12.8328" x2="13.9869"\n                            y2="11.9378" gradientUnits="userSpaceOnUse">\n                            <stop offset="0%" stop-color="#BCA36B" />\n                            <stop offset="100%" stop-color="#DCC696" />\n                        </linearGradient>\n                        <linearGradient id="paint-linear-instagram-03-contact-us" x1="12.5867" y1="5.0084" x2="14.6932"\n                            y2="4.79925" gradientUnits="userSpaceOnUse">\n                            <stop offset="0%" stop-color="#BCA36B" />\n                            <stop offset="100%" stop-color="#DCC696" />\n                        </linearGradient>\n                    </defs>\n                </svg>\n            </a>\n        </div>\n    </div>\n</div>\n</section>`;
        const templateAboutUs = `<section class="main__start-screen start-screen">\n<div class="start-screen__container">\n    <div class="start-screen__body">\n        <h1 class="start-screen__title">About Us</h1>\n        <div class="start-screen__text">\n            <p>\n                Committed to exceeding customer expectations\n            </p>\n        </div>\n        <button data-ripple="once" data-popup="#call-popup"\n            class="start-screen__button button">\n            Get a free quote\n        </button>\n    </div>\n    <div class="start-screen__image">\n        <img src="img/living-room-with-large-TV.jpeg" loading="lazy" alt="Living room with large TV">\n    </div>\n</div>\n</section>\n<section class="main__who who">\n<div class="who__container">\n    <h2 data-watch data-watch-once class="who__title title title_decor title_color-changeable">Who We\n        Are</h2>\n    <div class="who__text-block text-block">\n        <p>\n            When you choose Home Renovations you are guaranteed superior quality craftsmanship,\n            service, and products. We are the leader in the industry in windows, doors, and exteriors\n            because our team is comprised of experienced qualified craftsman, with internal training,\n            and the highest-level of industry leading standards.\n        </p>\n        <p>\n            When you choose Home Renovations you are guaranteed superior quality craftsmanship,\n            service, and products. We are the leader in the industry in windows, doors, and exteriors\n            because our team is comprised of experienced qualified craftsman, with internal training,\n            and the highest-level of industry leading standards.\n        </p>\n    </div>\n</section>\n<section class="main__work work">\n<div class="work__container">\n    <div class="work__titles">\n        <h2 class="work__headline headline">OUR WORK</h2>\n        <h3 data-watch data-watch-once class="work__title title title_decor">Watch a short video</h3>\n    </div>\n</div>\n<button data-popup="#video-popup" class="work__video-button">Play\n    <img src="img/facade-of-a-house-with-many-large-windows.jpeg" loading="lazy"\n        alt="Facade of a house with many large windows">\n    <svg data-watch data-watch-once width="113" height="113" viewBox="0 0 113 113" fill="none">\n        <rect x="1" y="1" width="111" height="111" stroke="white" stroke-width="2" />\n        <path d="M70 57L50.5 69.9904L50.5 44.0096L70 57Z" fill="#BCA36B" />\n    </svg>\n</button>\n</section>\n<section class="main__milestones milestones">\n<div class="milestones__container">\n    <h2 data-watch data-watch-once class="milestones__title title title_decor title_color-changeable">\n        Milestones</h2>\n    <div class="milestones__text-block text-block">\n        <p>\n            More than 35 years and 2,000 successful home renovations have helped establish Home\n            Renovations reputation as a thriving business. Company founder Mr. Renovation has\n            proven to be one of the city’s most respected and successful entrepreneurs, winning several\n            impressive awards and countless accolades from loyal customers, and being an active\n            participant in the community.\n        </p>\n        <p>\n            More than 35 years and 2,000 successful home renovations have helped establish Home\n            Renovations reputation as a thriving business. Company founder Mr. Renovation has\n            proven to be one of the city’s most respected and successful entrepreneurs, winning several\n            impressive awards and countless accolades from loyal customers, and being an active\n            participant in the community.\n        </p>\n    </div>\n    <ol class="milestones__list list-milestones">\n        <li data-watch data-watch-once class="list-milestones__item item-milestones">\n            <h3 class="item-milestones__title title title_color-changeable">Renovation Innovation</h3>\n            <div class="item-milestones__text">\n                <p>\n                    The company’s knack for innovation remains true with its products, and has helped in\n                    the technology realm, as Mr. Renovation became San Francisco first home renovation\n                    company on\n                    the World Wide Web, with our customer-friendly website.\n                </p>\n            </div>\n        </li>\n        <li data-watch data-watch-once class="list-milestones__item item-milestones">\n            <h3 class="item-milestones__title title title_color-changeable">Growing Reputation</h3>\n            <div class="item-milestones__text">\n                <p>\n                    The company’s knack for innovation remains true with its products, and has helped in\n                    the technology realm, as Mr. Renovation became San Francisco first home renovation\n                    company on\n                    the World Wide Web, with our customer-friendly website.\n                </p>\n            </div>\n        </li>\n        <li data-watch data-watch-once class="list-milestones__item item-milestones">\n            <h3 class="item-milestones__title title title_color-changeable">Expansion</h3>\n            <div class="item-milestones__text">\n                <p>\n                    The company’s knack for innovation remains true with its products, and has helped in\n                    the technology realm, as Mr. Renovation became San Francisco first home renovation\n                    company on\n                    the World Wide Web, with our customer-friendly website.\n                </p>\n            </div>\n        </li>\n        <li data-watch data-watch-once class="list-milestones__item item-milestones">\n            <h3 class="item-milestones__title title title_color-changeable">Award-Winning</h3>\n            <div class="item-milestones__text">\n                <p>\n                    The company’s knack for innovation remains true with its products, and has helped in\n                    the technology realm, as Mr. Renovation became San Francisco first home renovation\n                    company on\n                    the World Wide Web, with our customer-friendly website.\n                </p>\n            </div>\n        </li>\n    </ol>\n</section>`;
        function reloadAdds() {
            initSliders();
            initGallery();
            myScrollWatcher.scrollWatcherRun();
        }
        function script_removeClasses() {
            header.classList.remove("header_light-theme");
            buttonsContainer.classList.remove("no-decor");
        }
        function removeDecor() {
            const activeButton = buttonsContainer.querySelector(".menu__button.active");
            activeButton.classList.add("no-decor");
            buttonsContainer.classList.add("no-decor");
        }
        function executeFunctions(item) {
            script_removeClasses();
            switchButton(item);
            reloadAdds();
        }
        document.addEventListener("click", (e => {
            if (e.target.closest("[data-template-home]")) {
                const homeBtn = document.querySelector("#home-btn");
                tagMain.innerHTML = templateHome;
                executeFunctions(homeBtn);
                digitsCounter();
            }
            if (e.target.closest("[data-template-services]")) {
                const servicesBtn = document.querySelector("#services-btn");
                tagMain.innerHTML = templateServices;
                executeFunctions(servicesBtn);
            }
            if (e.target.closest("[data-template-portfolio]")) {
                const portfolioBtn = document.querySelector("#portfolio-btn");
                tagMain.innerHTML = templatePortfolio;
                executeFunctions(portfolioBtn);
                getSlidersBtn();
            }
            if (e.target.closest("[data-template-faq]")) {
                const faqBtn = document.querySelector("#faq-btn");
                header.classList.add("header_light-theme");
                tagMain.innerHTML = templateFaq;
                buttonsContainer.classList.remove("no-decor");
                switchButton(faqBtn);
                reloadAdds();
            }
            if (e.target.closest("[data-template-contact-us]")) {
                const contactUsBtn = document.querySelector("#contact-us-btn");
                header.classList.add("header_light-theme");
                tagMain.innerHTML = templateContactUs;
                buttonsContainer.classList.remove("no-decor");
                switchButton(contactUsBtn);
                reloadAdds();
            }
            if (e.target.closest("[data-template-about-us]")) {
                tagMain.innerHTML = templateAboutUs;
                header.classList.remove("header_light-theme");
                removeDecor();
                reloadAdds();
            }
        }));
        const LOCAL_STORAGE_KEY = "data-theme";
        const currentKey = localStorage.getItem(LOCAL_STORAGE_KEY);
        const themeButton = document.querySelector(".header__theme-button");
        if (currentKey) if (currentKey == "light") {
            document.documentElement.classList.add("light-theme");
            themeButton.setAttribute("data-theme", "light");
        } else {
            document.documentElement.classList.remove("light-theme");
            themeButton.setAttribute("data-theme", "dark");
        }
        if (themeButton) document.addEventListener("click", (function(e) {
            if (e.target.closest(".header__theme-button")) {
                e.preventDefault();
                toggleThemeAttribute();
            }
        }));
        function toggleThemeAttribute() {
            const buttonAttribute = themeButton.getAttribute("data-theme");
            if (buttonAttribute !== "dark") themeButton.setAttribute("data-theme", "dark"); else themeButton.setAttribute("data-theme", "light");
            const newButtonAttribute = themeButton.getAttribute("data-theme");
            storageSetValue(newButtonAttribute);
        }
        function storageSetValue(newButtonAttribute) {
            localStorage.setItem(LOCAL_STORAGE_KEY, newButtonAttribute);
            const newCurrentKey = localStorage.getItem(LOCAL_STORAGE_KEY);
            toggleThemeClass(newCurrentKey);
        }
        function toggleThemeClass(newCurrentKey) {
            if (newCurrentKey == "light") {
                document.documentElement.classList.add("light-theme");
                themeButton.setAttribute("data-theme", "light");
            } else {
                document.documentElement.classList.remove("light-theme");
                themeButton.setAttribute("data-theme", "dark");
            }
        }
        if (document.querySelector(".info__icon")) document.addEventListener("click", (function(e) {
            if (e.target.closest(".info__icon")) document.documentElement.classList.toggle("drop-open"); else document.documentElement.classList.remove("drop-open");
        }));
        if (document.querySelector(".call__form")) document.addEventListener("click", (function(e) {
            if (e.target.closest(".call__form")) document.documentElement.classList.add("expanded-form"); else document.documentElement.classList.remove("expanded-form");
        }));
        document.addEventListener("click", (e => {
            const listFaqItems = document.querySelectorAll(".list-faq__item");
            const clickedItem = e.target.closest(".list-faq__item");
            if (clickedItem) clickedItem.classList.toggle("expanded-list-faq"); else listFaqItems.forEach((listFaqItem => {
                listFaqItem.classList.remove("expanded-list-faq");
            }));
        }));
        let addedSlidersNum;
        let elementsPerLoad;
        let startIndex = 0;
        function getSlidersBtn() {
            const loadSlidersBtn = document.querySelector(".sliders__more-btn");
            if (loadSlidersBtn) {
                addedSlidersNum = loadSlidersBtn.getAttribute("data-added-num");
                elementsPerLoad = +addedSlidersNum;
            }
            if (loadSlidersBtn) loadSlidersBtn.addEventListener("click", loadMoreSliders);
        }
        async function loadMoreSliders(e) {
            const server = "files/data/more-sliders.json";
            const response = await fetch(server, {
                method: "GET"
            });
            if (response.ok) {
                const responseResult = await response.json();
                const sliders = responseResult.sliders;
                const slicedSliders = sliders.slice(startIndex, startIndex + elementsPerLoad);
                slidersMoreBuild({
                    sliders: slicedSliders
                });
                startIndex += elementsPerLoad;
                if (startIndex >= sliders.length) {
                    const loadSlidersBtn = document.querySelector(".sliders__more-btn");
                    loadSlidersBtn.style.display = "none";
                }
            } else alert("Error");
            e.preventDefault();
        }
        const templateSliderMore = `<article class="sliders__slider sliders__slider_full swiper">\n    <div class="sliders__container sliders__container_bottom-row">\n        <div class="sliders__card card-slider">\n            <h3 class="card-slider__title title">%title%</h3>\n            <div class="card-slider__text">\n                <p>\n                    %text%\n                </p>\n            </div>\n        </div>\n        <div class="sliders__nav-btns buttons-slider">\n            <button aria-label="Previous slide" type="button" class="sliders__swiper-button-prev swiper-button-prev">\n                <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                    <path\n                        d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                        fill="white" />\n                </svg>\n            </button>\n            <button aria-label="Next slide" type="button" class="sliders__swiper-button-next swiper-button-next">\n                <svg width="76" height="16" viewBox="0 0 76 16" fill="none">\n                    <path\n                        d="M75.7072 8.70711C76.0977 8.31658 76.0977 7.68342 75.7072 7.29289L69.3432 0.928932C68.9527 0.538408 68.3195 0.538408 67.929 0.928932C67.5385 1.31946 67.5385 1.95262 67.929 2.34315L73.5859 8L67.929 13.6569C67.5385 14.0474 67.5385 14.6805 67.929 15.0711C68.3195 15.4616 68.9527 15.4616 69.3432 15.0711L75.7072 8.70711ZM0.198486 9H75.0001V7H0.198486V9Z"\n                        fill="white" />\n                </svg>\n            </button>\n        </div>\n    </div>\n    <div data-gallery class="sliders__wrapper swiper-wrapper">\n        <a href="%link%" class="sliders__image swiper-slide">\n            <img src="%image%" loading="lazy"\n                alt="%alt%">\n        </a>\n        <a href="%link%" class="sliders__image swiper-slide">\n            <img src="%image%" loading="lazy"\n                alt="%alt%">\n        </a>\n    </div>\n</article>`;
        function slidersMoreBuild(data) {
            const sliders = data.sliders;
            if (sliders.length) {
                const blockItems = document.querySelector(".sliders__body_more");
                sliders.forEach((slidersItem => {
                    let templateItem = templateSliderMore;
                    for (const key in slidersItem) templateItem = templateItem.replace(`%${key}%`, slidersItem[key]);
                    slidersItem.images.forEach((imagesItem => {
                        for (const key in imagesItem) templateItem = templateItem.replace(`%${key}%`, imagesItem[key]);
                    }));
                    blockItems.insertAdjacentHTML("beforeend", templateItem);
                }));
                initAddedSliders();
                initGallery();
            } else console.log("No data");
        }
        window["FLS"] = false;
        isWebp();
        addTouchClass();
        fullVHfix();
        rippleEffect();
        formFieldsInit({
            viewPass: false,
            autoHeight: false
        });
        formSubmit();
        pageNavigation();
        headerScroll();
        digitsCounter();
    })();
})();