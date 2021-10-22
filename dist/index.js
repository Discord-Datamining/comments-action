var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function () {
    var __webpack_modules__ = { 802: function (e, t, r) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function (e, t, r, s) { if (s === undefined)
                s = r; Object.defineProperty(e, s, { enumerable: true, get: function () { return t[r]; } }); } : function (e, t, r, s) { if (s === undefined)
                s = r; e[s] = t[r]; });
            var i = this && this.__setModuleDefault || (Object.create ? function (e, t) { Object.defineProperty(e, "default", { enumerable: true, value: t }); } : function (e, t) { e["default"] = t; });
            var n = this && this.__importStar || function (e) { if (e && e.__esModule)
                return e; var t = {}; if (e != null)
                for (var r in e)
                    if (r !== "default" && Object.hasOwnProperty.call(e, r))
                        s(t, e, r); i(t, e); return t; };
            Object.defineProperty(t, "__esModule", { value: true });
            t.issue = t.issueCommand = void 0;
            var o = n(r(87));
            var a = r(912);
            function issueCommand(e, t, r) { var s = new Command(e, t, r); process.stdout.write(s.toString() + o.EOL); }
            t.issueCommand = issueCommand;
            function issue(e, t) {
                if (t === void 0) { t = ""; }
                issueCommand(e, {}, t);
            }
            t.issue = issue;
            var u = "::";
            var Command = /** @class */ (function () {
                function Command(e, t, r) {
                    if (!e) {
                        e = "missing.command";
                    }
                    this.command = e;
                    this.properties = t;
                    this.message = r;
                }
                Command.prototype.toString = function () { var e = u + this.command; if (this.properties && Object.keys(this.properties).length > 0) {
                    e += " ";
                    var t_1 = true;
                    for (var r_1 in this.properties) {
                        if (this.properties.hasOwnProperty(r_1)) {
                            var s_1 = this.properties[r_1];
                            if (s_1) {
                                if (t_1) {
                                    t_1 = false;
                                }
                                else {
                                    e += ",";
                                }
                                e += r_1 + "=" + escapeProperty(s_1);
                            }
                        }
                    }
                } e += "" + u + escapeData(this.message); return e; };
                return Command;
            }());
            function escapeData(e) { return a.toCommandValue(e).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A"); }
            function escapeProperty(e) { return a.toCommandValue(e).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/:/g, "%3A").replace(/,/g, "%2C"); }
        }, 355: function (e, t, r) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function (e, t, r, s) { if (s === undefined)
                s = r; Object.defineProperty(e, s, { enumerable: true, get: function () { return t[r]; } }); } : function (e, t, r, s) { if (s === undefined)
                s = r; e[s] = t[r]; });
            var i = this && this.__setModuleDefault || (Object.create ? function (e, t) { Object.defineProperty(e, "default", { enumerable: true, value: t }); } : function (e, t) { e["default"] = t; });
            var n = this && this.__importStar || function (e) { if (e && e.__esModule)
                return e; var t = {}; if (e != null)
                for (var r in e)
                    if (r !== "default" && Object.hasOwnProperty.call(e, r))
                        s(t, e, r); i(t, e); return t; };
            var o = this && this.__awaiter || function (e, t, r, s) { function adopt(e) { return e instanceof r ? e : new r((function (t) { t(e); })); } return new (r || (r = Promise))((function (r, i) { function fulfilled(e) { try {
                step(s.next(e));
            }
            catch (e) {
                i(e);
            } } function rejected(e) { try {
                step(s["throw"](e));
            }
            catch (e) {
                i(e);
            } } function step(e) { e.done ? r(e.value) : adopt(e.value).then(fulfilled, rejected); } step((s = s.apply(e, t || [])).next()); })); };
            Object.defineProperty(t, "__esModule", { value: true });
            t.getState = t.saveState = t.group = t.endGroup = t.startGroup = t.info = t.warning = t.error = t.debug = t.isDebug = t.setFailed = t.setCommandEcho = t.setOutput = t.getBooleanInput = t.getMultilineInput = t.getInput = t.addPath = t.setSecret = t.exportVariable = t.ExitCode = void 0;
            var a = r(802);
            var u = r(473);
            var c = r(912);
            var l = n(r(87));
            var p = n(r(622));
            var h;
            (function (e) { e[e["Success"] = 0] = "Success"; e[e["Failure"] = 1] = "Failure"; })(h = t.ExitCode || (t.ExitCode = {}));
            function exportVariable(e, t) { var r = c.toCommandValue(t); process.env[e] = r; var s = process.env["GITHUB_ENV"] || ""; if (s) {
                var t_2 = "_GitHubActionsFileCommandDelimeter_";
                var s_2 = e + "<<" + t_2 + l.EOL + r + l.EOL + t_2;
                u.issueCommand("ENV", s_2);
            }
            else {
                a.issueCommand("set-env", { name: e }, r);
            } }
            t.exportVariable = exportVariable;
            function setSecret(e) { a.issueCommand("add-mask", {}, e); }
            t.setSecret = setSecret;
            function addPath(e) { var t = process.env["GITHUB_PATH"] || ""; if (t) {
                u.issueCommand("PATH", e);
            }
            else {
                a.issueCommand("add-path", {}, e);
            } process.env["PATH"] = "" + e + p.delimiter + process.env["PATH"]; }
            t.addPath = addPath;
            function getInput(e, t) { var r = process.env["INPUT_" + e.replace(/ /g, "_").toUpperCase()] || ""; if (t && t.required && !r) {
                throw new Error("Input required and not supplied: " + e);
            } if (t && t.trimWhitespace === false) {
                return r;
            } return r.trim(); }
            t.getInput = getInput;
            function getMultilineInput(e, t) { var r = getInput(e, t).split("\n").filter((function (e) { return e !== ""; })); return r; }
            t.getMultilineInput = getMultilineInput;
            function getBooleanInput(e, t) { var r = ["true", "True", "TRUE"]; var s = ["false", "False", "FALSE"]; var i = getInput(e, t); if (r.includes(i))
                return true; if (s.includes(i))
                return false; throw new TypeError("Input does not meet YAML 1.2 \"Core Schema\" specification: " + e + "\n" + "Support boolean input list: `true | True | TRUE | false | False | FALSE`"); }
            t.getBooleanInput = getBooleanInput;
            function setOutput(e, t) { process.stdout.write(l.EOL); a.issueCommand("set-output", { name: e }, t); }
            t.setOutput = setOutput;
            function setCommandEcho(e) { a.issue("echo", e ? "on" : "off"); }
            t.setCommandEcho = setCommandEcho;
            function setFailed(e) { process.exitCode = h.Failure; error(e); }
            t.setFailed = setFailed;
            function isDebug() { return process.env["RUNNER_DEBUG"] === "1"; }
            t.isDebug = isDebug;
            function debug(e) { a.issueCommand("debug", {}, e); }
            t.debug = debug;
            function error(e) { a.issue("error", e instanceof Error ? e.toString() : e); }
            t.error = error;
            function warning(e) { a.issue("warning", e instanceof Error ? e.toString() : e); }
            t.warning = warning;
            function info(e) { process.stdout.write(e + l.EOL); }
            t.info = info;
            function startGroup(e) { a.issue("group", e); }
            t.startGroup = startGroup;
            function endGroup() { a.issue("endgroup"); }
            t.endGroup = endGroup;
            function group(e, t) { return o(this, void 0, void 0, (function () { var r; return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startGroup(e);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, t()];
                    case 2:
                        r = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        endGroup();
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/, r];
                }
            }); })); }
            t.group = group;
            function saveState(e, t) { a.issueCommand("save-state", { name: e }, t); }
            t.saveState = saveState;
            function getState(e) { return process.env["STATE_" + e] || ""; }
            t.getState = getState;
        }, 473: function (e, t, r) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function (e, t, r, s) { if (s === undefined)
                s = r; Object.defineProperty(e, s, { enumerable: true, get: function () { return t[r]; } }); } : function (e, t, r, s) { if (s === undefined)
                s = r; e[s] = t[r]; });
            var i = this && this.__setModuleDefault || (Object.create ? function (e, t) { Object.defineProperty(e, "default", { enumerable: true, value: t }); } : function (e, t) { e["default"] = t; });
            var n = this && this.__importStar || function (e) { if (e && e.__esModule)
                return e; var t = {}; if (e != null)
                for (var r in e)
                    if (r !== "default" && Object.hasOwnProperty.call(e, r))
                        s(t, e, r); i(t, e); return t; };
            Object.defineProperty(t, "__esModule", { value: true });
            t.issueCommand = void 0;
            var o = n(r(747));
            var a = n(r(87));
            var u = r(912);
            function issueCommand(e, t) { var r = process.env["GITHUB_" + e]; if (!r) {
                throw new Error("Unable to find environment variable for file command " + e);
            } if (!o.existsSync(r)) {
                throw new Error("Missing file at path: " + r);
            } o.appendFileSync(r, "" + u.toCommandValue(t) + a.EOL, { encoding: "utf8" }); }
            t.issueCommand = issueCommand;
        }, 912: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            t.toCommandValue = void 0;
            function toCommandValue(e) { if (e === null || e === undefined) {
                return "";
            }
            else if (typeof e === "string" || e instanceof String) {
                return e;
            } return JSON.stringify(e); }
            t.toCommandValue = toCommandValue;
        }, 822: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            t.Context = void 0;
            var s = r(747);
            var i = r(87);
            var Context = /** @class */ (function () {
                function Context() {
                    var e, t, r;
                    this.payload = {};
                    if (process.env.GITHUB_EVENT_PATH) {
                        if (s.existsSync(process.env.GITHUB_EVENT_PATH)) {
                            this.payload = JSON.parse(s.readFileSync(process.env.GITHUB_EVENT_PATH, { encoding: "utf8" }));
                        }
                        else {
                            var e_1 = process.env.GITHUB_EVENT_PATH;
                            process.stdout.write("GITHUB_EVENT_PATH " + e_1 + " does not exist" + i.EOL);
                        }
                    }
                    this.eventName = process.env.GITHUB_EVENT_NAME;
                    this.sha = process.env.GITHUB_SHA;
                    this.ref = process.env.GITHUB_REF;
                    this.workflow = process.env.GITHUB_WORKFLOW;
                    this.action = process.env.GITHUB_ACTION;
                    this.actor = process.env.GITHUB_ACTOR;
                    this.job = process.env.GITHUB_JOB;
                    this.runNumber = parseInt(process.env.GITHUB_RUN_NUMBER, 10);
                    this.runId = parseInt(process.env.GITHUB_RUN_ID, 10);
                    this.apiUrl = (e = process.env.GITHUB_API_URL) !== null && e !== void 0 ? e : "https://api.github.com";
                    this.serverUrl = (t = process.env.GITHUB_SERVER_URL) !== null && t !== void 0 ? t : "https://github.com";
                    this.graphqlUrl = (r = process.env.GITHUB_GRAPHQL_URL) !== null && r !== void 0 ? r : "https://api.github.com/graphql";
                }
                Object.defineProperty(Context.prototype, "issue", {
                    get: function () { var e = this.payload; return Object.assign(Object.assign({}, this.repo), { number: (e.issue || e.pull_request || e).number }); },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Context.prototype, "repo", {
                    get: function () { if (process.env.GITHUB_REPOSITORY) {
                        var _a = process.env.GITHUB_REPOSITORY.split("/"), e_2 = _a[0], t_3 = _a[1];
                        return { owner: e_2, repo: t_3 };
                    } if (this.payload.repository) {
                        return { owner: this.payload.repository.owner.login, repo: this.payload.repository.name };
                    } throw new Error("context.repo requires a GITHUB_REPOSITORY environment variable like 'owner/repo'"); },
                    enumerable: false,
                    configurable: true
                });
                return Context;
            }());
            t.Context = Context;
        }, 262: function (e, t, r) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function (e, t, r, s) { if (s === undefined)
                s = r; Object.defineProperty(e, s, { enumerable: true, get: function () { return t[r]; } }); } : function (e, t, r, s) { if (s === undefined)
                s = r; e[s] = t[r]; });
            var i = this && this.__setModuleDefault || (Object.create ? function (e, t) { Object.defineProperty(e, "default", { enumerable: true, value: t }); } : function (e, t) { e["default"] = t; });
            var n = this && this.__importStar || function (e) { if (e && e.__esModule)
                return e; var t = {}; if (e != null)
                for (var r in e)
                    if (r !== "default" && Object.hasOwnProperty.call(e, r))
                        s(t, e, r); i(t, e); return t; };
            Object.defineProperty(t, "__esModule", { value: true });
            t.getOctokit = t.context = void 0;
            var o = n(r(822));
            var a = r(423);
            t.context = new o.Context;
            function getOctokit(e, t) { return new a.GitHub(a.getOctokitOptions(e, t)); }
            t.getOctokit = getOctokit;
        }, 103: function (e, t, r) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function (e, t, r, s) { if (s === undefined)
                s = r; Object.defineProperty(e, s, { enumerable: true, get: function () { return t[r]; } }); } : function (e, t, r, s) { if (s === undefined)
                s = r; e[s] = t[r]; });
            var i = this && this.__setModuleDefault || (Object.create ? function (e, t) { Object.defineProperty(e, "default", { enumerable: true, value: t }); } : function (e, t) { e["default"] = t; });
            var n = this && this.__importStar || function (e) { if (e && e.__esModule)
                return e; var t = {}; if (e != null)
                for (var r in e)
                    if (r !== "default" && Object.hasOwnProperty.call(e, r))
                        s(t, e, r); i(t, e); return t; };
            Object.defineProperty(t, "__esModule", { value: true });
            t.getApiBaseUrl = t.getProxyAgent = t.getAuthString = void 0;
            var o = n(r(364));
            function getAuthString(e, t) { if (!e && !t.auth) {
                throw new Error("Parameter token or opts.auth is required");
            }
            else if (e && t.auth) {
                throw new Error("Parameters token and opts.auth may not both be specified");
            } return typeof t.auth === "string" ? t.auth : "token " + e; }
            t.getAuthString = getAuthString;
            function getProxyAgent(e) { var t = new o.HttpClient; return t.getAgent(e); }
            t.getProxyAgent = getProxyAgent;
            function getApiBaseUrl() { return process.env["GITHUB_API_URL"] || "https://api.github.com"; }
            t.getApiBaseUrl = getApiBaseUrl;
        }, 423: function (e, t, r) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function (e, t, r, s) { if (s === undefined)
                s = r; Object.defineProperty(e, s, { enumerable: true, get: function () { return t[r]; } }); } : function (e, t, r, s) { if (s === undefined)
                s = r; e[s] = t[r]; });
            var i = this && this.__setModuleDefault || (Object.create ? function (e, t) { Object.defineProperty(e, "default", { enumerable: true, value: t }); } : function (e, t) { e["default"] = t; });
            var n = this && this.__importStar || function (e) { if (e && e.__esModule)
                return e; var t = {}; if (e != null)
                for (var r in e)
                    if (r !== "default" && Object.hasOwnProperty.call(e, r))
                        s(t, e, r); i(t, e); return t; };
            Object.defineProperty(t, "__esModule", { value: true });
            t.getOctokitOptions = t.GitHub = t.context = void 0;
            var o = n(r(822));
            var a = n(r(103));
            var u = r(976);
            var c = r(389);
            var l = r(324);
            t.context = new o.Context;
            var p = a.getApiBaseUrl();
            var h = { baseUrl: p, request: { agent: a.getProxyAgent(p) } };
            t.GitHub = u.Octokit.plugin(c.restEndpointMethods, l.paginateRest).defaults(h);
            function getOctokitOptions(e, t) { var r = Object.assign({}, t || {}); var s = a.getAuthString(e, r); if (s) {
                r.auth = s;
            } return r; }
            t.getOctokitOptions = getOctokitOptions;
        }, 364: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            var s = r(605);
            var i = r(211);
            var n = r(85);
            var o;
            var a;
            (function (e) { e[e["OK"] = 200] = "OK"; e[e["MultipleChoices"] = 300] = "MultipleChoices"; e[e["MovedPermanently"] = 301] = "MovedPermanently"; e[e["ResourceMoved"] = 302] = "ResourceMoved"; e[e["SeeOther"] = 303] = "SeeOther"; e[e["NotModified"] = 304] = "NotModified"; e[e["UseProxy"] = 305] = "UseProxy"; e[e["SwitchProxy"] = 306] = "SwitchProxy"; e[e["TemporaryRedirect"] = 307] = "TemporaryRedirect"; e[e["PermanentRedirect"] = 308] = "PermanentRedirect"; e[e["BadRequest"] = 400] = "BadRequest"; e[e["Unauthorized"] = 401] = "Unauthorized"; e[e["PaymentRequired"] = 402] = "PaymentRequired"; e[e["Forbidden"] = 403] = "Forbidden"; e[e["NotFound"] = 404] = "NotFound"; e[e["MethodNotAllowed"] = 405] = "MethodNotAllowed"; e[e["NotAcceptable"] = 406] = "NotAcceptable"; e[e["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired"; e[e["RequestTimeout"] = 408] = "RequestTimeout"; e[e["Conflict"] = 409] = "Conflict"; e[e["Gone"] = 410] = "Gone"; e[e["TooManyRequests"] = 429] = "TooManyRequests"; e[e["InternalServerError"] = 500] = "InternalServerError"; e[e["NotImplemented"] = 501] = "NotImplemented"; e[e["BadGateway"] = 502] = "BadGateway"; e[e["ServiceUnavailable"] = 503] = "ServiceUnavailable"; e[e["GatewayTimeout"] = 504] = "GatewayTimeout"; })(a = t.HttpCodes || (t.HttpCodes = {}));
            var u;
            (function (e) { e["Accept"] = "accept"; e["ContentType"] = "content-type"; })(u = t.Headers || (t.Headers = {}));
            var c;
            (function (e) { e["ApplicationJson"] = "application/json"; })(c = t.MediaTypes || (t.MediaTypes = {}));
            function getProxyUrl(e) { var t = n.getProxyUrl(new URL(e)); return t ? t.href : ""; }
            t.getProxyUrl = getProxyUrl;
            var l = [a.MovedPermanently, a.ResourceMoved, a.SeeOther, a.TemporaryRedirect, a.PermanentRedirect];
            var p = [a.BadGateway, a.ServiceUnavailable, a.GatewayTimeout];
            var h = ["OPTIONS", "GET", "DELETE", "HEAD"];
            var d = 10;
            var m = 5;
            var HttpClientError = /** @class */ (function (_super) {
                __extends(HttpClientError, _super);
                function HttpClientError(e, t) {
                    var _this = _super.call(this, e) || this;
                    _this.name = "HttpClientError";
                    _this.statusCode = t;
                    Object.setPrototypeOf(_this, HttpClientError.prototype);
                    return _this;
                }
                return HttpClientError;
            }(Error));
            t.HttpClientError = HttpClientError;
            var HttpClientResponse = /** @class */ (function () {
                function HttpClientResponse(e) {
                    this.message = e;
                }
                HttpClientResponse.prototype.readBody = function () {
                    var _this = this;
                    return new Promise((function (e, t) { return __awaiter(_this, void 0, void 0, function () { var r; return __generator(this, function (_a) {
                        r = Buffer.alloc(0);
                        this.message.on("data", (function (e) { r = Buffer.concat([r, e]); }));
                        this.message.on("end", (function () { e(r.toString()); }));
                        return [2 /*return*/];
                    }); }); }));
                };
                return HttpClientResponse;
            }());
            t.HttpClientResponse = HttpClientResponse;
            function isHttps(e) { var t = new URL(e); return t.protocol === "https:"; }
            t.isHttps = isHttps;
            var HttpClient = /** @class */ (function () {
                function HttpClient(e, t, r) {
                    this._ignoreSslError = false;
                    this._allowRedirects = true;
                    this._allowRedirectDowngrade = false;
                    this._maxRedirects = 50;
                    this._allowRetries = false;
                    this._maxRetries = 1;
                    this._keepAlive = false;
                    this._disposed = false;
                    this.userAgent = e;
                    this.handlers = t || [];
                    this.requestOptions = r;
                    if (r) {
                        if (r.ignoreSslError != null) {
                            this._ignoreSslError = r.ignoreSslError;
                        }
                        this._socketTimeout = r.socketTimeout;
                        if (r.allowRedirects != null) {
                            this._allowRedirects = r.allowRedirects;
                        }
                        if (r.allowRedirectDowngrade != null) {
                            this._allowRedirectDowngrade = r.allowRedirectDowngrade;
                        }
                        if (r.maxRedirects != null) {
                            this._maxRedirects = Math.max(r.maxRedirects, 0);
                        }
                        if (r.keepAlive != null) {
                            this._keepAlive = r.keepAlive;
                        }
                        if (r.allowRetries != null) {
                            this._allowRetries = r.allowRetries;
                        }
                        if (r.maxRetries != null) {
                            this._maxRetries = r.maxRetries;
                        }
                    }
                }
                HttpClient.prototype.options = function (e, t) { return this.request("OPTIONS", e, null, t || {}); };
                HttpClient.prototype.get = function (e, t) { return this.request("GET", e, null, t || {}); };
                HttpClient.prototype.del = function (e, t) { return this.request("DELETE", e, null, t || {}); };
                HttpClient.prototype.post = function (e, t, r) { return this.request("POST", e, t, r || {}); };
                HttpClient.prototype.patch = function (e, t, r) { return this.request("PATCH", e, t, r || {}); };
                HttpClient.prototype.put = function (e, t, r) { return this.request("PUT", e, t, r || {}); };
                HttpClient.prototype.head = function (e, t) { return this.request("HEAD", e, null, t || {}); };
                HttpClient.prototype.sendStream = function (e, t, r, s) { return this.request(e, t, r, s); };
                HttpClient.prototype.getJson = function (e, t) {
                    if (t === void 0) { t = {}; }
                    return __awaiter(this, void 0, void 0, function () { var r; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                t[u.Accept] = this._getExistingOrDefaultHeader(t, u.Accept, c.ApplicationJson);
                                return [4 /*yield*/, this.get(e, t)];
                            case 1:
                                r = _a.sent();
                                return [2 /*return*/, this._processResponse(r, this.requestOptions)];
                        }
                    }); });
                };
                HttpClient.prototype.postJson = function (e, t, r) {
                    if (r === void 0) { r = {}; }
                    return __awaiter(this, void 0, void 0, function () { var s, i; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                s = JSON.stringify(t, null, 2);
                                r[u.Accept] = this._getExistingOrDefaultHeader(r, u.Accept, c.ApplicationJson);
                                r[u.ContentType] = this._getExistingOrDefaultHeader(r, u.ContentType, c.ApplicationJson);
                                return [4 /*yield*/, this.post(e, s, r)];
                            case 1:
                                i = _a.sent();
                                return [2 /*return*/, this._processResponse(i, this.requestOptions)];
                        }
                    }); });
                };
                HttpClient.prototype.putJson = function (e, t, r) {
                    if (r === void 0) { r = {}; }
                    return __awaiter(this, void 0, void 0, function () { var s, i; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                s = JSON.stringify(t, null, 2);
                                r[u.Accept] = this._getExistingOrDefaultHeader(r, u.Accept, c.ApplicationJson);
                                r[u.ContentType] = this._getExistingOrDefaultHeader(r, u.ContentType, c.ApplicationJson);
                                return [4 /*yield*/, this.put(e, s, r)];
                            case 1:
                                i = _a.sent();
                                return [2 /*return*/, this._processResponse(i, this.requestOptions)];
                        }
                    }); });
                };
                HttpClient.prototype.patchJson = function (e, t, r) {
                    if (r === void 0) { r = {}; }
                    return __awaiter(this, void 0, void 0, function () { var s, i; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                s = JSON.stringify(t, null, 2);
                                r[u.Accept] = this._getExistingOrDefaultHeader(r, u.Accept, c.ApplicationJson);
                                r[u.ContentType] = this._getExistingOrDefaultHeader(r, u.ContentType, c.ApplicationJson);
                                return [4 /*yield*/, this.patch(e, s, r)];
                            case 1:
                                i = _a.sent();
                                return [2 /*return*/, this._processResponse(i, this.requestOptions)];
                        }
                    }); });
                };
                HttpClient.prototype.request = function (e, t, r, s) {
                    return __awaiter(this, void 0, void 0, function () { var i, n, o, u, c, e_3, t_4, t_5, o_1, a_1, e_4; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (this._disposed) {
                                    throw new Error("Client has already been disposed.");
                                }
                                i = new URL(t);
                                n = this._prepareRequest(e, i, s);
                                o = this._allowRetries && h.indexOf(e) != -1 ? this._maxRetries + 1 : 1;
                                u = 0;
                                _a.label = 1;
                            case 1:
                                if (!(u < o)) return [3 /*break*/, 10];
                                return [4 /*yield*/, this.requestRaw(n, r)];
                            case 2:
                                c = _a.sent();
                                if (c && c.message && c.message.statusCode === a.Unauthorized) {
                                    e_3 = void 0;
                                    for (t_4 = 0; t_4 < this.handlers.length; t_4++) {
                                        if (this.handlers[t_4].canHandleAuthentication(c)) {
                                            e_3 = this.handlers[t_4];
                                            break;
                                        }
                                    }
                                    if (e_3) {
                                        return [2 /*return*/, e_3.handleAuthentication(this, n, r)];
                                    }
                                    else {
                                        return [2 /*return*/, c];
                                    }
                                }
                                t_5 = this._maxRedirects;
                                _a.label = 3;
                            case 3:
                                if (!(l.indexOf(c.message.statusCode) != -1 && this._allowRedirects && t_5 > 0)) return [3 /*break*/, 6];
                                o_1 = c.message.headers["location"];
                                if (!o_1) {
                                    return [3 /*break*/, 6];
                                }
                                a_1 = new URL(o_1);
                                if (i.protocol == "https:" && i.protocol != a_1.protocol && !this._allowRedirectDowngrade) {
                                    throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");
                                }
                                return [4 /*yield*/, c.readBody()];
                            case 4:
                                _a.sent();
                                if (a_1.hostname !== i.hostname) {
                                    for (e_4 in s) {
                                        if (e_4.toLowerCase() === "authorization") {
                                            delete s[e_4];
                                        }
                                    }
                                }
                                n = this._prepareRequest(e, a_1, s);
                                return [4 /*yield*/, this.requestRaw(n, r)];
                            case 5:
                                c = _a.sent();
                                t_5--;
                                return [3 /*break*/, 3];
                            case 6:
                                if (p.indexOf(c.message.statusCode) == -1) {
                                    return [2 /*return*/, c];
                                }
                                u += 1;
                                if (!(u < o)) return [3 /*break*/, 9];
                                return [4 /*yield*/, c.readBody()];
                            case 7:
                                _a.sent();
                                return [4 /*yield*/, this._performExponentialBackoff(u)];
                            case 8:
                                _a.sent();
                                _a.label = 9;
                            case 9: return [3 /*break*/, 1];
                            case 10: return [2 /*return*/, c];
                        }
                    }); });
                };
                HttpClient.prototype.dispose = function () { if (this._agent) {
                    this._agent.destroy();
                } this._disposed = true; };
                HttpClient.prototype.requestRaw = function (e, t) {
                    var _this = this;
                    return new Promise((function (r, s) { var callbackForResult = function (e, t) { if (e) {
                        s(e);
                    } r(t); }; _this.requestRawWithCallback(e, t, callbackForResult); }));
                };
                HttpClient.prototype.requestRawWithCallback = function (e, t, r) { var s; if (typeof t === "string") {
                    e.options.headers["Content-Length"] = Buffer.byteLength(t, "utf8");
                } var i = false; var handleResult = function (e, t) { if (!i) {
                    i = true;
                    r(e, t);
                } }; var n = e.httpModule.request(e.options, (function (e) { var t = new HttpClientResponse(e); handleResult(null, t); })); n.on("socket", (function (e) { s = e; })); n.setTimeout(this._socketTimeout || 3 * 6e4, (function () { if (s) {
                    s.end();
                } handleResult(new Error("Request timeout: " + e.options.path), null); })); n.on("error", (function (e) { handleResult(e, null); })); if (t && typeof t === "string") {
                    n.write(t, "utf8");
                } if (t && typeof t !== "string") {
                    t.on("close", (function () { n.end(); }));
                    t.pipe(n);
                }
                else {
                    n.end();
                } };
                HttpClient.prototype.getAgent = function (e) { var t = new URL(e); return this._getAgent(t); };
                HttpClient.prototype._prepareRequest = function (e, t, r) { var n = {}; n.parsedUrl = t; var o = n.parsedUrl.protocol === "https:"; n.httpModule = o ? i : s; var a = o ? 443 : 80; n.options = {}; n.options.host = n.parsedUrl.hostname; n.options.port = n.parsedUrl.port ? parseInt(n.parsedUrl.port) : a; n.options.path = (n.parsedUrl.pathname || "") + (n.parsedUrl.search || ""); n.options.method = e; n.options.headers = this._mergeHeaders(r); if (this.userAgent != null) {
                    n.options.headers["user-agent"] = this.userAgent;
                } n.options.agent = this._getAgent(n.parsedUrl); if (this.handlers) {
                    this.handlers.forEach((function (e) { e.prepareRequest(n.options); }));
                } return n; };
                HttpClient.prototype._mergeHeaders = function (e) { var lowercaseKeys = function (e) { return Object.keys(e).reduce((function (t, r) { return (t[r.toLowerCase()] = e[r], t); }), {}); }; if (this.requestOptions && this.requestOptions.headers) {
                    return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(e));
                } return lowercaseKeys(e || {}); };
                HttpClient.prototype._getExistingOrDefaultHeader = function (e, t, r) { var lowercaseKeys = function (e) { return Object.keys(e).reduce((function (t, r) { return (t[r.toLowerCase()] = e[r], t); }), {}); }; var s; if (this.requestOptions && this.requestOptions.headers) {
                    s = lowercaseKeys(this.requestOptions.headers)[t];
                } return e[t] || s || r; };
                HttpClient.prototype._getAgent = function (e) { var t; var a = n.getProxyUrl(e); var u = a && a.hostname; if (this._keepAlive && u) {
                    t = this._proxyAgent;
                } if (this._keepAlive && !u) {
                    t = this._agent;
                } if (!!t) {
                    return t;
                } var c = e.protocol === "https:"; var l = 100; if (!!this.requestOptions) {
                    l = this.requestOptions.maxSockets || s.globalAgent.maxSockets;
                } if (u) {
                    if (!o) {
                        o = r(565);
                    }
                    var e_5 = { maxSockets: l, keepAlive: this._keepAlive, proxy: __assign(__assign({}, (a.username || a.password) && { proxyAuth: a.username + ":" + a.password }), { host: a.hostname, port: a.port }) };
                    var s_3;
                    var i_1 = a.protocol === "https:";
                    if (c) {
                        s_3 = i_1 ? o.httpsOverHttps : o.httpsOverHttp;
                    }
                    else {
                        s_3 = i_1 ? o.httpOverHttps : o.httpOverHttp;
                    }
                    t = s_3(e_5);
                    this._proxyAgent = t;
                } if (this._keepAlive && !t) {
                    var e_6 = { keepAlive: this._keepAlive, maxSockets: l };
                    t = c ? new i.Agent(e_6) : new s.Agent(e_6);
                    this._agent = t;
                } if (!t) {
                    t = c ? i.globalAgent : s.globalAgent;
                } if (c && this._ignoreSslError) {
                    t.options = Object.assign(t.options || {}, { rejectUnauthorized: false });
                } return t; };
                HttpClient.prototype._performExponentialBackoff = function (e) { e = Math.min(d, e); var t = m * Math.pow(2, e); return new Promise((function (e) { return setTimeout((function () { return e(); }), t); })); };
                HttpClient.dateTimeDeserializer = function (e, t) { if (typeof t === "string") {
                    var e_7 = new Date(t);
                    if (!isNaN(e_7.valueOf())) {
                        return e_7;
                    }
                } return t; };
                HttpClient.prototype._processResponse = function (e, t) {
                    return __awaiter(this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            return [2 /*return*/, new Promise((function (r, s) { return __awaiter(_this, void 0, void 0, function () { var i, n, o, u, e_8, e_9, t_6; return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            i = e.message.statusCode;
                                            n = { statusCode: i, result: null, headers: {} };
                                            if (i == a.NotFound) {
                                                r(n);
                                            }
                                            _a.label = 1;
                                        case 1:
                                            _a.trys.push([1, 3, , 4]);
                                            return [4 /*yield*/, e.readBody()];
                                        case 2:
                                            u = _a.sent();
                                            if (u && u.length > 0) {
                                                if (t && t.deserializeDates) {
                                                    o = JSON.parse(u, HttpClient.dateTimeDeserializer);
                                                }
                                                else {
                                                    o = JSON.parse(u);
                                                }
                                                n.result = o;
                                            }
                                            n.headers = e.message.headers;
                                            return [3 /*break*/, 4];
                                        case 3:
                                            e_8 = _a.sent();
                                            return [3 /*break*/, 4];
                                        case 4:
                                            if (i > 299) {
                                                if (o && o.message) {
                                                    e_9 = o.message;
                                                }
                                                else if (u && u.length > 0) {
                                                    e_9 = u;
                                                }
                                                else {
                                                    e_9 = "Failed request: (" + i + ")";
                                                }
                                                t_6 = new HttpClientError(e_9, i);
                                                t_6.result = n.result;
                                                s(t_6);
                                            }
                                            else {
                                                r(n);
                                            }
                                            return [2 /*return*/];
                                    }
                                }); }); }))];
                        });
                    });
                };
                return HttpClient;
            }());
            t.HttpClient = HttpClient;
        }, 85: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            function getProxyUrl(e) { var t = e.protocol === "https:"; var r; if (checkBypass(e)) {
                return r;
            } var s; if (t) {
                s = process.env["https_proxy"] || process.env["HTTPS_PROXY"];
            }
            else {
                s = process.env["http_proxy"] || process.env["HTTP_PROXY"];
            } if (s) {
                r = new URL(s);
            } return r; }
            t.getProxyUrl = getProxyUrl;
            function checkBypass(e) { if (!e.hostname) {
                return false;
            } var t = process.env["no_proxy"] || process.env["NO_PROXY"] || ""; if (!t) {
                return false;
            } var r; if (e.port) {
                r = Number(e.port);
            }
            else if (e.protocol === "http:") {
                r = 80;
            }
            else if (e.protocol === "https:") {
                r = 443;
            } var s = [e.hostname.toUpperCase()]; if (typeof r === "number") {
                s.push(s[0] + ":" + r);
            } var _loop_1 = function (e_10) {
                if (s.some((function (t) { return t === e_10; }))) {
                    return { value: true };
                }
            }; for (var _i = 0, _a = t.split(",").map((function (e) { return e.trim().toUpperCase(); })).filter((function (e) { return e; })); _i < _a.length; _i++) {
                var e_10 = _a[_i];
                var state_1 = _loop_1(e_10);
                if (typeof state_1 === "object")
                    return state_1.value;
            } return false; }
            t.checkBypass = checkBypass;
        }, 382: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            function auth(e) {
                return __awaiter(this, void 0, void 0, function () { var t; return __generator(this, function (_a) {
                    t = e.split(/\./).length === 3 ? "app" : /^v\d+\./.test(e) ? "installation" : "oauth";
                    return [2 /*return*/, { type: "token", token: e, tokenType: t }];
                }); });
            }
            function withAuthorizationPrefix(e) { if (e.split(/\./).length === 3) {
                return "bearer " + e;
            } return "token " + e; }
            function hook(e, t, r, s) {
                return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_a) {
                    i = t.endpoint.merge(r, s);
                    i.headers.authorization = withAuthorizationPrefix(e);
                    return [2 /*return*/, t(i)];
                }); });
            }
            var r = function createTokenAuth(e) { if (!e) {
                throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
            } if (typeof e !== "string") {
                throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
            } e = e.replace(/^(token|bearer) +/i, ""); return Object.assign(auth.bind(null, e), { hook: hook.bind(null, e) }); };
            t.createTokenAuth = r;
        }, 976: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            var s = r(447);
            var i = r(837);
            var n = r(723);
            var o = r(568);
            var a = r(382);
            function _objectWithoutPropertiesLoose(e, t) { if (e == null)
                return {}; var r = {}; var s = Object.keys(e); var i, n; for (n = 0; n < s.length; n++) {
                i = s[n];
                if (t.indexOf(i) >= 0)
                    continue;
                r[i] = e[i];
            } return r; }
            function _objectWithoutProperties(e, t) { if (e == null)
                return {}; var r = _objectWithoutPropertiesLoose(e, t); var s, i; if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                for (i = 0; i < n.length; i++) {
                    s = n[i];
                    if (t.indexOf(s) >= 0)
                        continue;
                    if (!Object.prototype.propertyIsEnumerable.call(e, s))
                        continue;
                    r[s] = e[s];
                }
            } return r; }
            var u = "3.5.1";
            var c = ["authStrategy"];
            var Octokit = /** @class */ (function () {
                function Octokit(e) {
                    var _this = this;
                    if (e === void 0) { e = {}; }
                    var t = new i.Collection;
                    var r = { baseUrl: n.request.endpoint.DEFAULTS.baseUrl, headers: {}, request: Object.assign({}, e.request, { hook: t.bind(null, "request") }), mediaType: { previews: [], format: "" } };
                    r.headers["user-agent"] = [e.userAgent, "octokit-core.js/" + u + " " + s.getUserAgent()].filter(Boolean).join(" ");
                    if (e.baseUrl) {
                        r.baseUrl = e.baseUrl;
                    }
                    if (e.previews) {
                        r.mediaType.previews = e.previews;
                    }
                    if (e.timeZone) {
                        r.headers["time-zone"] = e.timeZone;
                    }
                    this.request = n.request.defaults(r);
                    this.graphql = o.withCustomRequest(this.request).defaults(r);
                    this.log = Object.assign({ debug: function () { }, info: function () { }, warn: console.warn.bind(console), error: console.error.bind(console) }, e.log);
                    this.hook = t;
                    if (!e.authStrategy) {
                        if (!e.auth) {
                            this.auth = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, ({ type: "unauthenticated" })];
                            }); }); };
                        }
                        else {
                            var r_2 = a.createTokenAuth(e.auth);
                            t.wrap("request", r_2.hook);
                            this.auth = r_2;
                        }
                    }
                    else {
                        var r_3 = e.authStrategy, s_4 = _objectWithoutProperties(e, c);
                        var i_2 = r_3(Object.assign({ request: this.request, log: this.log, octokit: this, octokitOptions: s_4 }, e.auth));
                        t.wrap("request", i_2.hook);
                        this.auth = i_2;
                    }
                    var l = this.constructor;
                    l.plugins.forEach((function (t) { Object.assign(_this, t(_this, e)); }));
                }
                Octokit.defaults = function (e) { var t = /** @class */ (function (_super) {
                    __extends(t, _super);
                    function t() {
                        var t = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            t[_i] = arguments[_i];
                        }
                        var _this = this;
                        var r = t[0] || {};
                        if (typeof e === "function") {
                            _this = _super.call(this, e(r)) || this;
                            return;
                        }
                        _this = _super.call(this, Object.assign({}, e, r, r.userAgent && e.userAgent ? { userAgent: r.userAgent + " " + e.userAgent } : null)) || this;
                        return _this;
                    }
                    return t;
                }((this))); return t; };
                Octokit.plugin = function () {
                    var e = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        e[_i] = arguments[_i];
                    }
                    var t;
                    var r = this.plugins;
                    var s = (t = /** @class */ (function (_super) {
                        __extends(t, _super);
                        function t() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return t;
                    }((this))), t.plugins = r.concat(e.filter((function (e) { return !r.includes(e); }))), t);
                    return s;
                };
                return Octokit;
            }());
            Octokit.VERSION = u;
            Octokit.plugins = [];
            t.Octokit = Octokit;
        }, 165: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            function _interopDefault(e) { return e && typeof e === "object" && "default" in e ? e["default"] : e; }
            var s = _interopDefault(r(597));
            var i = r(447);
            function lowercaseKeys(e) { if (!e) {
                return {};
            } return Object.keys(e).reduce((function (t, r) { t[r.toLowerCase()] = e[r]; return t; }), {}); }
            function mergeDeep(e, t) { var r = Object.assign({}, e); Object.keys(t).forEach((function (i) {
                var _a, _b;
                if (s(t[i])) {
                    if (!(i in e))
                        Object.assign(r, (_a = {}, _a[i] = t[i], _a));
                    else
                        r[i] = mergeDeep(e[i], t[i]);
                }
                else {
                    Object.assign(r, (_b = {}, _b[i] = t[i], _b));
                }
            })); return r; }
            function merge(e, t, r) { if (typeof t === "string") {
                var _a = t.split(" "), e_11 = _a[0], s_5 = _a[1];
                r = Object.assign(s_5 ? { method: e_11, url: s_5 } : { url: e_11 }, r);
            }
            else {
                r = Object.assign({}, t);
            } r.headers = lowercaseKeys(r.headers); var s = mergeDeep(e || {}, r); if (e && e.mediaType.previews.length) {
                s.mediaType.previews = e.mediaType.previews.filter((function (e) { return !s.mediaType.previews.includes(e); })).concat(s.mediaType.previews);
            } s.mediaType.previews = s.mediaType.previews.map((function (e) { return e.replace(/-preview/, ""); })); return s; }
            function addQueryParameters(e, t) { var r = /\?/.test(e) ? "&" : "?"; var s = Object.keys(t); if (s.length === 0) {
                return e;
            } return e + r + s.map((function (e) { if (e === "q") {
                return "q=" + t.q.split("+").map(encodeURIComponent).join("+");
            } return e + "=" + encodeURIComponent(t[e]); })).join("&"); }
            var n = /\{[^}]+\}/g;
            function removeNonChars(e) { return e.replace(/^\W+|\W+$/g, "").split(/,/); }
            function extractUrlVariableNames(e) { var t = e.match(n); if (!t) {
                return [];
            } return t.map(removeNonChars).reduce((function (e, t) { return e.concat(t); }), []); }
            function omit(e, t) { return Object.keys(e).filter((function (e) { return !t.includes(e); })).reduce((function (t, r) { t[r] = e[r]; return t; }), {}); }
            function encodeReserved(e) { return e.split(/(%[0-9A-Fa-f]{2})/g).map((function (e) { if (!/%[0-9A-Fa-f]/.test(e)) {
                e = encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]");
            } return e; })).join(""); }
            function encodeUnreserved(e) { return encodeURIComponent(e).replace(/[!'()*]/g, (function (e) { return "%" + e.charCodeAt(0).toString(16).toUpperCase(); })); }
            function encodeValue(e, t, r) { t = e === "+" || e === "#" ? encodeReserved(t) : encodeUnreserved(t); if (r) {
                return encodeUnreserved(r) + "=" + t;
            }
            else {
                return t;
            } }
            function isDefined(e) { return e !== undefined && e !== null; }
            function isKeyOperator(e) { return e === ";" || e === "&" || e === "?"; }
            function getValues(e, t, r, s) { var i = e[r], n = []; if (isDefined(i) && i !== "") {
                if (typeof i === "string" || typeof i === "number" || typeof i === "boolean") {
                    i = i.toString();
                    if (s && s !== "*") {
                        i = i.substring(0, parseInt(s, 10));
                    }
                    n.push(encodeValue(t, i, isKeyOperator(t) ? r : ""));
                }
                else {
                    if (s === "*") {
                        if (Array.isArray(i)) {
                            i.filter(isDefined).forEach((function (e) { n.push(encodeValue(t, e, isKeyOperator(t) ? r : "")); }));
                        }
                        else {
                            Object.keys(i).forEach((function (e) { if (isDefined(i[e])) {
                                n.push(encodeValue(t, i[e], e));
                            } }));
                        }
                    }
                    else {
                        var e_12 = [];
                        if (Array.isArray(i)) {
                            i.filter(isDefined).forEach((function (r) { e_12.push(encodeValue(t, r)); }));
                        }
                        else {
                            Object.keys(i).forEach((function (r) { if (isDefined(i[r])) {
                                e_12.push(encodeUnreserved(r));
                                e_12.push(encodeValue(t, i[r].toString()));
                            } }));
                        }
                        if (isKeyOperator(t)) {
                            n.push(encodeUnreserved(r) + "=" + e_12.join(","));
                        }
                        else if (e_12.length !== 0) {
                            n.push(e_12.join(","));
                        }
                    }
                }
            }
            else {
                if (t === ";") {
                    if (isDefined(i)) {
                        n.push(encodeUnreserved(r));
                    }
                }
                else if (i === "" && (t === "&" || t === "?")) {
                    n.push(encodeUnreserved(r) + "=");
                }
                else if (i === "") {
                    n.push("");
                }
            } return n; }
            function parseUrl(e) { return { expand: expand.bind(null, e) }; }
            function expand(e, t) { var r = ["+", "#", ".", "/", ";", "?", "&"]; return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, (function (e, s, i) { if (s) {
                var e_13 = "";
                var i_3 = [];
                if (r.indexOf(s.charAt(0)) !== -1) {
                    e_13 = s.charAt(0);
                    s = s.substr(1);
                }
                s.split(/,/g).forEach((function (r) { var s = /([^:\*]*)(?::(\d+)|(\*))?/.exec(r); i_3.push(getValues(t, e_13, s[1], s[2] || s[3])); }));
                if (e_13 && e_13 !== "+") {
                    var n = ",";
                    if (e_13 === "?") {
                        n = "&";
                    }
                    else if (e_13 !== "#") {
                        n = e_13;
                    }
                    return (i_3.length !== 0 ? e_13 : "") + i_3.join(n);
                }
                else {
                    return i_3.join(",");
                }
            }
            else {
                return encodeReserved(i);
            } })); }
            function parse(e) { var t = e.method.toUpperCase(); var r = (e.url || "/").replace(/:([a-z]\w+)/g, "{+$1}"); var s = Object.assign({}, e.headers); var i; var n = omit(e, ["method", "baseUrl", "url", "headers", "request", "mediaType"]); var o = extractUrlVariableNames(r); r = parseUrl(r).expand(n); if (!/^http/.test(r)) {
                r = e.baseUrl + r;
            } var a = Object.keys(e).filter((function (e) { return o.includes(e); })).concat("baseUrl"); var u = omit(n, a); var c = /application\/octet-stream/i.test(s.accept); if (!c) {
                if (e.mediaType.format) {
                    s.accept = s.accept.split(/,/).map((function (t) { return t.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, "application/vnd$1$2." + e.mediaType.format); })).join(",");
                }
                if (e.mediaType.previews.length) {
                    var t_7 = s.accept.match(/[\w-]+(?=-preview)/g) || [];
                    s.accept = t_7.concat(e.mediaType.previews).map((function (t) { var r = e.mediaType.format ? "." + e.mediaType.format : "+json"; return "application/vnd.github." + t + "-preview" + r; })).join(",");
                }
            } if (["GET", "HEAD"].includes(t)) {
                r = addQueryParameters(r, u);
            }
            else {
                if ("data" in u) {
                    i = u.data;
                }
                else {
                    if (Object.keys(u).length) {
                        i = u;
                    }
                    else {
                        s["content-length"] = 0;
                    }
                }
            } if (!s["content-type"] && typeof i !== "undefined") {
                s["content-type"] = "application/json; charset=utf-8";
            } if (["PATCH", "PUT"].includes(t) && typeof i === "undefined") {
                i = "";
            } return Object.assign({ method: t, url: r, headers: s }, typeof i !== "undefined" ? { body: i } : null, e.request ? { request: e.request } : null); }
            function endpointWithDefaults(e, t, r) { return parse(merge(e, t, r)); }
            function withDefaults(e, t) { var r = merge(e, t); var s = endpointWithDefaults.bind(null, r); return Object.assign(s, { DEFAULTS: r, defaults: withDefaults.bind(null, r), merge: merge.bind(null, r), parse: parse }); }
            var o = "6.0.5";
            var a = "octokit-endpoint.js/" + o + " " + i.getUserAgent();
            var u = { method: "GET", baseUrl: "https://api.github.com", headers: { accept: "application/vnd.github.v3+json", "user-agent": a }, mediaType: { format: "", previews: [] } };
            var c = withDefaults(null, u);
            t.endpoint = c;
        }, 568: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            var s = r(723);
            var i = r(447);
            var n = "4.6.4";
            var GraphqlError = /** @class */ (function (_super) {
                __extends(GraphqlError, _super);
                function GraphqlError(e, t) {
                    var _this = this;
                    var r = t.data.errors[0].message;
                    _this = _super.call(this, r) || this;
                    Object.assign(_this, t.data);
                    Object.assign(_this, { headers: t.headers });
                    _this.name = "GraphqlError";
                    _this.request = e;
                    if (Error.captureStackTrace) {
                        Error.captureStackTrace(_this, _this.constructor);
                    }
                    return _this;
                }
                return GraphqlError;
            }(Error));
            var o = ["method", "baseUrl", "url", "headers", "request", "query", "mediaType"];
            var a = ["query", "method", "url"];
            var u = /\/api\/v3\/?$/;
            function graphql(e, t, r) { if (r) {
                if (typeof t === "string" && "query" in r) {
                    return Promise.reject(new Error("[@octokit/graphql] \"query\" cannot be used as variable name"));
                }
                for (var e_14 in r) {
                    if (!a.includes(e_14))
                        continue;
                    return Promise.reject(new Error("[@octokit/graphql] \"" + e_14 + "\" cannot be used as variable name"));
                }
            } var s = typeof t === "string" ? Object.assign({ query: t }, r) : t; var i = Object.keys(s).reduce((function (e, t) { if (o.includes(t)) {
                e[t] = s[t];
                return e;
            } if (!e.variables) {
                e.variables = {};
            } e.variables[t] = s[t]; return e; }), {}); var n = s.baseUrl || e.endpoint.DEFAULTS.baseUrl; if (u.test(n)) {
                i.url = n.replace(u, "/api/graphql");
            } return e(i).then((function (e) { if (e.data.errors) {
                var t_8 = {};
                for (var _i = 0, _a = Object.keys(e.headers); _i < _a.length; _i++) {
                    var r_4 = _a[_i];
                    t_8[r_4] = e.headers[r_4];
                }
                throw new GraphqlError(i, { headers: t_8, data: e.data });
            } return e.data.data; })); }
            function withDefaults(e, t) { var r = e.defaults(t); var newApi = function (e, t) { return graphql(r, e, t); }; return Object.assign(newApi, { defaults: withDefaults.bind(null, r), endpoint: s.request.endpoint }); }
            var c = withDefaults(s.request, { headers: { "user-agent": "octokit-graphql.js/" + n + " " + i.getUserAgent() }, method: "POST", url: "/graphql" });
            function withCustomRequest(e) { return withDefaults(e, { method: "POST", url: "/graphql" }); }
            t.graphql = c;
            t.withCustomRequest = withCustomRequest;
        }, 324: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            var r = "2.14.0";
            function ownKeys(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                if (t) {
                    s = s.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }));
                }
                r.push.apply(r, s);
            } return r; }
            function _objectSpread2(e) { for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t] != null ? arguments[t] : {};
                if (t % 2) {
                    ownKeys(Object(r), true).forEach((function (t) { _defineProperty(e, t, r[t]); }));
                }
                else if (Object.getOwnPropertyDescriptors) {
                    Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
                }
                else {
                    ownKeys(Object(r)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)); }));
                }
            } return e; }
            function _defineProperty(e, t, r) { if (t in e) {
                Object.defineProperty(e, t, { value: r, enumerable: true, configurable: true, writable: true });
            }
            else {
                e[t] = r;
            } return e; }
            function normalizePaginatedListResponse(e) { if (!e.data) {
                return _objectSpread2(_objectSpread2({}, e), {}, { data: [] });
            } var t = "total_count" in e.data && !("url" in e.data); if (!t)
                return e; var r = e.data.incomplete_results; var s = e.data.repository_selection; var i = e.data.total_count; delete e.data.incomplete_results; delete e.data.repository_selection; delete e.data.total_count; var n = Object.keys(e.data)[0]; var o = e.data[n]; e.data = o; if (typeof r !== "undefined") {
                e.data.incomplete_results = r;
            } if (typeof s !== "undefined") {
                e.data.repository_selection = s;
            } e.data.total_count = i; return e; }
            function iterator(e, t, r) {
                var _a;
                var s = typeof t === "function" ? t.endpoint(r) : e.request.endpoint(t, r);
                var i = typeof t === "function" ? t : e.request;
                var n = s.method;
                var o = s.headers;
                var a = s.url;
                return _a = {}, _a[Symbol.asyncIterator] = function () { return ({ next: function () {
                        return __awaiter(this, void 0, void 0, function () { var e_16, t_9, e_15; return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!a)
                                        return [2 /*return*/, { done: true }];
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, i({ method: n, url: a, headers: o })];
                                case 2:
                                    e_16 = _a.sent();
                                    t_9 = normalizePaginatedListResponse(e_16);
                                    a = ((t_9.headers.link || "").match(/<([^>]+)>;\s*rel="next"/) || [])[1];
                                    return [2 /*return*/, { value: t_9 }];
                                case 3:
                                    e_15 = _a.sent();
                                    if (e_15.status !== 409)
                                        throw e_15;
                                    a = "";
                                    return [2 /*return*/, { value: { status: 200, headers: {}, data: [] } }];
                                case 4: return [2 /*return*/];
                            }
                        }); });
                    } }); }, _a;
            }
            function paginate(e, t, r, s) { if (typeof r === "function") {
                s = r;
                r = undefined;
            } return gather(e, [], iterator(e, t, r)[Symbol.asyncIterator](), s); }
            function gather(e, t, r, s) { return r.next().then((function (i) { if (i.done) {
                return t;
            } var n = false; function done() { n = true; } t = t.concat(s ? s(i.value, done) : i.value.data); if (n) {
                return t;
            } return gather(e, t, r, s); })); }
            var s = Object.assign(paginate, { iterator: iterator });
            var i = ["GET /app/hook/deliveries", "GET /app/installations", "GET /applications/grants", "GET /authorizations", "GET /enterprises/{enterprise}/actions/permissions/organizations", "GET /enterprises/{enterprise}/actions/runner-groups", "GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations", "GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners", "GET /enterprises/{enterprise}/actions/runners", "GET /enterprises/{enterprise}/actions/runners/downloads", "GET /events", "GET /gists", "GET /gists/public", "GET /gists/starred", "GET /gists/{gist_id}/comments", "GET /gists/{gist_id}/commits", "GET /gists/{gist_id}/forks", "GET /installation/repositories", "GET /issues", "GET /marketplace_listing/plans", "GET /marketplace_listing/plans/{plan_id}/accounts", "GET /marketplace_listing/stubbed/plans", "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts", "GET /networks/{owner}/{repo}/events", "GET /notifications", "GET /organizations", "GET /orgs/{org}/actions/permissions/repositories", "GET /orgs/{org}/actions/runner-groups", "GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories", "GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners", "GET /orgs/{org}/actions/runners", "GET /orgs/{org}/actions/runners/downloads", "GET /orgs/{org}/actions/secrets", "GET /orgs/{org}/actions/secrets/{secret_name}/repositories", "GET /orgs/{org}/blocks", "GET /orgs/{org}/credential-authorizations", "GET /orgs/{org}/events", "GET /orgs/{org}/failed_invitations", "GET /orgs/{org}/hooks", "GET /orgs/{org}/hooks/{hook_id}/deliveries", "GET /orgs/{org}/installations", "GET /orgs/{org}/invitations", "GET /orgs/{org}/invitations/{invitation_id}/teams", "GET /orgs/{org}/issues", "GET /orgs/{org}/members", "GET /orgs/{org}/migrations", "GET /orgs/{org}/migrations/{migration_id}/repositories", "GET /orgs/{org}/outside_collaborators", "GET /orgs/{org}/projects", "GET /orgs/{org}/public_members", "GET /orgs/{org}/repos", "GET /orgs/{org}/team-sync/groups", "GET /orgs/{org}/teams", "GET /orgs/{org}/teams/{team_slug}/discussions", "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments", "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", "GET /orgs/{org}/teams/{team_slug}/invitations", "GET /orgs/{org}/teams/{team_slug}/members", "GET /orgs/{org}/teams/{team_slug}/projects", "GET /orgs/{org}/teams/{team_slug}/repos", "GET /orgs/{org}/teams/{team_slug}/team-sync/group-mappings", "GET /orgs/{org}/teams/{team_slug}/teams", "GET /projects/columns/{column_id}/cards", "GET /projects/{project_id}/collaborators", "GET /projects/{project_id}/columns", "GET /repos/{owner}/{repo}/actions/artifacts", "GET /repos/{owner}/{repo}/actions/runners", "GET /repos/{owner}/{repo}/actions/runners/downloads", "GET /repos/{owner}/{repo}/actions/runs", "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts", "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs", "GET /repos/{owner}/{repo}/actions/secrets", "GET /repos/{owner}/{repo}/actions/workflows", "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs", "GET /repos/{owner}/{repo}/assignees", "GET /repos/{owner}/{repo}/branches", "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations", "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs", "GET /repos/{owner}/{repo}/code-scanning/alerts", "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", "GET /repos/{owner}/{repo}/code-scanning/analyses", "GET /repos/{owner}/{repo}/collaborators", "GET /repos/{owner}/{repo}/comments", "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions", "GET /repos/{owner}/{repo}/commits", "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head", "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments", "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls", "GET /repos/{owner}/{repo}/commits/{ref}/check-runs", "GET /repos/{owner}/{repo}/commits/{ref}/check-suites", "GET /repos/{owner}/{repo}/commits/{ref}/statuses", "GET /repos/{owner}/{repo}/contributors", "GET /repos/{owner}/{repo}/deployments", "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses", "GET /repos/{owner}/{repo}/events", "GET /repos/{owner}/{repo}/forks", "GET /repos/{owner}/{repo}/git/matching-refs/{ref}", "GET /repos/{owner}/{repo}/hooks", "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries", "GET /repos/{owner}/{repo}/invitations", "GET /repos/{owner}/{repo}/issues", "GET /repos/{owner}/{repo}/issues/comments", "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", "GET /repos/{owner}/{repo}/issues/events", "GET /repos/{owner}/{repo}/issues/{issue_number}/comments", "GET /repos/{owner}/{repo}/issues/{issue_number}/events", "GET /repos/{owner}/{repo}/issues/{issue_number}/labels", "GET /repos/{owner}/{repo}/issues/{issue_number}/reactions", "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline", "GET /repos/{owner}/{repo}/keys", "GET /repos/{owner}/{repo}/labels", "GET /repos/{owner}/{repo}/milestones", "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels", "GET /repos/{owner}/{repo}/notifications", "GET /repos/{owner}/{repo}/pages/builds", "GET /repos/{owner}/{repo}/projects", "GET /repos/{owner}/{repo}/pulls", "GET /repos/{owner}/{repo}/pulls/comments", "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", "GET /repos/{owner}/{repo}/pulls/{pull_number}/comments", "GET /repos/{owner}/{repo}/pulls/{pull_number}/commits", "GET /repos/{owner}/{repo}/pulls/{pull_number}/files", "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews", "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments", "GET /repos/{owner}/{repo}/releases", "GET /repos/{owner}/{repo}/releases/{release_id}/assets", "GET /repos/{owner}/{repo}/secret-scanning/alerts", "GET /repos/{owner}/{repo}/stargazers", "GET /repos/{owner}/{repo}/subscribers", "GET /repos/{owner}/{repo}/tags", "GET /repos/{owner}/{repo}/teams", "GET /repositories", "GET /repositories/{repository_id}/environments/{environment_name}/secrets", "GET /scim/v2/enterprises/{enterprise}/Groups", "GET /scim/v2/enterprises/{enterprise}/Users", "GET /scim/v2/organizations/{org}/Users", "GET /search/code", "GET /search/commits", "GET /search/issues", "GET /search/labels", "GET /search/repositories", "GET /search/topics", "GET /search/users", "GET /teams/{team_id}/discussions", "GET /teams/{team_id}/discussions/{discussion_number}/comments", "GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions", "GET /teams/{team_id}/discussions/{discussion_number}/reactions", "GET /teams/{team_id}/invitations", "GET /teams/{team_id}/members", "GET /teams/{team_id}/projects", "GET /teams/{team_id}/repos", "GET /teams/{team_id}/team-sync/group-mappings", "GET /teams/{team_id}/teams", "GET /user/blocks", "GET /user/emails", "GET /user/followers", "GET /user/following", "GET /user/gpg_keys", "GET /user/installations", "GET /user/installations/{installation_id}/repositories", "GET /user/issues", "GET /user/keys", "GET /user/marketplace_purchases", "GET /user/marketplace_purchases/stubbed", "GET /user/memberships/orgs", "GET /user/migrations", "GET /user/migrations/{migration_id}/repositories", "GET /user/orgs", "GET /user/public_emails", "GET /user/repos", "GET /user/repository_invitations", "GET /user/starred", "GET /user/subscriptions", "GET /user/teams", "GET /users", "GET /users/{username}/events", "GET /users/{username}/events/orgs/{org}", "GET /users/{username}/events/public", "GET /users/{username}/followers", "GET /users/{username}/following", "GET /users/{username}/gists", "GET /users/{username}/gpg_keys", "GET /users/{username}/keys", "GET /users/{username}/orgs", "GET /users/{username}/projects", "GET /users/{username}/received_events", "GET /users/{username}/received_events/public", "GET /users/{username}/repos", "GET /users/{username}/starred", "GET /users/{username}/subscriptions"];
            function isPaginatingEndpoint(e) { if (typeof e === "string") {
                return i.includes(e);
            }
            else {
                return false;
            } }
            function paginateRest(e) { return { paginate: Object.assign(paginate.bind(null, e), { iterator: iterator.bind(null, e) }) }; }
            paginateRest.VERSION = r;
            t.composePaginateRest = s;
            t.isPaginatingEndpoint = isPaginatingEndpoint;
            t.paginateRest = paginateRest;
            t.paginatingEndpoints = i;
        }, 389: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            function ownKeys(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                if (t) {
                    s = s.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }));
                }
                r.push.apply(r, s);
            } return r; }
            function _objectSpread2(e) { for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t] != null ? arguments[t] : {};
                if (t % 2) {
                    ownKeys(Object(r), true).forEach((function (t) { _defineProperty(e, t, r[t]); }));
                }
                else if (Object.getOwnPropertyDescriptors) {
                    Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
                }
                else {
                    ownKeys(Object(r)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)); }));
                }
            } return e; }
            function _defineProperty(e, t, r) { if (t in e) {
                Object.defineProperty(e, t, { value: r, enumerable: true, configurable: true, writable: true });
            }
            else {
                e[t] = r;
            } return e; }
            var r = { actions: { addSelectedRepoToOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"], approveWorkflowRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve"], cancelWorkflowRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"], createOrUpdateEnvironmentSecret: ["PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"], createOrUpdateOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}"], createOrUpdateRepoSecret: ["PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"], createRegistrationTokenForOrg: ["POST /orgs/{org}/actions/runners/registration-token"], createRegistrationTokenForRepo: ["POST /repos/{owner}/{repo}/actions/runners/registration-token"], createRemoveTokenForOrg: ["POST /orgs/{org}/actions/runners/remove-token"], createRemoveTokenForRepo: ["POST /repos/{owner}/{repo}/actions/runners/remove-token"], createWorkflowDispatch: ["POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"], deleteArtifact: ["DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"], deleteEnvironmentSecret: ["DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"], deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"], deleteRepoSecret: ["DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"], deleteSelfHostedRunnerFromOrg: ["DELETE /orgs/{org}/actions/runners/{runner_id}"], deleteSelfHostedRunnerFromRepo: ["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"], deleteWorkflowRun: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"], deleteWorkflowRunLogs: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"], disableSelectedRepositoryGithubActionsOrganization: ["DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"], disableWorkflow: ["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"], downloadArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"], downloadJobLogsForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"], downloadWorkflowRunLogs: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"], enableSelectedRepositoryGithubActionsOrganization: ["PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"], enableWorkflow: ["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"], getAllowedActionsOrganization: ["GET /orgs/{org}/actions/permissions/selected-actions"], getAllowedActionsRepository: ["GET /repos/{owner}/{repo}/actions/permissions/selected-actions"], getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"], getEnvironmentPublicKey: ["GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key"], getEnvironmentSecret: ["GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"], getGithubActionsPermissionsOrganization: ["GET /orgs/{org}/actions/permissions"], getGithubActionsPermissionsRepository: ["GET /repos/{owner}/{repo}/actions/permissions"], getJobForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"], getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"], getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"], getPendingDeploymentsForRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"], getRepoPermissions: ["GET /repos/{owner}/{repo}/actions/permissions", {}, { renamed: ["actions", "getGithubActionsPermissionsRepository"] }], getRepoPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"], getRepoSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"], getReviewsForRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals"], getSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}"], getSelfHostedRunnerForRepo: ["GET /repos/{owner}/{repo}/actions/runners/{runner_id}"], getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"], getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"], getWorkflowRunUsage: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"], getWorkflowUsage: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"], listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"], listEnvironmentSecrets: ["GET /repositories/{repository_id}/environments/{environment_name}/secrets"], listJobsForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"], listOrgSecrets: ["GET /orgs/{org}/actions/secrets"], listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"], listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"], listRunnerApplicationsForOrg: ["GET /orgs/{org}/actions/runners/downloads"], listRunnerApplicationsForRepo: ["GET /repos/{owner}/{repo}/actions/runners/downloads"], listSelectedReposForOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}/repositories"], listSelectedRepositoriesEnabledGithubActionsOrganization: ["GET /orgs/{org}/actions/permissions/repositories"], listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"], listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"], listWorkflowRunArtifacts: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"], listWorkflowRuns: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"], listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"], reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"], removeSelectedRepoFromOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"], reviewPendingDeploymentsForRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"], setAllowedActionsOrganization: ["PUT /orgs/{org}/actions/permissions/selected-actions"], setAllowedActionsRepository: ["PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"], setGithubActionsPermissionsOrganization: ["PUT /orgs/{org}/actions/permissions"], setGithubActionsPermissionsRepository: ["PUT /repos/{owner}/{repo}/actions/permissions"], setSelectedReposForOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"], setSelectedRepositoriesEnabledGithubActionsOrganization: ["PUT /orgs/{org}/actions/permissions/repositories"] }, activity: { checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/{owner}/{repo}"], deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"], deleteThreadSubscription: ["DELETE /notifications/threads/{thread_id}/subscription"], getFeeds: ["GET /feeds"], getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"], getThread: ["GET /notifications/threads/{thread_id}"], getThreadSubscriptionForAuthenticatedUser: ["GET /notifications/threads/{thread_id}/subscription"], listEventsForAuthenticatedUser: ["GET /users/{username}/events"], listNotificationsForAuthenticatedUser: ["GET /notifications"], listOrgEventsForAuthenticatedUser: ["GET /users/{username}/events/orgs/{org}"], listPublicEvents: ["GET /events"], listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"], listPublicEventsForUser: ["GET /users/{username}/events/public"], listPublicOrgEvents: ["GET /orgs/{org}/events"], listReceivedEventsForUser: ["GET /users/{username}/received_events"], listReceivedPublicEventsForUser: ["GET /users/{username}/received_events/public"], listRepoEvents: ["GET /repos/{owner}/{repo}/events"], listRepoNotificationsForAuthenticatedUser: ["GET /repos/{owner}/{repo}/notifications"], listReposStarredByAuthenticatedUser: ["GET /user/starred"], listReposStarredByUser: ["GET /users/{username}/starred"], listReposWatchedByUser: ["GET /users/{username}/subscriptions"], listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"], listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"], listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"], markNotificationsAsRead: ["PUT /notifications"], markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"], markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"], setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"], setThreadSubscription: ["PUT /notifications/threads/{thread_id}/subscription"], starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"], unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"] }, apps: { addRepoToInstallation: ["PUT /user/installations/{installation_id}/repositories/{repository_id}"], checkToken: ["POST /applications/{client_id}/token"], createContentAttachment: ["POST /content_references/{content_reference_id}/attachments", { mediaType: { previews: ["corsair"] } }], createContentAttachmentForRepo: ["POST /repos/{owner}/{repo}/content_references/{content_reference_id}/attachments", { mediaType: { previews: ["corsair"] } }], createFromManifest: ["POST /app-manifests/{code}/conversions"], createInstallationAccessToken: ["POST /app/installations/{installation_id}/access_tokens"], deleteAuthorization: ["DELETE /applications/{client_id}/grant"], deleteInstallation: ["DELETE /app/installations/{installation_id}"], deleteToken: ["DELETE /applications/{client_id}/token"], getAuthenticated: ["GET /app"], getBySlug: ["GET /apps/{app_slug}"], getInstallation: ["GET /app/installations/{installation_id}"], getOrgInstallation: ["GET /orgs/{org}/installation"], getRepoInstallation: ["GET /repos/{owner}/{repo}/installation"], getSubscriptionPlanForAccount: ["GET /marketplace_listing/accounts/{account_id}"], getSubscriptionPlanForAccountStubbed: ["GET /marketplace_listing/stubbed/accounts/{account_id}"], getUserInstallation: ["GET /users/{username}/installation"], getWebhookConfigForApp: ["GET /app/hook/config"], getWebhookDelivery: ["GET /app/hook/deliveries/{delivery_id}"], listAccountsForPlan: ["GET /marketplace_listing/plans/{plan_id}/accounts"], listAccountsForPlanStubbed: ["GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"], listInstallationReposForAuthenticatedUser: ["GET /user/installations/{installation_id}/repositories"], listInstallations: ["GET /app/installations"], listInstallationsForAuthenticatedUser: ["GET /user/installations"], listPlans: ["GET /marketplace_listing/plans"], listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"], listReposAccessibleToInstallation: ["GET /installation/repositories"], listSubscriptionsForAuthenticatedUser: ["GET /user/marketplace_purchases"], listSubscriptionsForAuthenticatedUserStubbed: ["GET /user/marketplace_purchases/stubbed"], listWebhookDeliveries: ["GET /app/hook/deliveries"], redeliverWebhookDelivery: ["POST /app/hook/deliveries/{delivery_id}/attempts"], removeRepoFromInstallation: ["DELETE /user/installations/{installation_id}/repositories/{repository_id}"], resetToken: ["PATCH /applications/{client_id}/token"], revokeInstallationAccessToken: ["DELETE /installation/token"], scopeToken: ["POST /applications/{client_id}/token/scoped"], suspendInstallation: ["PUT /app/installations/{installation_id}/suspended"], unsuspendInstallation: ["DELETE /app/installations/{installation_id}/suspended"], updateWebhookConfigForApp: ["PATCH /app/hook/config"] }, billing: { getGithubActionsBillingOrg: ["GET /orgs/{org}/settings/billing/actions"], getGithubActionsBillingUser: ["GET /users/{username}/settings/billing/actions"], getGithubPackagesBillingOrg: ["GET /orgs/{org}/settings/billing/packages"], getGithubPackagesBillingUser: ["GET /users/{username}/settings/billing/packages"], getSharedStorageBillingOrg: ["GET /orgs/{org}/settings/billing/shared-storage"], getSharedStorageBillingUser: ["GET /users/{username}/settings/billing/shared-storage"] }, checks: { create: ["POST /repos/{owner}/{repo}/check-runs"], createSuite: ["POST /repos/{owner}/{repo}/check-suites"], get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"], getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"], listAnnotations: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"], listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"], listForSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"], listSuitesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"], rerequestSuite: ["POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"], setSuitesPreferences: ["PATCH /repos/{owner}/{repo}/check-suites/preferences"], update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"] }, codeScanning: { deleteAnalysis: ["DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}"], getAlert: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", {}, { renamedParameters: { alert_id: "alert_number" } }], getAnalysis: ["GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}"], getSarif: ["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"], listAlertInstances: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances"], listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"], listAlertsInstances: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", {}, { renamed: ["codeScanning", "listAlertInstances"] }], listRecentAnalyses: ["GET /repos/{owner}/{repo}/code-scanning/analyses"], updateAlert: ["PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"], uploadSarif: ["POST /repos/{owner}/{repo}/code-scanning/sarifs"] }, codesOfConduct: { getAllCodesOfConduct: ["GET /codes_of_conduct"], getConductCode: ["GET /codes_of_conduct/{key}"], getForRepo: ["GET /repos/{owner}/{repo}/community/code_of_conduct", { mediaType: { previews: ["scarlet-witch"] } }] }, emojis: { get: ["GET /emojis"] }, enterpriseAdmin: { disableSelectedOrganizationGithubActionsEnterprise: ["DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}"], enableSelectedOrganizationGithubActionsEnterprise: ["PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}"], getAllowedActionsEnterprise: ["GET /enterprises/{enterprise}/actions/permissions/selected-actions"], getGithubActionsPermissionsEnterprise: ["GET /enterprises/{enterprise}/actions/permissions"], listSelectedOrganizationsEnabledGithubActionsEnterprise: ["GET /enterprises/{enterprise}/actions/permissions/organizations"], setAllowedActionsEnterprise: ["PUT /enterprises/{enterprise}/actions/permissions/selected-actions"], setGithubActionsPermissionsEnterprise: ["PUT /enterprises/{enterprise}/actions/permissions"], setSelectedOrganizationsEnabledGithubActionsEnterprise: ["PUT /enterprises/{enterprise}/actions/permissions/organizations"] }, gists: { checkIsStarred: ["GET /gists/{gist_id}/star"], create: ["POST /gists"], createComment: ["POST /gists/{gist_id}/comments"], "delete": ["DELETE /gists/{gist_id}"], deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"], fork: ["POST /gists/{gist_id}/forks"], get: ["GET /gists/{gist_id}"], getComment: ["GET /gists/{gist_id}/comments/{comment_id}"], getRevision: ["GET /gists/{gist_id}/{sha}"], list: ["GET /gists"], listComments: ["GET /gists/{gist_id}/comments"], listCommits: ["GET /gists/{gist_id}/commits"], listForUser: ["GET /users/{username}/gists"], listForks: ["GET /gists/{gist_id}/forks"], listPublic: ["GET /gists/public"], listStarred: ["GET /gists/starred"], star: ["PUT /gists/{gist_id}/star"], unstar: ["DELETE /gists/{gist_id}/star"], update: ["PATCH /gists/{gist_id}"], updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"] }, git: { createBlob: ["POST /repos/{owner}/{repo}/git/blobs"], createCommit: ["POST /repos/{owner}/{repo}/git/commits"], createRef: ["POST /repos/{owner}/{repo}/git/refs"], createTag: ["POST /repos/{owner}/{repo}/git/tags"], createTree: ["POST /repos/{owner}/{repo}/git/trees"], deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"], getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"], getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"], getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"], getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"], getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"], listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"], updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"] }, gitignore: { getAllTemplates: ["GET /gitignore/templates"], getTemplate: ["GET /gitignore/templates/{name}"] }, interactions: { getRestrictionsForAuthenticatedUser: ["GET /user/interaction-limits"], getRestrictionsForOrg: ["GET /orgs/{org}/interaction-limits"], getRestrictionsForRepo: ["GET /repos/{owner}/{repo}/interaction-limits"], getRestrictionsForYourPublicRepos: ["GET /user/interaction-limits", {}, { renamed: ["interactions", "getRestrictionsForAuthenticatedUser"] }], removeRestrictionsForAuthenticatedUser: ["DELETE /user/interaction-limits"], removeRestrictionsForOrg: ["DELETE /orgs/{org}/interaction-limits"], removeRestrictionsForRepo: ["DELETE /repos/{owner}/{repo}/interaction-limits"], removeRestrictionsForYourPublicRepos: ["DELETE /user/interaction-limits", {}, { renamed: ["interactions", "removeRestrictionsForAuthenticatedUser"] }], setRestrictionsForAuthenticatedUser: ["PUT /user/interaction-limits"], setRestrictionsForOrg: ["PUT /orgs/{org}/interaction-limits"], setRestrictionsForRepo: ["PUT /repos/{owner}/{repo}/interaction-limits"], setRestrictionsForYourPublicRepos: ["PUT /user/interaction-limits", {}, { renamed: ["interactions", "setRestrictionsForAuthenticatedUser"] }] }, issues: { addAssignees: ["POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"], addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"], checkUserCanBeAssigned: ["GET /repos/{owner}/{repo}/assignees/{assignee}"], create: ["POST /repos/{owner}/{repo}/issues"], createComment: ["POST /repos/{owner}/{repo}/issues/{issue_number}/comments"], createLabel: ["POST /repos/{owner}/{repo}/labels"], createMilestone: ["POST /repos/{owner}/{repo}/milestones"], deleteComment: ["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"], deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"], deleteMilestone: ["DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"], get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"], getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"], getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"], getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"], getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"], list: ["GET /issues"], listAssignees: ["GET /repos/{owner}/{repo}/assignees"], listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"], listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"], listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"], listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"], listEventsForTimeline: ["GET /repos/{owner}/{repo}/issues/{issue_number}/timeline", { mediaType: { previews: ["mockingbird"] } }], listForAuthenticatedUser: ["GET /user/issues"], listForOrg: ["GET /orgs/{org}/issues"], listForRepo: ["GET /repos/{owner}/{repo}/issues"], listLabelsForMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"], listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"], listLabelsOnIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/labels"], listMilestones: ["GET /repos/{owner}/{repo}/milestones"], lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"], removeAllLabels: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"], removeAssignees: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"], removeLabel: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"], setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"], unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"], update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"], updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"], updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"], updateMilestone: ["PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"] }, licenses: { get: ["GET /licenses/{license}"], getAllCommonlyUsed: ["GET /licenses"], getForRepo: ["GET /repos/{owner}/{repo}/license"] }, markdown: { render: ["POST /markdown"], renderRaw: ["POST /markdown/raw", { headers: { "content-type": "text/plain; charset=utf-8" } }] }, meta: { get: ["GET /meta"], getOctocat: ["GET /octocat"], getZen: ["GET /zen"], root: ["GET /"] }, migrations: { cancelImport: ["DELETE /repos/{owner}/{repo}/import"], deleteArchiveForAuthenticatedUser: ["DELETE /user/migrations/{migration_id}/archive", { mediaType: { previews: ["wyandotte"] } }], deleteArchiveForOrg: ["DELETE /orgs/{org}/migrations/{migration_id}/archive", { mediaType: { previews: ["wyandotte"] } }], downloadArchiveForOrg: ["GET /orgs/{org}/migrations/{migration_id}/archive", { mediaType: { previews: ["wyandotte"] } }], getArchiveForAuthenticatedUser: ["GET /user/migrations/{migration_id}/archive", { mediaType: { previews: ["wyandotte"] } }], getCommitAuthors: ["GET /repos/{owner}/{repo}/import/authors"], getImportStatus: ["GET /repos/{owner}/{repo}/import"], getLargeFiles: ["GET /repos/{owner}/{repo}/import/large_files"], getStatusForAuthenticatedUser: ["GET /user/migrations/{migration_id}", { mediaType: { previews: ["wyandotte"] } }], getStatusForOrg: ["GET /orgs/{org}/migrations/{migration_id}", { mediaType: { previews: ["wyandotte"] } }], listForAuthenticatedUser: ["GET /user/migrations", { mediaType: { previews: ["wyandotte"] } }], listForOrg: ["GET /orgs/{org}/migrations", { mediaType: { previews: ["wyandotte"] } }], listReposForOrg: ["GET /orgs/{org}/migrations/{migration_id}/repositories", { mediaType: { previews: ["wyandotte"] } }], listReposForUser: ["GET /user/migrations/{migration_id}/repositories", { mediaType: { previews: ["wyandotte"] } }], mapCommitAuthor: ["PATCH /repos/{owner}/{repo}/import/authors/{author_id}"], setLfsPreference: ["PATCH /repos/{owner}/{repo}/import/lfs"], startForAuthenticatedUser: ["POST /user/migrations"], startForOrg: ["POST /orgs/{org}/migrations"], startImport: ["PUT /repos/{owner}/{repo}/import"], unlockRepoForAuthenticatedUser: ["DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock", { mediaType: { previews: ["wyandotte"] } }], unlockRepoForOrg: ["DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock", { mediaType: { previews: ["wyandotte"] } }], updateImport: ["PATCH /repos/{owner}/{repo}/import"] }, orgs: { blockUser: ["PUT /orgs/{org}/blocks/{username}"], cancelInvitation: ["DELETE /orgs/{org}/invitations/{invitation_id}"], checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"], checkMembershipForUser: ["GET /orgs/{org}/members/{username}"], checkPublicMembershipForUser: ["GET /orgs/{org}/public_members/{username}"], convertMemberToOutsideCollaborator: ["PUT /orgs/{org}/outside_collaborators/{username}"], createInvitation: ["POST /orgs/{org}/invitations"], createWebhook: ["POST /orgs/{org}/hooks"], deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"], get: ["GET /orgs/{org}"], getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"], getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"], getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"], getWebhookConfigForOrg: ["GET /orgs/{org}/hooks/{hook_id}/config"], getWebhookDelivery: ["GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}"], list: ["GET /organizations"], listAppInstallations: ["GET /orgs/{org}/installations"], listBlockedUsers: ["GET /orgs/{org}/blocks"], listFailedInvitations: ["GET /orgs/{org}/failed_invitations"], listForAuthenticatedUser: ["GET /user/orgs"], listForUser: ["GET /users/{username}/orgs"], listInvitationTeams: ["GET /orgs/{org}/invitations/{invitation_id}/teams"], listMembers: ["GET /orgs/{org}/members"], listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"], listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"], listPendingInvitations: ["GET /orgs/{org}/invitations"], listPublicMembers: ["GET /orgs/{org}/public_members"], listWebhookDeliveries: ["GET /orgs/{org}/hooks/{hook_id}/deliveries"], listWebhooks: ["GET /orgs/{org}/hooks"], pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"], redeliverWebhookDelivery: ["POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"], removeMember: ["DELETE /orgs/{org}/members/{username}"], removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"], removeOutsideCollaborator: ["DELETE /orgs/{org}/outside_collaborators/{username}"], removePublicMembershipForAuthenticatedUser: ["DELETE /orgs/{org}/public_members/{username}"], setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"], setPublicMembershipForAuthenticatedUser: ["PUT /orgs/{org}/public_members/{username}"], unblockUser: ["DELETE /orgs/{org}/blocks/{username}"], update: ["PATCH /orgs/{org}"], updateMembershipForAuthenticatedUser: ["PATCH /user/memberships/orgs/{org}"], updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"], updateWebhookConfigForOrg: ["PATCH /orgs/{org}/hooks/{hook_id}/config"] }, packages: { deletePackageForAuthenticatedUser: ["DELETE /user/packages/{package_type}/{package_name}"], deletePackageForOrg: ["DELETE /orgs/{org}/packages/{package_type}/{package_name}"], deletePackageVersionForAuthenticatedUser: ["DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}"], deletePackageVersionForOrg: ["DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"], getAllPackageVersionsForAPackageOwnedByAnOrg: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions", {}, { renamed: ["packages", "getAllPackageVersionsForPackageOwnedByOrg"] }], getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions", {}, { renamed: ["packages", "getAllPackageVersionsForPackageOwnedByAuthenticatedUser"] }], getAllPackageVersionsForPackageOwnedByAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions"], getAllPackageVersionsForPackageOwnedByOrg: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions"], getAllPackageVersionsForPackageOwnedByUser: ["GET /users/{username}/packages/{package_type}/{package_name}/versions"], getPackageForAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}"], getPackageForOrganization: ["GET /orgs/{org}/packages/{package_type}/{package_name}"], getPackageForUser: ["GET /users/{username}/packages/{package_type}/{package_name}"], getPackageVersionForAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}"], getPackageVersionForOrganization: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"], getPackageVersionForUser: ["GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"], restorePackageForAuthenticatedUser: ["POST /user/packages/{package_type}/{package_name}/restore{?token}"], restorePackageForOrg: ["POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}"], restorePackageVersionForAuthenticatedUser: ["POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"], restorePackageVersionForOrg: ["POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"] }, projects: { addCollaborator: ["PUT /projects/{project_id}/collaborators/{username}", { mediaType: { previews: ["inertia"] } }], createCard: ["POST /projects/columns/{column_id}/cards", { mediaType: { previews: ["inertia"] } }], createColumn: ["POST /projects/{project_id}/columns", { mediaType: { previews: ["inertia"] } }], createForAuthenticatedUser: ["POST /user/projects", { mediaType: { previews: ["inertia"] } }], createForOrg: ["POST /orgs/{org}/projects", { mediaType: { previews: ["inertia"] } }], createForRepo: ["POST /repos/{owner}/{repo}/projects", { mediaType: { previews: ["inertia"] } }], "delete": ["DELETE /projects/{project_id}", { mediaType: { previews: ["inertia"] } }], deleteCard: ["DELETE /projects/columns/cards/{card_id}", { mediaType: { previews: ["inertia"] } }], deleteColumn: ["DELETE /projects/columns/{column_id}", { mediaType: { previews: ["inertia"] } }], get: ["GET /projects/{project_id}", { mediaType: { previews: ["inertia"] } }], getCard: ["GET /projects/columns/cards/{card_id}", { mediaType: { previews: ["inertia"] } }], getColumn: ["GET /projects/columns/{column_id}", { mediaType: { previews: ["inertia"] } }], getPermissionForUser: ["GET /projects/{project_id}/collaborators/{username}/permission", { mediaType: { previews: ["inertia"] } }], listCards: ["GET /projects/columns/{column_id}/cards", { mediaType: { previews: ["inertia"] } }], listCollaborators: ["GET /projects/{project_id}/collaborators", { mediaType: { previews: ["inertia"] } }], listColumns: ["GET /projects/{project_id}/columns", { mediaType: { previews: ["inertia"] } }], listForOrg: ["GET /orgs/{org}/projects", { mediaType: { previews: ["inertia"] } }], listForRepo: ["GET /repos/{owner}/{repo}/projects", { mediaType: { previews: ["inertia"] } }], listForUser: ["GET /users/{username}/projects", { mediaType: { previews: ["inertia"] } }], moveCard: ["POST /projects/columns/cards/{card_id}/moves", { mediaType: { previews: ["inertia"] } }], moveColumn: ["POST /projects/columns/{column_id}/moves", { mediaType: { previews: ["inertia"] } }], removeCollaborator: ["DELETE /projects/{project_id}/collaborators/{username}", { mediaType: { previews: ["inertia"] } }], update: ["PATCH /projects/{project_id}", { mediaType: { previews: ["inertia"] } }], updateCard: ["PATCH /projects/columns/cards/{card_id}", { mediaType: { previews: ["inertia"] } }], updateColumn: ["PATCH /projects/columns/{column_id}", { mediaType: { previews: ["inertia"] } }] }, pulls: { checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"], create: ["POST /repos/{owner}/{repo}/pulls"], createReplyForReviewComment: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"], createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"], createReviewComment: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"], deletePendingReview: ["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"], deleteReviewComment: ["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"], dismissReview: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"], get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"], getReview: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"], getReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"], list: ["GET /repos/{owner}/{repo}/pulls"], listCommentsForReview: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"], listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"], listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"], listRequestedReviewers: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"], listReviewComments: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"], listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"], listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"], merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"], removeRequestedReviewers: ["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"], requestReviewers: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"], submitReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"], update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"], updateBranch: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch", { mediaType: { previews: ["lydian"] } }], updateReview: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"], updateReviewComment: ["PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"] }, rateLimit: { get: ["GET /rate_limit"] }, reactions: { createForCommitComment: ["POST /repos/{owner}/{repo}/comments/{comment_id}/reactions", { mediaType: { previews: ["squirrel-girl"] } }], createForIssue: ["POST /repos/{owner}/{repo}/issues/{issue_number}/reactions", { mediaType: { previews: ["squirrel-girl"] } }], createForIssueComment: ["POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", { mediaType: { previews: ["squirrel-girl"] } }], createForPullRequestReviewComment: ["POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", { mediaType: { previews: ["squirrel-girl"] } }], createForRelease: ["POST /repos/{owner}/{repo}/releases/{release_id}/reactions", { mediaType: { previews: ["squirrel-girl"] } }], createForTeamDiscussionCommentInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", { mediaType: { previews: ["squirrel-girl"] } }], createForTeamDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", { mediaType: { previews: ["squirrel-girl"] } }], deleteForCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}", { mediaType: { previews: ["squirrel-girl"] } }], deleteForIssue: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}", { mediaType: { previews: ["squirrel-girl"] } }], deleteForIssueComment: ["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}", { mediaType: { previews: ["squirrel-girl"] } }], deleteForPullRequestComment: ["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}", { mediaType: { previews: ["squirrel-girl"] } }], deleteForTeamDiscussion: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}", { mediaType: { previews: ["squirrel-girl"] } }], deleteForTeamDiscussionComment: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}", { mediaType: { previews: ["squirrel-girl"] } }], deleteLegacy: ["DELETE /reactions/{reaction_id}", { mediaType: { previews: ["squirrel-girl"] } }, { deprecated: "octokit.rest.reactions.deleteLegacy() is deprecated, see https://docs.github.com/rest/reference/reactions/#delete-a-reaction-legacy" }], listForCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}/reactions", { mediaType: { previews: ["squirrel-girl"] } }], listForIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions", { mediaType: { previews: ["squirrel-girl"] } }], listForIssueComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", { mediaType: { previews: ["squirrel-girl"] } }], listForPullRequestReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", { mediaType: { previews: ["squirrel-girl"] } }], listForTeamDiscussionCommentInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", { mediaType: { previews: ["squirrel-girl"] } }], listForTeamDiscussionInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", { mediaType: { previews: ["squirrel-girl"] } }] }, repos: { acceptInvitation: ["PATCH /user/repository_invitations/{invitation_id}"], addAppAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, { mapToData: "apps" }], addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"], addStatusCheckContexts: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, { mapToData: "contexts" }], addTeamAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, { mapToData: "teams" }], addUserAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, { mapToData: "users" }], checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"], checkVulnerabilityAlerts: ["GET /repos/{owner}/{repo}/vulnerability-alerts", { mediaType: { previews: ["dorian"] } }], compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"], compareCommitsWithBasehead: ["GET /repos/{owner}/{repo}/compare/{basehead}"], createCommitComment: ["POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"], createCommitSignatureProtection: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", { mediaType: { previews: ["zzzax"] } }], createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"], createDeployKey: ["POST /repos/{owner}/{repo}/keys"], createDeployment: ["POST /repos/{owner}/{repo}/deployments"], createDeploymentStatus: ["POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"], createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"], createForAuthenticatedUser: ["POST /user/repos"], createFork: ["POST /repos/{owner}/{repo}/forks"], createInOrg: ["POST /orgs/{org}/repos"], createOrUpdateEnvironment: ["PUT /repos/{owner}/{repo}/environments/{environment_name}"], createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"], createPagesSite: ["POST /repos/{owner}/{repo}/pages", { mediaType: { previews: ["switcheroo"] } }], createRelease: ["POST /repos/{owner}/{repo}/releases"], createUsingTemplate: ["POST /repos/{template_owner}/{template_repo}/generate", { mediaType: { previews: ["baptiste"] } }], createWebhook: ["POST /repos/{owner}/{repo}/hooks"], declineInvitation: ["DELETE /user/repository_invitations/{invitation_id}"], "delete": ["DELETE /repos/{owner}/{repo}"], deleteAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"], deleteAdminBranchProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"], deleteAnEnvironment: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}"], deleteBranchProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection"], deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"], deleteCommitSignatureProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", { mediaType: { previews: ["zzzax"] } }], deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"], deleteDeployment: ["DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"], deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"], deleteInvitation: ["DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"], deletePagesSite: ["DELETE /repos/{owner}/{repo}/pages", { mediaType: { previews: ["switcheroo"] } }], deletePullRequestReviewProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"], deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"], deleteReleaseAsset: ["DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"], deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"], disableAutomatedSecurityFixes: ["DELETE /repos/{owner}/{repo}/automated-security-fixes", { mediaType: { previews: ["london"] } }], disableVulnerabilityAlerts: ["DELETE /repos/{owner}/{repo}/vulnerability-alerts", { mediaType: { previews: ["dorian"] } }], downloadArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}", {}, { renamed: ["repos", "downloadZipballArchive"] }], downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"], downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"], enableAutomatedSecurityFixes: ["PUT /repos/{owner}/{repo}/automated-security-fixes", { mediaType: { previews: ["london"] } }], enableVulnerabilityAlerts: ["PUT /repos/{owner}/{repo}/vulnerability-alerts", { mediaType: { previews: ["dorian"] } }], get: ["GET /repos/{owner}/{repo}"], getAccessRestrictions: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"], getAdminBranchProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"], getAllEnvironments: ["GET /repos/{owner}/{repo}/environments"], getAllStatusCheckContexts: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"], getAllTopics: ["GET /repos/{owner}/{repo}/topics", { mediaType: { previews: ["mercy"] } }], getAppsWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"], getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"], getBranchProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection"], getClones: ["GET /repos/{owner}/{repo}/traffic/clones"], getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"], getCollaboratorPermissionLevel: ["GET /repos/{owner}/{repo}/collaborators/{username}/permission"], getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"], getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"], getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"], getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"], getCommitSignatureProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", { mediaType: { previews: ["zzzax"] } }], getCommunityProfileMetrics: ["GET /repos/{owner}/{repo}/community/profile"], getContent: ["GET /repos/{owner}/{repo}/contents/{path}"], getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"], getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"], getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"], getDeploymentStatus: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"], getEnvironment: ["GET /repos/{owner}/{repo}/environments/{environment_name}"], getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"], getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"], getPages: ["GET /repos/{owner}/{repo}/pages"], getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"], getPagesHealthCheck: ["GET /repos/{owner}/{repo}/pages/health"], getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"], getPullRequestReviewProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"], getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"], getReadme: ["GET /repos/{owner}/{repo}/readme"], getReadmeInDirectory: ["GET /repos/{owner}/{repo}/readme/{dir}"], getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"], getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"], getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"], getStatusChecksProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"], getTeamsWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"], getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"], getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"], getUsersWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"], getViews: ["GET /repos/{owner}/{repo}/traffic/views"], getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"], getWebhookConfigForRepo: ["GET /repos/{owner}/{repo}/hooks/{hook_id}/config"], getWebhookDelivery: ["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}"], listBranches: ["GET /repos/{owner}/{repo}/branches"], listBranchesForHeadCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head", { mediaType: { previews: ["groot"] } }], listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"], listCommentsForCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"], listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"], listCommitStatusesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/statuses"], listCommits: ["GET /repos/{owner}/{repo}/commits"], listContributors: ["GET /repos/{owner}/{repo}/contributors"], listDeployKeys: ["GET /repos/{owner}/{repo}/keys"], listDeploymentStatuses: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"], listDeployments: ["GET /repos/{owner}/{repo}/deployments"], listForAuthenticatedUser: ["GET /user/repos"], listForOrg: ["GET /orgs/{org}/repos"], listForUser: ["GET /users/{username}/repos"], listForks: ["GET /repos/{owner}/{repo}/forks"], listInvitations: ["GET /repos/{owner}/{repo}/invitations"], listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"], listLanguages: ["GET /repos/{owner}/{repo}/languages"], listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"], listPublic: ["GET /repositories"], listPullRequestsAssociatedWithCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls", { mediaType: { previews: ["groot"] } }], listReleaseAssets: ["GET /repos/{owner}/{repo}/releases/{release_id}/assets"], listReleases: ["GET /repos/{owner}/{repo}/releases"], listTags: ["GET /repos/{owner}/{repo}/tags"], listTeams: ["GET /repos/{owner}/{repo}/teams"], listWebhookDeliveries: ["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries"], listWebhooks: ["GET /repos/{owner}/{repo}/hooks"], merge: ["POST /repos/{owner}/{repo}/merges"], pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"], redeliverWebhookDelivery: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"], removeAppAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, { mapToData: "apps" }], removeCollaborator: ["DELETE /repos/{owner}/{repo}/collaborators/{username}"], removeStatusCheckContexts: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, { mapToData: "contexts" }], removeStatusCheckProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"], removeTeamAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, { mapToData: "teams" }], removeUserAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, { mapToData: "users" }], renameBranch: ["POST /repos/{owner}/{repo}/branches/{branch}/rename"], replaceAllTopics: ["PUT /repos/{owner}/{repo}/topics", { mediaType: { previews: ["mercy"] } }], requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"], setAdminBranchProtection: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"], setAppAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, { mapToData: "apps" }], setStatusCheckContexts: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, { mapToData: "contexts" }], setTeamAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, { mapToData: "teams" }], setUserAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, { mapToData: "users" }], testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"], transfer: ["POST /repos/{owner}/{repo}/transfer"], update: ["PATCH /repos/{owner}/{repo}"], updateBranchProtection: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection"], updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"], updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"], updateInvitation: ["PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"], updatePullRequestReviewProtection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"], updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"], updateReleaseAsset: ["PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"], updateStatusCheckPotection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", {}, { renamed: ["repos", "updateStatusCheckProtection"] }], updateStatusCheckProtection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"], updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"], updateWebhookConfigForRepo: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"], uploadReleaseAsset: ["POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}", { baseUrl: "https://uploads.github.com" }] }, search: { code: ["GET /search/code"], commits: ["GET /search/commits", { mediaType: { previews: ["cloak"] } }], issuesAndPullRequests: ["GET /search/issues"], labels: ["GET /search/labels"], repos: ["GET /search/repositories"], topics: ["GET /search/topics", { mediaType: { previews: ["mercy"] } }], users: ["GET /search/users"] }, secretScanning: { getAlert: ["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"], listAlertsForRepo: ["GET /repos/{owner}/{repo}/secret-scanning/alerts"], updateAlert: ["PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"] }, teams: { addOrUpdateMembershipForUserInOrg: ["PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"], addOrUpdateProjectPermissionsInOrg: ["PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}", { mediaType: { previews: ["inertia"] } }], addOrUpdateRepoPermissionsInOrg: ["PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"], checkPermissionsForProjectInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects/{project_id}", { mediaType: { previews: ["inertia"] } }], checkPermissionsForRepoInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"], create: ["POST /orgs/{org}/teams"], createDiscussionCommentInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"], createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"], deleteDiscussionCommentInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"], deleteDiscussionInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"], deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"], getByName: ["GET /orgs/{org}/teams/{team_slug}"], getDiscussionCommentInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"], getDiscussionInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"], getMembershipForUserInOrg: ["GET /orgs/{org}/teams/{team_slug}/memberships/{username}"], list: ["GET /orgs/{org}/teams"], listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"], listDiscussionCommentsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"], listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"], listForAuthenticatedUser: ["GET /user/teams"], listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"], listPendingInvitationsInOrg: ["GET /orgs/{org}/teams/{team_slug}/invitations"], listProjectsInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects", { mediaType: { previews: ["inertia"] } }], listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"], removeMembershipForUserInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"], removeProjectInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"], removeRepoInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"], updateDiscussionCommentInOrg: ["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"], updateDiscussionInOrg: ["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"], updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"] }, users: { addEmailForAuthenticated: ["POST /user/emails"], block: ["PUT /user/blocks/{username}"], checkBlocked: ["GET /user/blocks/{username}"], checkFollowingForUser: ["GET /users/{username}/following/{target_user}"], checkPersonIsFollowedByAuthenticated: ["GET /user/following/{username}"], createGpgKeyForAuthenticated: ["POST /user/gpg_keys"], createPublicSshKeyForAuthenticated: ["POST /user/keys"], deleteEmailForAuthenticated: ["DELETE /user/emails"], deleteGpgKeyForAuthenticated: ["DELETE /user/gpg_keys/{gpg_key_id}"], deletePublicSshKeyForAuthenticated: ["DELETE /user/keys/{key_id}"], follow: ["PUT /user/following/{username}"], getAuthenticated: ["GET /user"], getByUsername: ["GET /users/{username}"], getContextForUser: ["GET /users/{username}/hovercard"], getGpgKeyForAuthenticated: ["GET /user/gpg_keys/{gpg_key_id}"], getPublicSshKeyForAuthenticated: ["GET /user/keys/{key_id}"], list: ["GET /users"], listBlockedByAuthenticated: ["GET /user/blocks"], listEmailsForAuthenticated: ["GET /user/emails"], listFollowedByAuthenticated: ["GET /user/following"], listFollowersForAuthenticatedUser: ["GET /user/followers"], listFollowersForUser: ["GET /users/{username}/followers"], listFollowingForUser: ["GET /users/{username}/following"], listGpgKeysForAuthenticated: ["GET /user/gpg_keys"], listGpgKeysForUser: ["GET /users/{username}/gpg_keys"], listPublicEmailsForAuthenticated: ["GET /user/public_emails"], listPublicKeysForUser: ["GET /users/{username}/keys"], listPublicSshKeysForAuthenticated: ["GET /user/keys"], setPrimaryEmailVisibilityForAuthenticated: ["PATCH /user/email/visibility"], unblock: ["DELETE /user/blocks/{username}"], unfollow: ["DELETE /user/following/{username}"], updateAuthenticated: ["PATCH /user"] } };
            var s = "5.5.2";
            function endpointsToMethods(e, t) { var r = {}; for (var _i = 0, _a = Object.entries(t); _i < _a.length; _i++) {
                var _b = _a[_i], s_6 = _b[0], i = _b[1];
                for (var _c = 0, _d = Object.entries(i); _c < _d.length; _c++) {
                    var _e = _d[_c], t_10 = _e[0], n = _e[1];
                    var i_4 = n[0], o = n[1], a = n[2];
                    var _f = i_4.split(/ /), u = _f[0], c = _f[1];
                    var l = Object.assign({ method: u, url: c }, o);
                    if (!r[s_6]) {
                        r[s_6] = {};
                    }
                    var p = r[s_6];
                    if (a) {
                        p[t_10] = decorate(e, s_6, t_10, l, a);
                        continue;
                    }
                    p[t_10] = e.request.defaults(l);
                }
            } return r; }
            function decorate(e, t, r, s, i) { var n = e.request.defaults(s); function withDecorations() {
                var _a, _b, _c;
                var s = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    s[_i] = arguments[_i];
                }
                var o = (_a = n.endpoint).merge.apply(_a, s);
                if (i.mapToData) {
                    o = Object.assign({}, o, (_b = { data: o[i.mapToData] }, _b[i.mapToData] = undefined, _b));
                    return n(o);
                }
                if (i.renamed) {
                    var _d = i.renamed, s_7 = _d[0], n_1 = _d[1];
                    e.log.warn("octokit." + t + "." + r + "() has been renamed to octokit." + s_7 + "." + n_1 + "()");
                }
                if (i.deprecated) {
                    e.log.warn(i.deprecated);
                }
                if (i.renamedParameters) {
                    var o_2 = (_c = n.endpoint).merge.apply(_c, s);
                    for (var _e = 0, _f = Object.entries(i.renamedParameters); _e < _f.length; _e++) {
                        var _g = _f[_e], s_8 = _g[0], n_2 = _g[1];
                        if (s_8 in o_2) {
                            e.log.warn("\"" + s_8 + "\" parameter is deprecated for \"octokit." + t + "." + r + "()\". Use \"" + n_2 + "\" instead");
                            if (!(n_2 in o_2)) {
                                o_2[n_2] = o_2[s_8];
                            }
                            delete o_2[s_8];
                        }
                    }
                    return n(o_2);
                }
                return n.apply(void 0, s);
            } return Object.assign(withDecorations, n); }
            function restEndpointMethods(e) { var t = endpointsToMethods(e, r); return { rest: t }; }
            restEndpointMethods.VERSION = s;
            function legacyRestEndpointMethods(e) { var t = endpointsToMethods(e, r); return _objectSpread2(_objectSpread2({}, t), {}, { rest: t }); }
            legacyRestEndpointMethods.VERSION = s;
            t.legacyRestEndpointMethods = legacyRestEndpointMethods;
            t.restEndpointMethods = restEndpointMethods;
        }, 141: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            function _interopDefault(e) { return e && typeof e === "object" && "default" in e ? e["default"] : e; }
            var s = r(952);
            var i = _interopDefault(r(666));
            var n = i((function (e) { return console.warn(e); }));
            var o = i((function (e) { return console.warn(e); }));
            var RequestError = /** @class */ (function (_super) {
                __extends(RequestError, _super);
                function RequestError(e, t, r) {
                    var _this = _super.call(this, e) || this;
                    if (Error.captureStackTrace) {
                        Error.captureStackTrace(_this, _this.constructor);
                    }
                    _this.name = "HttpError";
                    _this.status = t;
                    var i;
                    if ("headers" in r && typeof r.headers !== "undefined") {
                        i = r.headers;
                    }
                    if ("response" in r) {
                        _this.response = r.response;
                        i = r.response.headers;
                    }
                    var a = Object.assign({}, r.request);
                    if (r.request.headers.authorization) {
                        a.headers = Object.assign({}, r.request.headers, { authorization: r.request.headers.authorization.replace(/ .*$/, " [REDACTED]") });
                    }
                    a.url = a.url.replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]").replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
                    _this.request = a;
                    Object.defineProperty(_this, "code", { get: function () { n(new s.Deprecation("[@octokit/request-error] `error.code` is deprecated, use `error.status`.")); return t; } });
                    Object.defineProperty(_this, "headers", { get: function () { o(new s.Deprecation("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`.")); return i || {}; } });
                    return _this;
                }
                return RequestError;
            }(Error));
            t.RequestError = RequestError;
        }, 723: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            function _interopDefault(e) { return e && typeof e === "object" && "default" in e ? e["default"] : e; }
            var s = r(165);
            var i = r(447);
            var n = r(893);
            var o = _interopDefault(r(351));
            var a = r(141);
            var u = "5.6.0";
            function getBufferResponse(e) { return e.arrayBuffer(); }
            function fetchWrapper(e) {
                var _this = this;
                var t = e.request && e.request.log ? e.request.log : console;
                if (n.isPlainObject(e.body) || Array.isArray(e.body)) {
                    e.body = JSON.stringify(e.body);
                }
                var r = {};
                var s;
                var i;
                var u = e.request && e.request.fetch || o;
                return u(e.url, Object.assign({ method: e.method, body: e.body, headers: e.headers, redirect: e.redirect }, e.request)).then((function (n) { return __awaiter(_this, void 0, void 0, function () {
                    var _i, _a, e_17, s_9, i_5, _b, _c, _d, t_11, o_3;
                    var _e, _f;
                    return __generator(this, function (_g) {
                        switch (_g.label) {
                            case 0:
                                i = n.url;
                                s = n.status;
                                for (_i = 0, _a = n.headers; _i < _a.length; _i++) {
                                    e_17 = _a[_i];
                                    r[e_17[0]] = e_17[1];
                                }
                                if ("deprecation" in r) {
                                    s_9 = r.link && r.link.match(/<([^>]+)>; rel="deprecation"/);
                                    i_5 = s_9 && s_9.pop();
                                    t.warn("[@octokit/request] \"" + e.method + " " + e.url + "\" is deprecated. It is scheduled to be removed on " + r.sunset + (i_5 ? ". See " + i_5 : ""));
                                }
                                if (s === 204 || s === 205) {
                                    return [2 /*return*/];
                                }
                                if (e.method === "HEAD") {
                                    if (s < 400) {
                                        return [2 /*return*/];
                                    }
                                    throw new a.RequestError(n.statusText, s, { response: { url: i, status: s, headers: r, data: undefined }, request: e });
                                }
                                if (!(s === 304)) return [3 /*break*/, 2];
                                _c = (_b = a.RequestError).bind;
                                _d = [void 0, "Not modified", s];
                                _e = {};
                                _f = { url: i, status: s, headers: r };
                                return [4 /*yield*/, getResponseData(n)];
                            case 1: throw new (_c.apply(_b, _d.concat([(_e.response = (_f.data = _g.sent(), _f), _e.request = e, _e)])))();
                            case 2:
                                if (!(s >= 400)) return [3 /*break*/, 4];
                                return [4 /*yield*/, getResponseData(n)];
                            case 3:
                                t_11 = _g.sent();
                                o_3 = new a.RequestError(toErrorMessage(t_11), s, { response: { url: i, status: s, headers: r, data: t_11 }, request: e });
                                throw o_3;
                            case 4: return [2 /*return*/, getResponseData(n)];
                        }
                    });
                }); })).then((function (e) { return ({ status: s, url: i, headers: r, data: e }); }))["catch"]((function (t) { if (t instanceof a.RequestError)
                    throw t; throw new a.RequestError(t.message, 500, { request: e }); }));
            }
            function getResponseData(e) {
                return __awaiter(this, void 0, void 0, function () { var t; return __generator(this, function (_a) {
                    t = e.headers.get("content-type");
                    if (/application\/json/.test(t)) {
                        return [2 /*return*/, e.json()];
                    }
                    if (!t || /^text\/|charset=utf-8$/.test(t)) {
                        return [2 /*return*/, e.text()];
                    }
                    return [2 /*return*/, getBufferResponse(e)];
                }); });
            }
            function toErrorMessage(e) { if (typeof e === "string")
                return e; if ("message" in e) {
                if (Array.isArray(e.errors)) {
                    return e.message + ": " + e.errors.map(JSON.stringify).join(", ");
                }
                return e.message;
            } return "Unknown error: " + JSON.stringify(e); }
            function withDefaults(e, t) { var r = e.defaults(t); var newApi = function (e, t) { var s = r.merge(e, t); if (!s.request || !s.request.hook) {
                return fetchWrapper(r.parse(s));
            } var request = function (e, t) { return fetchWrapper(r.parse(r.merge(e, t))); }; Object.assign(request, { endpoint: r, defaults: withDefaults.bind(null, r) }); return s.request.hook(request, s); }; return Object.assign(newApi, { endpoint: r, defaults: withDefaults.bind(null, r) }); }
            var c = withDefaults(s.endpoint, { headers: { "user-agent": "octokit-request.js/" + u + " " + i.getUserAgent() } });
            t.request = c;
        }, 837: function (e, t, r) { var s = r(923); var i = r(13); var n = r(113); var o = Function.bind; var a = o.bind(o); function bindApi(e, t, r) { var s = a(n, null).apply(null, r ? [t, r] : [t]); e.api = { remove: s }; e.remove = s; ["before", "error", "after", "wrap"].forEach((function (s) { var n = r ? [t, s, r] : [t, s]; e[s] = e.api[s] = a(i, null).apply(null, n); })); } function HookSingular() { var e = "h"; var t = { registry: {} }; var r = s.bind(null, t, e); bindApi(r, t, e); return r; } function HookCollection() { var e = { registry: {} }; var t = s.bind(null, e); bindApi(t, e); return t; } var u = false; function Hook() { if (!u) {
            console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4');
            u = true;
        } return HookCollection(); } Hook.Singular = HookSingular.bind(); Hook.Collection = HookCollection.bind(); e.exports = Hook; e.exports.Hook = Hook; e.exports.Singular = Hook.Singular; e.exports.Collection = Hook.Collection; }, 13: function (e) { e.exports = addHook; function addHook(e, t, r, s) { var i = s; if (!e.registry[r]) {
            e.registry[r] = [];
        } if (t === "before") {
            s = function (e, t) { return Promise.resolve().then(i.bind(null, t)).then(e.bind(null, t)); };
        } if (t === "after") {
            s = function (e, t) { var r; return Promise.resolve().then(e.bind(null, t)).then((function (e) { r = e; return i(r, t); })).then((function () { return r; })); };
        } if (t === "error") {
            s = function (e, t) { return Promise.resolve().then(e.bind(null, t))["catch"]((function (e) { return i(e, t); })); };
        } e.registry[r].push({ hook: s, orig: i }); } }, 923: function (e) { e.exports = register; function register(e, t, r, s) { if (typeof r !== "function") {
            throw new Error("method for before hook must be a function");
        } if (!s) {
            s = {};
        } if (Array.isArray(t)) {
            return t.reverse().reduce((function (t, r) { return register.bind(null, e, r, t, s); }), r)();
        } return Promise.resolve().then((function () { if (!e.registry[t]) {
            return r(s);
        } return e.registry[t].reduce((function (e, t) { return t.hook.bind(null, e, s); }), r)(); })); } }, 113: function (e) { e.exports = removeHook; function removeHook(e, t, r) { if (!e.registry[t]) {
            return;
        } var s = e.registry[t].map((function (e) { return e.orig; })).indexOf(r); if (s === -1) {
            return;
        } e.registry[t].splice(s, 1); } }, 952: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            var Deprecation = /** @class */ (function (_super) {
                __extends(Deprecation, _super);
                function Deprecation(e) {
                    var _this = _super.call(this, e) || this;
                    if (Error.captureStackTrace) {
                        Error.captureStackTrace(_this, _this.constructor);
                    }
                    _this.name = "Deprecation";
                    return _this;
                }
                return Deprecation;
            }(Error));
            t.Deprecation = Deprecation;
        }, 90: function (e) { (function webpackUniversalModuleDefinition(t, r) { if (true)
            e.exports = r();
        else { } })(this, (function () { return function (e) { var t = {}; function __nested_webpack_require_583__(r) { if (t[r])
            return t[r].exports; var s = t[r] = { exports: {}, id: r, loaded: false }; e[r].call(s.exports, s, s.exports, __nested_webpack_require_583__); s.loaded = true; return s.exports; } __nested_webpack_require_583__.m = e; __nested_webpack_require_583__.c = t; __nested_webpack_require_583__.p = ""; return __nested_webpack_require_583__(0); }([function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true });
                var s = r(1);
                var i = r(3);
                var n = r(8);
                var o = r(15);
                function parse(e, t, r) { var o = null; var proxyDelegate = function (e, t) { if (r) {
                    r(e, t);
                } if (o) {
                    o.visit(e, t);
                } }; var a = typeof r === "function" ? proxyDelegate : null; var u = false; if (t) {
                    u = typeof t.comment === "boolean" && t.comment;
                    var c = typeof t.attachComment === "boolean" && t.attachComment;
                    if (u || c) {
                        o = new s.CommentHandler;
                        o.attach = c;
                        t.comment = true;
                        a = proxyDelegate;
                    }
                } var l = false; if (t && typeof t.sourceType === "string") {
                    l = t.sourceType === "module";
                } var p; if (t && typeof t.jsx === "boolean" && t.jsx) {
                    p = new i.JSXParser(e, t, a);
                }
                else {
                    p = new n.Parser(e, t, a);
                } var h = l ? p.parseModule() : p.parseScript(); var d = h; if (u && o) {
                    d.comments = o.comments;
                } if (p.config.tokens) {
                    d.tokens = p.tokens;
                } if (p.config.tolerant) {
                    d.errors = p.errorHandler.errors;
                } return d; }
                t.parse = parse;
                function parseModule(e, t, r) { var s = t || {}; s.sourceType = "module"; return parse(e, s, r); }
                t.parseModule = parseModule;
                function parseScript(e, t, r) { var s = t || {}; s.sourceType = "script"; return parse(e, s, r); }
                t.parseScript = parseScript;
                function tokenize(e, t, r) { var s = new o.Tokenizer(e, t); var i; i = []; try {
                    while (true) {
                        var n = s.getNextToken();
                        if (!n) {
                            break;
                        }
                        if (r) {
                            n = r(n);
                        }
                        i.push(n);
                    }
                }
                catch (e) {
                    s.errorHandler.tolerate(e);
                } if (s.errorHandler.tolerant) {
                    i.errors = s.errors();
                } return i; }
                t.tokenize = tokenize;
                var a = r(2);
                t.Syntax = a.Syntax;
                t.version = "4.0.1";
            }, function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true });
                var s = r(2);
                var i = function () { function CommentHandler() { this.attach = false; this.comments = []; this.stack = []; this.leading = []; this.trailing = []; } CommentHandler.prototype.insertInnerComments = function (e, t) { if (e.type === s.Syntax.BlockStatement && e.body.length === 0) {
                    var r = [];
                    for (var i = this.leading.length - 1; i >= 0; --i) {
                        var n = this.leading[i];
                        if (t.end.offset >= n.start) {
                            r.unshift(n.comment);
                            this.leading.splice(i, 1);
                            this.trailing.splice(i, 1);
                        }
                    }
                    if (r.length) {
                        e.innerComments = r;
                    }
                } }; CommentHandler.prototype.findTrailingComments = function (e) { var t = []; if (this.trailing.length > 0) {
                    for (var r = this.trailing.length - 1; r >= 0; --r) {
                        var s = this.trailing[r];
                        if (s.start >= e.end.offset) {
                            t.unshift(s.comment);
                        }
                    }
                    this.trailing.length = 0;
                    return t;
                } var i = this.stack[this.stack.length - 1]; if (i && i.node.trailingComments) {
                    var n = i.node.trailingComments[0];
                    if (n && n.range[0] >= e.end.offset) {
                        t = i.node.trailingComments;
                        delete i.node.trailingComments;
                    }
                } return t; }; CommentHandler.prototype.findLeadingComments = function (e) { var t = []; var r; while (this.stack.length > 0) {
                    var s = this.stack[this.stack.length - 1];
                    if (s && s.start >= e.start.offset) {
                        r = s.node;
                        this.stack.pop();
                    }
                    else {
                        break;
                    }
                } if (r) {
                    var i = r.leadingComments ? r.leadingComments.length : 0;
                    for (var n = i - 1; n >= 0; --n) {
                        var o = r.leadingComments[n];
                        if (o.range[1] <= e.start.offset) {
                            t.unshift(o);
                            r.leadingComments.splice(n, 1);
                        }
                    }
                    if (r.leadingComments && r.leadingComments.length === 0) {
                        delete r.leadingComments;
                    }
                    return t;
                } for (var n = this.leading.length - 1; n >= 0; --n) {
                    var s = this.leading[n];
                    if (s.start <= e.start.offset) {
                        t.unshift(s.comment);
                        this.leading.splice(n, 1);
                    }
                } return t; }; CommentHandler.prototype.visitNode = function (e, t) { if (e.type === s.Syntax.Program && e.body.length > 0) {
                    return;
                } this.insertInnerComments(e, t); var r = this.findTrailingComments(t); var i = this.findLeadingComments(t); if (i.length > 0) {
                    e.leadingComments = i;
                } if (r.length > 0) {
                    e.trailingComments = r;
                } this.stack.push({ node: e, start: t.start.offset }); }; CommentHandler.prototype.visitComment = function (e, t) { var r = e.type[0] === "L" ? "Line" : "Block"; var s = { type: r, value: e.value }; if (e.range) {
                    s.range = e.range;
                } if (e.loc) {
                    s.loc = e.loc;
                } this.comments.push(s); if (this.attach) {
                    var i = { comment: { type: r, value: e.value, range: [t.start.offset, t.end.offset] }, start: t.start.offset };
                    if (e.loc) {
                        i.comment.loc = e.loc;
                    }
                    e.type = r;
                    this.leading.push(i);
                    this.trailing.push(i);
                } }; CommentHandler.prototype.visit = function (e, t) { if (e.type === "LineComment") {
                    this.visitComment(e, t);
                }
                else if (e.type === "BlockComment") {
                    this.visitComment(e, t);
                }
                else if (this.attach) {
                    this.visitNode(e, t);
                } }; return CommentHandler; }();
                t.CommentHandler = i;
            }, function (e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true });
                t.Syntax = { AssignmentExpression: "AssignmentExpression", AssignmentPattern: "AssignmentPattern", ArrayExpression: "ArrayExpression", ArrayPattern: "ArrayPattern", ArrowFunctionExpression: "ArrowFunctionExpression", AwaitExpression: "AwaitExpression", BlockStatement: "BlockStatement", BinaryExpression: "BinaryExpression", BreakStatement: "BreakStatement", CallExpression: "CallExpression", CatchClause: "CatchClause", ClassBody: "ClassBody", ClassDeclaration: "ClassDeclaration", ClassExpression: "ClassExpression", ConditionalExpression: "ConditionalExpression", ContinueStatement: "ContinueStatement", DoWhileStatement: "DoWhileStatement", DebuggerStatement: "DebuggerStatement", EmptyStatement: "EmptyStatement", ExportAllDeclaration: "ExportAllDeclaration", ExportDefaultDeclaration: "ExportDefaultDeclaration", ExportNamedDeclaration: "ExportNamedDeclaration", ExportSpecifier: "ExportSpecifier", ExpressionStatement: "ExpressionStatement", ForStatement: "ForStatement", ForOfStatement: "ForOfStatement", ForInStatement: "ForInStatement", FunctionDeclaration: "FunctionDeclaration", FunctionExpression: "FunctionExpression", Identifier: "Identifier", IfStatement: "IfStatement", ImportDeclaration: "ImportDeclaration", ImportDefaultSpecifier: "ImportDefaultSpecifier", ImportNamespaceSpecifier: "ImportNamespaceSpecifier", ImportSpecifier: "ImportSpecifier", Literal: "Literal", LabeledStatement: "LabeledStatement", LogicalExpression: "LogicalExpression", MemberExpression: "MemberExpression", MetaProperty: "MetaProperty", MethodDefinition: "MethodDefinition", NewExpression: "NewExpression", ObjectExpression: "ObjectExpression", ObjectPattern: "ObjectPattern", Program: "Program", Property: "Property", RestElement: "RestElement", ReturnStatement: "ReturnStatement", SequenceExpression: "SequenceExpression", SpreadElement: "SpreadElement", Super: "Super", SwitchCase: "SwitchCase", SwitchStatement: "SwitchStatement", TaggedTemplateExpression: "TaggedTemplateExpression", TemplateElement: "TemplateElement", TemplateLiteral: "TemplateLiteral", ThisExpression: "ThisExpression", ThrowStatement: "ThrowStatement", TryStatement: "TryStatement", UnaryExpression: "UnaryExpression", UpdateExpression: "UpdateExpression", VariableDeclaration: "VariableDeclaration", VariableDeclarator: "VariableDeclarator", WhileStatement: "WhileStatement", WithStatement: "WithStatement", YieldExpression: "YieldExpression" };
            }, function (e, t, r) {
                "use strict";
                var s = this && this.__extends || function () { var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var r in t)
                    if (t.hasOwnProperty(r))
                        e[r] = t[r]; }; return function (t, r) { e(t, r); function __() { this.constructor = t; } t.prototype = r === null ? Object.create(r) : (__.prototype = r.prototype, new __); }; }();
                Object.defineProperty(t, "__esModule", { value: true });
                var i = r(4);
                var n = r(5);
                var o = r(6);
                var a = r(7);
                var u = r(8);
                var c = r(13);
                var l = r(14);
                c.TokenName[100] = "JSXIdentifier";
                c.TokenName[101] = "JSXText";
                function getQualifiedElementName(e) { var t; switch (e.type) {
                    case o.JSXSyntax.JSXIdentifier:
                        var r = e;
                        t = r.name;
                        break;
                    case o.JSXSyntax.JSXNamespacedName:
                        var s = e;
                        t = getQualifiedElementName(s.namespace) + ":" + getQualifiedElementName(s.name);
                        break;
                    case o.JSXSyntax.JSXMemberExpression:
                        var i = e;
                        t = getQualifiedElementName(i.object) + "." + getQualifiedElementName(i.property);
                        break;
                    default: break;
                } return t; }
                var p = function (e) { s(JSXParser, e); function JSXParser(t, r, s) { return e.call(this, t, r, s) || this; } JSXParser.prototype.parsePrimaryExpression = function () { return this.match("<") ? this.parseJSXRoot() : e.prototype.parsePrimaryExpression.call(this); }; JSXParser.prototype.startJSX = function () { this.scanner.index = this.startMarker.index; this.scanner.lineNumber = this.startMarker.line; this.scanner.lineStart = this.startMarker.index - this.startMarker.column; }; JSXParser.prototype.finishJSX = function () { this.nextToken(); }; JSXParser.prototype.reenterJSX = function () { this.startJSX(); this.expectJSX("}"); if (this.config.tokens) {
                    this.tokens.pop();
                } }; JSXParser.prototype.createJSXNode = function () { this.collectComments(); return { index: this.scanner.index, line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart }; }; JSXParser.prototype.createJSXChildNode = function () { return { index: this.scanner.index, line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart }; }; JSXParser.prototype.scanXHTMLEntity = function (e) { var t = "&"; var r = true; var s = false; var n = false; var o = false; while (!this.scanner.eof() && r && !s) {
                    var a = this.scanner.source[this.scanner.index];
                    if (a === e) {
                        break;
                    }
                    s = a === ";";
                    t += a;
                    ++this.scanner.index;
                    if (!s) {
                        switch (t.length) {
                            case 2:
                                n = a === "#";
                                break;
                            case 3:
                                if (n) {
                                    o = a === "x";
                                    r = o || i.Character.isDecimalDigit(a.charCodeAt(0));
                                    n = n && !o;
                                }
                                break;
                            default:
                                r = r && !(n && !i.Character.isDecimalDigit(a.charCodeAt(0)));
                                r = r && !(o && !i.Character.isHexDigit(a.charCodeAt(0)));
                                break;
                        }
                    }
                } if (r && s && t.length > 2) {
                    var u = t.substr(1, t.length - 2);
                    if (n && u.length > 1) {
                        t = String.fromCharCode(parseInt(u.substr(1), 10));
                    }
                    else if (o && u.length > 2) {
                        t = String.fromCharCode(parseInt("0" + u.substr(1), 16));
                    }
                    else if (!n && !o && l.XHTMLEntities[u]) {
                        t = l.XHTMLEntities[u];
                    }
                } return t; }; JSXParser.prototype.lexJSX = function () { var e = this.scanner.source.charCodeAt(this.scanner.index); if (e === 60 || e === 62 || e === 47 || e === 58 || e === 61 || e === 123 || e === 125) {
                    var t = this.scanner.source[this.scanner.index++];
                    return { type: 7, value: t, lineNumber: this.scanner.lineNumber, lineStart: this.scanner.lineStart, start: this.scanner.index - 1, end: this.scanner.index };
                } if (e === 34 || e === 39) {
                    var r = this.scanner.index;
                    var s = this.scanner.source[this.scanner.index++];
                    var n = "";
                    while (!this.scanner.eof()) {
                        var o = this.scanner.source[this.scanner.index++];
                        if (o === s) {
                            break;
                        }
                        else if (o === "&") {
                            n += this.scanXHTMLEntity(s);
                        }
                        else {
                            n += o;
                        }
                    }
                    return { type: 8, value: n, lineNumber: this.scanner.lineNumber, lineStart: this.scanner.lineStart, start: r, end: this.scanner.index };
                } if (e === 46) {
                    var a = this.scanner.source.charCodeAt(this.scanner.index + 1);
                    var u = this.scanner.source.charCodeAt(this.scanner.index + 2);
                    var t = a === 46 && u === 46 ? "..." : ".";
                    var r = this.scanner.index;
                    this.scanner.index += t.length;
                    return { type: 7, value: t, lineNumber: this.scanner.lineNumber, lineStart: this.scanner.lineStart, start: r, end: this.scanner.index };
                } if (e === 96) {
                    return { type: 10, value: "", lineNumber: this.scanner.lineNumber, lineStart: this.scanner.lineStart, start: this.scanner.index, end: this.scanner.index };
                } if (i.Character.isIdentifierStart(e) && e !== 92) {
                    var r = this.scanner.index;
                    ++this.scanner.index;
                    while (!this.scanner.eof()) {
                        var o = this.scanner.source.charCodeAt(this.scanner.index);
                        if (i.Character.isIdentifierPart(o) && o !== 92) {
                            ++this.scanner.index;
                        }
                        else if (o === 45) {
                            ++this.scanner.index;
                        }
                        else {
                            break;
                        }
                    }
                    var c = this.scanner.source.slice(r, this.scanner.index);
                    return { type: 100, value: c, lineNumber: this.scanner.lineNumber, lineStart: this.scanner.lineStart, start: r, end: this.scanner.index };
                } return this.scanner.lex(); }; JSXParser.prototype.nextJSXToken = function () { this.collectComments(); this.startMarker.index = this.scanner.index; this.startMarker.line = this.scanner.lineNumber; this.startMarker.column = this.scanner.index - this.scanner.lineStart; var e = this.lexJSX(); this.lastMarker.index = this.scanner.index; this.lastMarker.line = this.scanner.lineNumber; this.lastMarker.column = this.scanner.index - this.scanner.lineStart; if (this.config.tokens) {
                    this.tokens.push(this.convertToken(e));
                } return e; }; JSXParser.prototype.nextJSXText = function () { this.startMarker.index = this.scanner.index; this.startMarker.line = this.scanner.lineNumber; this.startMarker.column = this.scanner.index - this.scanner.lineStart; var e = this.scanner.index; var t = ""; while (!this.scanner.eof()) {
                    var r = this.scanner.source[this.scanner.index];
                    if (r === "{" || r === "<") {
                        break;
                    }
                    ++this.scanner.index;
                    t += r;
                    if (i.Character.isLineTerminator(r.charCodeAt(0))) {
                        ++this.scanner.lineNumber;
                        if (r === "\r" && this.scanner.source[this.scanner.index] === "\n") {
                            ++this.scanner.index;
                        }
                        this.scanner.lineStart = this.scanner.index;
                    }
                } this.lastMarker.index = this.scanner.index; this.lastMarker.line = this.scanner.lineNumber; this.lastMarker.column = this.scanner.index - this.scanner.lineStart; var s = { type: 101, value: t, lineNumber: this.scanner.lineNumber, lineStart: this.scanner.lineStart, start: e, end: this.scanner.index }; if (t.length > 0 && this.config.tokens) {
                    this.tokens.push(this.convertToken(s));
                } return s; }; JSXParser.prototype.peekJSXToken = function () { var e = this.scanner.saveState(); this.scanner.scanComments(); var t = this.lexJSX(); this.scanner.restoreState(e); return t; }; JSXParser.prototype.expectJSX = function (e) { var t = this.nextJSXToken(); if (t.type !== 7 || t.value !== e) {
                    this.throwUnexpectedToken(t);
                } }; JSXParser.prototype.matchJSX = function (e) { var t = this.peekJSXToken(); return t.type === 7 && t.value === e; }; JSXParser.prototype.parseJSXIdentifier = function () { var e = this.createJSXNode(); var t = this.nextJSXToken(); if (t.type !== 100) {
                    this.throwUnexpectedToken(t);
                } return this.finalize(e, new n.JSXIdentifier(t.value)); }; JSXParser.prototype.parseJSXElementName = function () { var e = this.createJSXNode(); var t = this.parseJSXIdentifier(); if (this.matchJSX(":")) {
                    var r = t;
                    this.expectJSX(":");
                    var s = this.parseJSXIdentifier();
                    t = this.finalize(e, new n.JSXNamespacedName(r, s));
                }
                else if (this.matchJSX(".")) {
                    while (this.matchJSX(".")) {
                        var i = t;
                        this.expectJSX(".");
                        var o = this.parseJSXIdentifier();
                        t = this.finalize(e, new n.JSXMemberExpression(i, o));
                    }
                } return t; }; JSXParser.prototype.parseJSXAttributeName = function () { var e = this.createJSXNode(); var t; var r = this.parseJSXIdentifier(); if (this.matchJSX(":")) {
                    var s = r;
                    this.expectJSX(":");
                    var i = this.parseJSXIdentifier();
                    t = this.finalize(e, new n.JSXNamespacedName(s, i));
                }
                else {
                    t = r;
                } return t; }; JSXParser.prototype.parseJSXStringLiteralAttribute = function () { var e = this.createJSXNode(); var t = this.nextJSXToken(); if (t.type !== 8) {
                    this.throwUnexpectedToken(t);
                } var r = this.getTokenRaw(t); return this.finalize(e, new a.Literal(t.value, r)); }; JSXParser.prototype.parseJSXExpressionAttribute = function () { var e = this.createJSXNode(); this.expectJSX("{"); this.finishJSX(); if (this.match("}")) {
                    this.tolerateError("JSX attributes must only be assigned a non-empty expression");
                } var t = this.parseAssignmentExpression(); this.reenterJSX(); return this.finalize(e, new n.JSXExpressionContainer(t)); }; JSXParser.prototype.parseJSXAttributeValue = function () { return this.matchJSX("{") ? this.parseJSXExpressionAttribute() : this.matchJSX("<") ? this.parseJSXElement() : this.parseJSXStringLiteralAttribute(); }; JSXParser.prototype.parseJSXNameValueAttribute = function () { var e = this.createJSXNode(); var t = this.parseJSXAttributeName(); var r = null; if (this.matchJSX("=")) {
                    this.expectJSX("=");
                    r = this.parseJSXAttributeValue();
                } return this.finalize(e, new n.JSXAttribute(t, r)); }; JSXParser.prototype.parseJSXSpreadAttribute = function () { var e = this.createJSXNode(); this.expectJSX("{"); this.expectJSX("..."); this.finishJSX(); var t = this.parseAssignmentExpression(); this.reenterJSX(); return this.finalize(e, new n.JSXSpreadAttribute(t)); }; JSXParser.prototype.parseJSXAttributes = function () { var e = []; while (!this.matchJSX("/") && !this.matchJSX(">")) {
                    var t = this.matchJSX("{") ? this.parseJSXSpreadAttribute() : this.parseJSXNameValueAttribute();
                    e.push(t);
                } return e; }; JSXParser.prototype.parseJSXOpeningElement = function () { var e = this.createJSXNode(); this.expectJSX("<"); var t = this.parseJSXElementName(); var r = this.parseJSXAttributes(); var s = this.matchJSX("/"); if (s) {
                    this.expectJSX("/");
                } this.expectJSX(">"); return this.finalize(e, new n.JSXOpeningElement(t, s, r)); }; JSXParser.prototype.parseJSXBoundaryElement = function () { var e = this.createJSXNode(); this.expectJSX("<"); if (this.matchJSX("/")) {
                    this.expectJSX("/");
                    var t = this.parseJSXElementName();
                    this.expectJSX(">");
                    return this.finalize(e, new n.JSXClosingElement(t));
                } var r = this.parseJSXElementName(); var s = this.parseJSXAttributes(); var i = this.matchJSX("/"); if (i) {
                    this.expectJSX("/");
                } this.expectJSX(">"); return this.finalize(e, new n.JSXOpeningElement(r, i, s)); }; JSXParser.prototype.parseJSXEmptyExpression = function () { var e = this.createJSXChildNode(); this.collectComments(); this.lastMarker.index = this.scanner.index; this.lastMarker.line = this.scanner.lineNumber; this.lastMarker.column = this.scanner.index - this.scanner.lineStart; return this.finalize(e, new n.JSXEmptyExpression); }; JSXParser.prototype.parseJSXExpressionContainer = function () { var e = this.createJSXNode(); this.expectJSX("{"); var t; if (this.matchJSX("}")) {
                    t = this.parseJSXEmptyExpression();
                    this.expectJSX("}");
                }
                else {
                    this.finishJSX();
                    t = this.parseAssignmentExpression();
                    this.reenterJSX();
                } return this.finalize(e, new n.JSXExpressionContainer(t)); }; JSXParser.prototype.parseJSXChildren = function () { var e = []; while (!this.scanner.eof()) {
                    var t = this.createJSXChildNode();
                    var r = this.nextJSXText();
                    if (r.start < r.end) {
                        var s = this.getTokenRaw(r);
                        var i = this.finalize(t, new n.JSXText(r.value, s));
                        e.push(i);
                    }
                    if (this.scanner.source[this.scanner.index] === "{") {
                        var o = this.parseJSXExpressionContainer();
                        e.push(o);
                    }
                    else {
                        break;
                    }
                } return e; }; JSXParser.prototype.parseComplexJSXElement = function (e) { var t = []; while (!this.scanner.eof()) {
                    e.children = e.children.concat(this.parseJSXChildren());
                    var r = this.createJSXChildNode();
                    var s = this.parseJSXBoundaryElement();
                    if (s.type === o.JSXSyntax.JSXOpeningElement) {
                        var i = s;
                        if (i.selfClosing) {
                            var a = this.finalize(r, new n.JSXElement(i, [], null));
                            e.children.push(a);
                        }
                        else {
                            t.push(e);
                            e = { node: r, opening: i, closing: null, children: [] };
                        }
                    }
                    if (s.type === o.JSXSyntax.JSXClosingElement) {
                        e.closing = s;
                        var u = getQualifiedElementName(e.opening.name);
                        var c = getQualifiedElementName(e.closing.name);
                        if (u !== c) {
                            this.tolerateError("Expected corresponding JSX closing tag for %0", u);
                        }
                        if (t.length > 0) {
                            var a = this.finalize(e.node, new n.JSXElement(e.opening, e.children, e.closing));
                            e = t[t.length - 1];
                            e.children.push(a);
                            t.pop();
                        }
                        else {
                            break;
                        }
                    }
                } return e; }; JSXParser.prototype.parseJSXElement = function () { var e = this.createJSXNode(); var t = this.parseJSXOpeningElement(); var r = []; var s = null; if (!t.selfClosing) {
                    var i = this.parseComplexJSXElement({ node: e, opening: t, closing: s, children: r });
                    r = i.children;
                    s = i.closing;
                } return this.finalize(e, new n.JSXElement(t, r, s)); }; JSXParser.prototype.parseJSXRoot = function () { if (this.config.tokens) {
                    this.tokens.pop();
                } this.startJSX(); var e = this.parseJSXElement(); this.finishJSX(); return e; }; JSXParser.prototype.isStartOfExpression = function () { return e.prototype.isStartOfExpression.call(this) || this.match("<"); }; return JSXParser; }(u.Parser);
                t.JSXParser = p;
            }, function (e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true });
                var r = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/ };
                t.Character = { fromCodePoint: function (e) { return e < 65536 ? String.fromCharCode(e) : String.fromCharCode(55296 + (e - 65536 >> 10)) + String.fromCharCode(56320 + (e - 65536 & 1023)); }, isWhiteSpace: function (e) { return e === 32 || e === 9 || e === 11 || e === 12 || e === 160 || e >= 5760 && [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].indexOf(e) >= 0; }, isLineTerminator: function (e) { return e === 10 || e === 13 || e === 8232 || e === 8233; }, isIdentifierStart: function (e) { return e === 36 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e === 92 || e >= 128 && r.NonAsciiIdentifierStart.test(t.Character.fromCodePoint(e)); }, isIdentifierPart: function (e) { return e === 36 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 92 || e >= 128 && r.NonAsciiIdentifierPart.test(t.Character.fromCodePoint(e)); }, isDecimalDigit: function (e) { return e >= 48 && e <= 57; }, isHexDigit: function (e) { return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102; }, isOctalDigit: function (e) { return e >= 48 && e <= 55; } };
            }, function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true });
                var s = r(6);
                var i = function () { function JSXClosingElement(e) { this.type = s.JSXSyntax.JSXClosingElement; this.name = e; } return JSXClosingElement; }();
                t.JSXClosingElement = i;
                var n = function () { function JSXElement(e, t, r) { this.type = s.JSXSyntax.JSXElement; this.openingElement = e; this.children = t; this.closingElement = r; } return JSXElement; }();
                t.JSXElement = n;
                var o = function () { function JSXEmptyExpression() { this.type = s.JSXSyntax.JSXEmptyExpression; } return JSXEmptyExpression; }();
                t.JSXEmptyExpression = o;
                var a = function () { function JSXExpressionContainer(e) { this.type = s.JSXSyntax.JSXExpressionContainer; this.expression = e; } return JSXExpressionContainer; }();
                t.JSXExpressionContainer = a;
                var u = function () { function JSXIdentifier(e) { this.type = s.JSXSyntax.JSXIdentifier; this.name = e; } return JSXIdentifier; }();
                t.JSXIdentifier = u;
                var c = function () { function JSXMemberExpression(e, t) { this.type = s.JSXSyntax.JSXMemberExpression; this.object = e; this.property = t; } return JSXMemberExpression; }();
                t.JSXMemberExpression = c;
                var l = function () { function JSXAttribute(e, t) { this.type = s.JSXSyntax.JSXAttribute; this.name = e; this.value = t; } return JSXAttribute; }();
                t.JSXAttribute = l;
                var p = function () { function JSXNamespacedName(e, t) { this.type = s.JSXSyntax.JSXNamespacedName; this.namespace = e; this.name = t; } return JSXNamespacedName; }();
                t.JSXNamespacedName = p;
                var h = function () { function JSXOpeningElement(e, t, r) { this.type = s.JSXSyntax.JSXOpeningElement; this.name = e; this.selfClosing = t; this.attributes = r; } return JSXOpeningElement; }();
                t.JSXOpeningElement = h;
                var d = function () { function JSXSpreadAttribute(e) { this.type = s.JSXSyntax.JSXSpreadAttribute; this.argument = e; } return JSXSpreadAttribute; }();
                t.JSXSpreadAttribute = d;
                var m = function () { function JSXText(e, t) { this.type = s.JSXSyntax.JSXText; this.value = e; this.raw = t; } return JSXText; }();
                t.JSXText = m;
            }, function (e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true });
                t.JSXSyntax = { JSXAttribute: "JSXAttribute", JSXClosingElement: "JSXClosingElement", JSXElement: "JSXElement", JSXEmptyExpression: "JSXEmptyExpression", JSXExpressionContainer: "JSXExpressionContainer", JSXIdentifier: "JSXIdentifier", JSXMemberExpression: "JSXMemberExpression", JSXNamespacedName: "JSXNamespacedName", JSXOpeningElement: "JSXOpeningElement", JSXSpreadAttribute: "JSXSpreadAttribute", JSXText: "JSXText" };
            }, function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true });
                var s = r(2);
                var i = function () { function ArrayExpression(e) { this.type = s.Syntax.ArrayExpression; this.elements = e; } return ArrayExpression; }();
                t.ArrayExpression = i;
                var n = function () { function ArrayPattern(e) { this.type = s.Syntax.ArrayPattern; this.elements = e; } return ArrayPattern; }();
                t.ArrayPattern = n;
                var o = function () { function ArrowFunctionExpression(e, t, r) { this.type = s.Syntax.ArrowFunctionExpression; this.id = null; this.params = e; this.body = t; this.generator = false; this.expression = r; this.async = false; } return ArrowFunctionExpression; }();
                t.ArrowFunctionExpression = o;
                var a = function () { function AssignmentExpression(e, t, r) { this.type = s.Syntax.AssignmentExpression; this.operator = e; this.left = t; this.right = r; } return AssignmentExpression; }();
                t.AssignmentExpression = a;
                var u = function () { function AssignmentPattern(e, t) { this.type = s.Syntax.AssignmentPattern; this.left = e; this.right = t; } return AssignmentPattern; }();
                t.AssignmentPattern = u;
                var c = function () { function AsyncArrowFunctionExpression(e, t, r) { this.type = s.Syntax.ArrowFunctionExpression; this.id = null; this.params = e; this.body = t; this.generator = false; this.expression = r; this.async = true; } return AsyncArrowFunctionExpression; }();
                t.AsyncArrowFunctionExpression = c;
                var l = function () { function AsyncFunctionDeclaration(e, t, r) { this.type = s.Syntax.FunctionDeclaration; this.id = e; this.params = t; this.body = r; this.generator = false; this.expression = false; this.async = true; } return AsyncFunctionDeclaration; }();
                t.AsyncFunctionDeclaration = l;
                var p = function () { function AsyncFunctionExpression(e, t, r) { this.type = s.Syntax.FunctionExpression; this.id = e; this.params = t; this.body = r; this.generator = false; this.expression = false; this.async = true; } return AsyncFunctionExpression; }();
                t.AsyncFunctionExpression = p;
                var h = function () { function AwaitExpression(e) { this.type = s.Syntax.AwaitExpression; this.argument = e; } return AwaitExpression; }();
                t.AwaitExpression = h;
                var d = function () { function BinaryExpression(e, t, r) { var i = e === "||" || e === "&&"; this.type = i ? s.Syntax.LogicalExpression : s.Syntax.BinaryExpression; this.operator = e; this.left = t; this.right = r; } return BinaryExpression; }();
                t.BinaryExpression = d;
                var m = function () { function BlockStatement(e) { this.type = s.Syntax.BlockStatement; this.body = e; } return BlockStatement; }();
                t.BlockStatement = m;
                var g = function () { function BreakStatement(e) { this.type = s.Syntax.BreakStatement; this.label = e; } return BreakStatement; }();
                t.BreakStatement = g;
                var E = function () { function CallExpression(e, t) { this.type = s.Syntax.CallExpression; this.callee = e; this.arguments = t; } return CallExpression; }();
                t.CallExpression = E;
                var v = function () { function CatchClause(e, t) { this.type = s.Syntax.CatchClause; this.param = e; this.body = t; } return CatchClause; }();
                t.CatchClause = v;
                var y = function () { function ClassBody(e) { this.type = s.Syntax.ClassBody; this.body = e; } return ClassBody; }();
                t.ClassBody = y;
                var D = function () { function ClassDeclaration(e, t, r) { this.type = s.Syntax.ClassDeclaration; this.id = e; this.superClass = t; this.body = r; } return ClassDeclaration; }();
                t.ClassDeclaration = D;
                var x = function () { function ClassExpression(e, t, r) { this.type = s.Syntax.ClassExpression; this.id = e; this.superClass = t; this.body = r; } return ClassExpression; }();
                t.ClassExpression = x;
                var w = function () { function ComputedMemberExpression(e, t) { this.type = s.Syntax.MemberExpression; this.computed = true; this.object = e; this.property = t; } return ComputedMemberExpression; }();
                t.ComputedMemberExpression = w;
                var b = function () { function ConditionalExpression(e, t, r) { this.type = s.Syntax.ConditionalExpression; this.test = e; this.consequent = t; this.alternate = r; } return ConditionalExpression; }();
                t.ConditionalExpression = b;
                var T = function () { function ContinueStatement(e) { this.type = s.Syntax.ContinueStatement; this.label = e; } return ContinueStatement; }();
                t.ContinueStatement = T;
                var S = function () { function DebuggerStatement() { this.type = s.Syntax.DebuggerStatement; } return DebuggerStatement; }();
                t.DebuggerStatement = S;
                var C = function () { function Directive(e, t) { this.type = s.Syntax.ExpressionStatement; this.expression = e; this.directive = t; } return Directive; }();
                t.Directive = C;
                var A = function () { function DoWhileStatement(e, t) { this.type = s.Syntax.DoWhileStatement; this.body = e; this.test = t; } return DoWhileStatement; }();
                t.DoWhileStatement = A;
                var k = function () { function EmptyStatement() { this.type = s.Syntax.EmptyStatement; } return EmptyStatement; }();
                t.EmptyStatement = k;
                var F = function () { function ExportAllDeclaration(e) { this.type = s.Syntax.ExportAllDeclaration; this.source = e; } return ExportAllDeclaration; }();
                t.ExportAllDeclaration = F;
                var _ = function () { function ExportDefaultDeclaration(e) { this.type = s.Syntax.ExportDefaultDeclaration; this.declaration = e; } return ExportDefaultDeclaration; }();
                t.ExportDefaultDeclaration = _;
                var P = function () { function ExportNamedDeclaration(e, t, r) { this.type = s.Syntax.ExportNamedDeclaration; this.declaration = e; this.specifiers = t; this.source = r; } return ExportNamedDeclaration; }();
                t.ExportNamedDeclaration = P;
                var O = function () { function ExportSpecifier(e, t) { this.type = s.Syntax.ExportSpecifier; this.exported = t; this.local = e; } return ExportSpecifier; }();
                t.ExportSpecifier = O;
                var B = function () { function ExpressionStatement(e) { this.type = s.Syntax.ExpressionStatement; this.expression = e; } return ExpressionStatement; }();
                t.ExpressionStatement = B;
                var G = function () { function ForInStatement(e, t, r) { this.type = s.Syntax.ForInStatement; this.left = e; this.right = t; this.body = r; this.each = false; } return ForInStatement; }();
                t.ForInStatement = G;
                var R = function () { function ForOfStatement(e, t, r) { this.type = s.Syntax.ForOfStatement; this.left = e; this.right = t; this.body = r; } return ForOfStatement; }();
                t.ForOfStatement = R;
                var U = function () { function ForStatement(e, t, r, i) { this.type = s.Syntax.ForStatement; this.init = e; this.test = t; this.update = r; this.body = i; } return ForStatement; }();
                t.ForStatement = U;
                var I = function () { function FunctionDeclaration(e, t, r, i) { this.type = s.Syntax.FunctionDeclaration; this.id = e; this.params = t; this.body = r; this.generator = i; this.expression = false; this.async = false; } return FunctionDeclaration; }();
                t.FunctionDeclaration = I;
                var N = function () { function FunctionExpression(e, t, r, i) { this.type = s.Syntax.FunctionExpression; this.id = e; this.params = t; this.body = r; this.generator = i; this.expression = false; this.async = false; } return FunctionExpression; }();
                t.FunctionExpression = N;
                var j = function () { function Identifier(e) { this.type = s.Syntax.Identifier; this.name = e; } return Identifier; }();
                t.Identifier = j;
                var M = function () { function IfStatement(e, t, r) { this.type = s.Syntax.IfStatement; this.test = e; this.consequent = t; this.alternate = r; } return IfStatement; }();
                t.IfStatement = M;
                var L = function () { function ImportDeclaration(e, t) { this.type = s.Syntax.ImportDeclaration; this.specifiers = e; this.source = t; } return ImportDeclaration; }();
                t.ImportDeclaration = L;
                var q = function () { function ImportDefaultSpecifier(e) { this.type = s.Syntax.ImportDefaultSpecifier; this.local = e; } return ImportDefaultSpecifier; }();
                t.ImportDefaultSpecifier = q;
                var H = function () { function ImportNamespaceSpecifier(e) { this.type = s.Syntax.ImportNamespaceSpecifier; this.local = e; } return ImportNamespaceSpecifier; }();
                t.ImportNamespaceSpecifier = H;
                var J = function () { function ImportSpecifier(e, t) { this.type = s.Syntax.ImportSpecifier; this.local = e; this.imported = t; } return ImportSpecifier; }();
                t.ImportSpecifier = J;
                var z = function () { function LabeledStatement(e, t) { this.type = s.Syntax.LabeledStatement; this.label = e; this.body = t; } return LabeledStatement; }();
                t.LabeledStatement = z;
                var X = function () { function Literal(e, t) { this.type = s.Syntax.Literal; this.value = e; this.raw = t; } return Literal; }();
                t.Literal = X;
                var K = function () { function MetaProperty(e, t) { this.type = s.Syntax.MetaProperty; this.meta = e; this.property = t; } return MetaProperty; }();
                t.MetaProperty = K;
                var W = function () { function MethodDefinition(e, t, r, i, n) { this.type = s.Syntax.MethodDefinition; this.key = e; this.computed = t; this.value = r; this.kind = i; this.static = n; } return MethodDefinition; }();
                t.MethodDefinition = W;
                var $ = function () { function Module(e) { this.type = s.Syntax.Program; this.body = e; this.sourceType = "module"; } return Module; }();
                t.Module = $;
                var V = function () { function NewExpression(e, t) { this.type = s.Syntax.NewExpression; this.callee = e; this.arguments = t; } return NewExpression; }();
                t.NewExpression = V;
                var Y = function () { function ObjectExpression(e) { this.type = s.Syntax.ObjectExpression; this.properties = e; } return ObjectExpression; }();
                t.ObjectExpression = Y;
                var Q = function () { function ObjectPattern(e) { this.type = s.Syntax.ObjectPattern; this.properties = e; } return ObjectPattern; }();
                t.ObjectPattern = Q;
                var Z = function () { function Property(e, t, r, i, n, o) { this.type = s.Syntax.Property; this.key = t; this.computed = r; this.value = i; this.kind = e; this.method = n; this.shorthand = o; } return Property; }();
                t.Property = Z;
                var ee = function () { function RegexLiteral(e, t, r, i) { this.type = s.Syntax.Literal; this.value = e; this.raw = t; this.regex = { pattern: r, flags: i }; } return RegexLiteral; }();
                t.RegexLiteral = ee;
                var te = function () { function RestElement(e) { this.type = s.Syntax.RestElement; this.argument = e; } return RestElement; }();
                t.RestElement = te;
                var re = function () { function ReturnStatement(e) { this.type = s.Syntax.ReturnStatement; this.argument = e; } return ReturnStatement; }();
                t.ReturnStatement = re;
                var se = function () { function Script(e) { this.type = s.Syntax.Program; this.body = e; this.sourceType = "script"; } return Script; }();
                t.Script = se;
                var ie = function () { function SequenceExpression(e) { this.type = s.Syntax.SequenceExpression; this.expressions = e; } return SequenceExpression; }();
                t.SequenceExpression = ie;
                var ne = function () { function SpreadElement(e) { this.type = s.Syntax.SpreadElement; this.argument = e; } return SpreadElement; }();
                t.SpreadElement = ne;
                var oe = function () { function StaticMemberExpression(e, t) { this.type = s.Syntax.MemberExpression; this.computed = false; this.object = e; this.property = t; } return StaticMemberExpression; }();
                t.StaticMemberExpression = oe;
                var ae = function () { function Super() { this.type = s.Syntax.Super; } return Super; }();
                t.Super = ae;
                var ue = function () { function SwitchCase(e, t) { this.type = s.Syntax.SwitchCase; this.test = e; this.consequent = t; } return SwitchCase; }();
                t.SwitchCase = ue;
                var ce = function () { function SwitchStatement(e, t) { this.type = s.Syntax.SwitchStatement; this.discriminant = e; this.cases = t; } return SwitchStatement; }();
                t.SwitchStatement = ce;
                var le = function () { function TaggedTemplateExpression(e, t) { this.type = s.Syntax.TaggedTemplateExpression; this.tag = e; this.quasi = t; } return TaggedTemplateExpression; }();
                t.TaggedTemplateExpression = le;
                var pe = function () { function TemplateElement(e, t) { this.type = s.Syntax.TemplateElement; this.value = e; this.tail = t; } return TemplateElement; }();
                t.TemplateElement = pe;
                var he = function () { function TemplateLiteral(e, t) { this.type = s.Syntax.TemplateLiteral; this.quasis = e; this.expressions = t; } return TemplateLiteral; }();
                t.TemplateLiteral = he;
                var de = function () { function ThisExpression() { this.type = s.Syntax.ThisExpression; } return ThisExpression; }();
                t.ThisExpression = de;
                var me = function () { function ThrowStatement(e) { this.type = s.Syntax.ThrowStatement; this.argument = e; } return ThrowStatement; }();
                t.ThrowStatement = me;
                var fe = function () { function TryStatement(e, t, r) { this.type = s.Syntax.TryStatement; this.block = e; this.handler = t; this.finalizer = r; } return TryStatement; }();
                t.TryStatement = fe;
                var ge = function () { function UnaryExpression(e, t) { this.type = s.Syntax.UnaryExpression; this.operator = e; this.argument = t; this.prefix = true; } return UnaryExpression; }();
                t.UnaryExpression = ge;
                var Ee = function () { function UpdateExpression(e, t, r) { this.type = s.Syntax.UpdateExpression; this.operator = e; this.argument = t; this.prefix = r; } return UpdateExpression; }();
                t.UpdateExpression = Ee;
                var ve = function () { function VariableDeclaration(e, t) { this.type = s.Syntax.VariableDeclaration; this.declarations = e; this.kind = t; } return VariableDeclaration; }();
                t.VariableDeclaration = ve;
                var ye = function () { function VariableDeclarator(e, t) { this.type = s.Syntax.VariableDeclarator; this.id = e; this.init = t; } return VariableDeclarator; }();
                t.VariableDeclarator = ye;
                var De = function () { function WhileStatement(e, t) { this.type = s.Syntax.WhileStatement; this.test = e; this.body = t; } return WhileStatement; }();
                t.WhileStatement = De;
                var xe = function () { function WithStatement(e, t) { this.type = s.Syntax.WithStatement; this.object = e; this.body = t; } return WithStatement; }();
                t.WithStatement = xe;
                var we = function () { function YieldExpression(e, t) { this.type = s.Syntax.YieldExpression; this.argument = e; this.delegate = t; } return YieldExpression; }();
                t.YieldExpression = we;
            }, function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true });
                var s = r(9);
                var i = r(10);
                var n = r(11);
                var o = r(7);
                var a = r(12);
                var u = r(2);
                var c = r(13);
                var l = "ArrowParameterPlaceHolder";
                var p = function () { function Parser(e, t, r) { if (t === void 0) {
                    t = {};
                } this.config = { range: typeof t.range === "boolean" && t.range, loc: typeof t.loc === "boolean" && t.loc, source: null, tokens: typeof t.tokens === "boolean" && t.tokens, comment: typeof t.comment === "boolean" && t.comment, tolerant: typeof t.tolerant === "boolean" && t.tolerant }; if (this.config.loc && t.source && t.source !== null) {
                    this.config.source = String(t.source);
                } this.delegate = r; this.errorHandler = new i.ErrorHandler; this.errorHandler.tolerant = this.config.tolerant; this.scanner = new a.Scanner(e, this.errorHandler); this.scanner.trackComment = this.config.comment; this.operatorPrecedence = { ")": 0, ";": 0, ",": 0, "=": 0, "]": 0, "||": 1, "&&": 2, "|": 3, "^": 4, "&": 5, "==": 6, "!=": 6, "===": 6, "!==": 6, "<": 7, ">": 7, "<=": 7, ">=": 7, "<<": 8, ">>": 8, ">>>": 8, "+": 9, "-": 9, "*": 11, "/": 11, "%": 11 }; this.lookahead = { type: 2, value: "", lineNumber: this.scanner.lineNumber, lineStart: 0, start: 0, end: 0 }; this.hasLineTerminator = false; this.context = { isModule: false, await: false, allowIn: true, allowStrictDirective: true, allowYield: true, firstCoverInitializedNameError: null, isAssignmentTarget: false, isBindingElement: false, inFunctionBody: false, inIteration: false, inSwitch: false, labelSet: {}, strict: false }; this.tokens = []; this.startMarker = { index: 0, line: this.scanner.lineNumber, column: 0 }; this.lastMarker = { index: 0, line: this.scanner.lineNumber, column: 0 }; this.nextToken(); this.lastMarker = { index: this.scanner.index, line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart }; } Parser.prototype.throwError = function (e) { var t = []; for (var r = 1; r < arguments.length; r++) {
                    t[r - 1] = arguments[r];
                } var i = Array.prototype.slice.call(arguments, 1); var n = e.replace(/%(\d)/g, (function (e, t) { s.assert(t < i.length, "Message reference must be in range"); return i[t]; })); var o = this.lastMarker.index; var a = this.lastMarker.line; var u = this.lastMarker.column + 1; throw this.errorHandler.createError(o, a, u, n); }; Parser.prototype.tolerateError = function (e) { var t = []; for (var r = 1; r < arguments.length; r++) {
                    t[r - 1] = arguments[r];
                } var i = Array.prototype.slice.call(arguments, 1); var n = e.replace(/%(\d)/g, (function (e, t) { s.assert(t < i.length, "Message reference must be in range"); return i[t]; })); var o = this.lastMarker.index; var a = this.scanner.lineNumber; var u = this.lastMarker.column + 1; this.errorHandler.tolerateError(o, a, u, n); }; Parser.prototype.unexpectedTokenError = function (e, t) { var r = t || n.Messages.UnexpectedToken; var s; if (e) {
                    if (!t) {
                        r = e.type === 2 ? n.Messages.UnexpectedEOS : e.type === 3 ? n.Messages.UnexpectedIdentifier : e.type === 6 ? n.Messages.UnexpectedNumber : e.type === 8 ? n.Messages.UnexpectedString : e.type === 10 ? n.Messages.UnexpectedTemplate : n.Messages.UnexpectedToken;
                        if (e.type === 4) {
                            if (this.scanner.isFutureReservedWord(e.value)) {
                                r = n.Messages.UnexpectedReserved;
                            }
                            else if (this.context.strict && this.scanner.isStrictModeReservedWord(e.value)) {
                                r = n.Messages.StrictReservedWord;
                            }
                        }
                    }
                    s = e.value;
                }
                else {
                    s = "ILLEGAL";
                } r = r.replace("%0", s); if (e && typeof e.lineNumber === "number") {
                    var i = e.start;
                    var o = e.lineNumber;
                    var a = this.lastMarker.index - this.lastMarker.column;
                    var u = e.start - a + 1;
                    return this.errorHandler.createError(i, o, u, r);
                }
                else {
                    var i = this.lastMarker.index;
                    var o = this.lastMarker.line;
                    var u = this.lastMarker.column + 1;
                    return this.errorHandler.createError(i, o, u, r);
                } }; Parser.prototype.throwUnexpectedToken = function (e, t) { throw this.unexpectedTokenError(e, t); }; Parser.prototype.tolerateUnexpectedToken = function (e, t) { this.errorHandler.tolerate(this.unexpectedTokenError(e, t)); }; Parser.prototype.collectComments = function () { if (!this.config.comment) {
                    this.scanner.scanComments();
                }
                else {
                    var e = this.scanner.scanComments();
                    if (e.length > 0 && this.delegate) {
                        for (var t = 0; t < e.length; ++t) {
                            var r = e[t];
                            var s = void 0;
                            s = { type: r.multiLine ? "BlockComment" : "LineComment", value: this.scanner.source.slice(r.slice[0], r.slice[1]) };
                            if (this.config.range) {
                                s.range = r.range;
                            }
                            if (this.config.loc) {
                                s.loc = r.loc;
                            }
                            var i = { start: { line: r.loc.start.line, column: r.loc.start.column, offset: r.range[0] }, end: { line: r.loc.end.line, column: r.loc.end.column, offset: r.range[1] } };
                            this.delegate(s, i);
                        }
                    }
                } }; Parser.prototype.getTokenRaw = function (e) { return this.scanner.source.slice(e.start, e.end); }; Parser.prototype.convertToken = function (e) { var t = { type: c.TokenName[e.type], value: this.getTokenRaw(e) }; if (this.config.range) {
                    t.range = [e.start, e.end];
                } if (this.config.loc) {
                    t.loc = { start: { line: this.startMarker.line, column: this.startMarker.column }, end: { line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart } };
                } if (e.type === 9) {
                    var r = e.pattern;
                    var s = e.flags;
                    t.regex = { pattern: r, flags: s };
                } return t; }; Parser.prototype.nextToken = function () { var e = this.lookahead; this.lastMarker.index = this.scanner.index; this.lastMarker.line = this.scanner.lineNumber; this.lastMarker.column = this.scanner.index - this.scanner.lineStart; this.collectComments(); if (this.scanner.index !== this.startMarker.index) {
                    this.startMarker.index = this.scanner.index;
                    this.startMarker.line = this.scanner.lineNumber;
                    this.startMarker.column = this.scanner.index - this.scanner.lineStart;
                } var t = this.scanner.lex(); this.hasLineTerminator = e.lineNumber !== t.lineNumber; if (t && this.context.strict && t.type === 3) {
                    if (this.scanner.isStrictModeReservedWord(t.value)) {
                        t.type = 4;
                    }
                } this.lookahead = t; if (this.config.tokens && t.type !== 2) {
                    this.tokens.push(this.convertToken(t));
                } return e; }; Parser.prototype.nextRegexToken = function () { this.collectComments(); var e = this.scanner.scanRegExp(); if (this.config.tokens) {
                    this.tokens.pop();
                    this.tokens.push(this.convertToken(e));
                } this.lookahead = e; this.nextToken(); return e; }; Parser.prototype.createNode = function () { return { index: this.startMarker.index, line: this.startMarker.line, column: this.startMarker.column }; }; Parser.prototype.startNode = function (e, t) { if (t === void 0) {
                    t = 0;
                } var r = e.start - e.lineStart; var s = e.lineNumber; if (r < 0) {
                    r += t;
                    s--;
                } return { index: e.start, line: s, column: r }; }; Parser.prototype.finalize = function (e, t) { if (this.config.range) {
                    t.range = [e.index, this.lastMarker.index];
                } if (this.config.loc) {
                    t.loc = { start: { line: e.line, column: e.column }, end: { line: this.lastMarker.line, column: this.lastMarker.column } };
                    if (this.config.source) {
                        t.loc.source = this.config.source;
                    }
                } if (this.delegate) {
                    var r = { start: { line: e.line, column: e.column, offset: e.index }, end: { line: this.lastMarker.line, column: this.lastMarker.column, offset: this.lastMarker.index } };
                    this.delegate(t, r);
                } return t; }; Parser.prototype.expect = function (e) { var t = this.nextToken(); if (t.type !== 7 || t.value !== e) {
                    this.throwUnexpectedToken(t);
                } }; Parser.prototype.expectCommaSeparator = function () { if (this.config.tolerant) {
                    var e = this.lookahead;
                    if (e.type === 7 && e.value === ",") {
                        this.nextToken();
                    }
                    else if (e.type === 7 && e.value === ";") {
                        this.nextToken();
                        this.tolerateUnexpectedToken(e);
                    }
                    else {
                        this.tolerateUnexpectedToken(e, n.Messages.UnexpectedToken);
                    }
                }
                else {
                    this.expect(",");
                } }; Parser.prototype.expectKeyword = function (e) { var t = this.nextToken(); if (t.type !== 4 || t.value !== e) {
                    this.throwUnexpectedToken(t);
                } }; Parser.prototype.match = function (e) { return this.lookahead.type === 7 && this.lookahead.value === e; }; Parser.prototype.matchKeyword = function (e) { return this.lookahead.type === 4 && this.lookahead.value === e; }; Parser.prototype.matchContextualKeyword = function (e) { return this.lookahead.type === 3 && this.lookahead.value === e; }; Parser.prototype.matchAssign = function () { if (this.lookahead.type !== 7) {
                    return false;
                } var e = this.lookahead.value; return e === "=" || e === "*=" || e === "**=" || e === "/=" || e === "%=" || e === "+=" || e === "-=" || e === "<<=" || e === ">>=" || e === ">>>=" || e === "&=" || e === "^=" || e === "|="; }; Parser.prototype.isolateCoverGrammar = function (e) { var t = this.context.isBindingElement; var r = this.context.isAssignmentTarget; var s = this.context.firstCoverInitializedNameError; this.context.isBindingElement = true; this.context.isAssignmentTarget = true; this.context.firstCoverInitializedNameError = null; var i = e.call(this); if (this.context.firstCoverInitializedNameError !== null) {
                    this.throwUnexpectedToken(this.context.firstCoverInitializedNameError);
                } this.context.isBindingElement = t; this.context.isAssignmentTarget = r; this.context.firstCoverInitializedNameError = s; return i; }; Parser.prototype.inheritCoverGrammar = function (e) { var t = this.context.isBindingElement; var r = this.context.isAssignmentTarget; var s = this.context.firstCoverInitializedNameError; this.context.isBindingElement = true; this.context.isAssignmentTarget = true; this.context.firstCoverInitializedNameError = null; var i = e.call(this); this.context.isBindingElement = this.context.isBindingElement && t; this.context.isAssignmentTarget = this.context.isAssignmentTarget && r; this.context.firstCoverInitializedNameError = s || this.context.firstCoverInitializedNameError; return i; }; Parser.prototype.consumeSemicolon = function () { if (this.match(";")) {
                    this.nextToken();
                }
                else if (!this.hasLineTerminator) {
                    if (this.lookahead.type !== 2 && !this.match("}")) {
                        this.throwUnexpectedToken(this.lookahead);
                    }
                    this.lastMarker.index = this.startMarker.index;
                    this.lastMarker.line = this.startMarker.line;
                    this.lastMarker.column = this.startMarker.column;
                } }; Parser.prototype.parsePrimaryExpression = function () { var e = this.createNode(); var t; var r, s; switch (this.lookahead.type) {
                    case 3:
                        if ((this.context.isModule || this.context.await) && this.lookahead.value === "await") {
                            this.tolerateUnexpectedToken(this.lookahead);
                        }
                        t = this.matchAsyncFunction() ? this.parseFunctionExpression() : this.finalize(e, new o.Identifier(this.nextToken().value));
                        break;
                    case 6:
                    case 8:
                        if (this.context.strict && this.lookahead.octal) {
                            this.tolerateUnexpectedToken(this.lookahead, n.Messages.StrictOctalLiteral);
                        }
                        this.context.isAssignmentTarget = false;
                        this.context.isBindingElement = false;
                        r = this.nextToken();
                        s = this.getTokenRaw(r);
                        t = this.finalize(e, new o.Literal(r.value, s));
                        break;
                    case 1:
                        this.context.isAssignmentTarget = false;
                        this.context.isBindingElement = false;
                        r = this.nextToken();
                        s = this.getTokenRaw(r);
                        t = this.finalize(e, new o.Literal(r.value === "true", s));
                        break;
                    case 5:
                        this.context.isAssignmentTarget = false;
                        this.context.isBindingElement = false;
                        r = this.nextToken();
                        s = this.getTokenRaw(r);
                        t = this.finalize(e, new o.Literal(null, s));
                        break;
                    case 10:
                        t = this.parseTemplateLiteral();
                        break;
                    case 7:
                        switch (this.lookahead.value) {
                            case "(":
                                this.context.isBindingElement = false;
                                t = this.inheritCoverGrammar(this.parseGroupExpression);
                                break;
                            case "[":
                                t = this.inheritCoverGrammar(this.parseArrayInitializer);
                                break;
                            case "{":
                                t = this.inheritCoverGrammar(this.parseObjectInitializer);
                                break;
                            case "/":
                            case "/=":
                                this.context.isAssignmentTarget = false;
                                this.context.isBindingElement = false;
                                this.scanner.index = this.startMarker.index;
                                r = this.nextRegexToken();
                                s = this.getTokenRaw(r);
                                t = this.finalize(e, new o.RegexLiteral(r.regex, s, r.pattern, r.flags));
                                break;
                            default: t = this.throwUnexpectedToken(this.nextToken());
                        }
                        break;
                    case 4:
                        if (!this.context.strict && this.context.allowYield && this.matchKeyword("yield")) {
                            t = this.parseIdentifierName();
                        }
                        else if (!this.context.strict && this.matchKeyword("let")) {
                            t = this.finalize(e, new o.Identifier(this.nextToken().value));
                        }
                        else {
                            this.context.isAssignmentTarget = false;
                            this.context.isBindingElement = false;
                            if (this.matchKeyword("function")) {
                                t = this.parseFunctionExpression();
                            }
                            else if (this.matchKeyword("this")) {
                                this.nextToken();
                                t = this.finalize(e, new o.ThisExpression);
                            }
                            else if (this.matchKeyword("class")) {
                                t = this.parseClassExpression();
                            }
                            else {
                                t = this.throwUnexpectedToken(this.nextToken());
                            }
                        }
                        break;
                    default: t = this.throwUnexpectedToken(this.nextToken());
                } return t; }; Parser.prototype.parseSpreadElement = function () { var e = this.createNode(); this.expect("..."); var t = this.inheritCoverGrammar(this.parseAssignmentExpression); return this.finalize(e, new o.SpreadElement(t)); }; Parser.prototype.parseArrayInitializer = function () { var e = this.createNode(); var t = []; this.expect("["); while (!this.match("]")) {
                    if (this.match(",")) {
                        this.nextToken();
                        t.push(null);
                    }
                    else if (this.match("...")) {
                        var r = this.parseSpreadElement();
                        if (!this.match("]")) {
                            this.context.isAssignmentTarget = false;
                            this.context.isBindingElement = false;
                            this.expect(",");
                        }
                        t.push(r);
                    }
                    else {
                        t.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
                        if (!this.match("]")) {
                            this.expect(",");
                        }
                    }
                } this.expect("]"); return this.finalize(e, new o.ArrayExpression(t)); }; Parser.prototype.parsePropertyMethod = function (e) { this.context.isAssignmentTarget = false; this.context.isBindingElement = false; var t = this.context.strict; var r = this.context.allowStrictDirective; this.context.allowStrictDirective = e.simple; var s = this.isolateCoverGrammar(this.parseFunctionSourceElements); if (this.context.strict && e.firstRestricted) {
                    this.tolerateUnexpectedToken(e.firstRestricted, e.message);
                } if (this.context.strict && e.stricted) {
                    this.tolerateUnexpectedToken(e.stricted, e.message);
                } this.context.strict = t; this.context.allowStrictDirective = r; return s; }; Parser.prototype.parsePropertyMethodFunction = function () { var e = false; var t = this.createNode(); var r = this.context.allowYield; this.context.allowYield = true; var s = this.parseFormalParameters(); var i = this.parsePropertyMethod(s); this.context.allowYield = r; return this.finalize(t, new o.FunctionExpression(null, s.params, i, e)); }; Parser.prototype.parsePropertyMethodAsyncFunction = function () { var e = this.createNode(); var t = this.context.allowYield; var r = this.context.await; this.context.allowYield = false; this.context.await = true; var s = this.parseFormalParameters(); var i = this.parsePropertyMethod(s); this.context.allowYield = t; this.context.await = r; return this.finalize(e, new o.AsyncFunctionExpression(null, s.params, i)); }; Parser.prototype.parseObjectPropertyKey = function () { var e = this.createNode(); var t = this.nextToken(); var r; switch (t.type) {
                    case 8:
                    case 6:
                        if (this.context.strict && t.octal) {
                            this.tolerateUnexpectedToken(t, n.Messages.StrictOctalLiteral);
                        }
                        var s = this.getTokenRaw(t);
                        r = this.finalize(e, new o.Literal(t.value, s));
                        break;
                    case 3:
                    case 1:
                    case 5:
                    case 4:
                        r = this.finalize(e, new o.Identifier(t.value));
                        break;
                    case 7:
                        if (t.value === "[") {
                            r = this.isolateCoverGrammar(this.parseAssignmentExpression);
                            this.expect("]");
                        }
                        else {
                            r = this.throwUnexpectedToken(t);
                        }
                        break;
                    default: r = this.throwUnexpectedToken(t);
                } return r; }; Parser.prototype.isPropertyKey = function (e, t) { return e.type === u.Syntax.Identifier && e.name === t || e.type === u.Syntax.Literal && e.value === t; }; Parser.prototype.parseObjectProperty = function (e) { var t = this.createNode(); var r = this.lookahead; var s; var i = null; var a = null; var u = false; var c = false; var l = false; var p = false; if (r.type === 3) {
                    var h = r.value;
                    this.nextToken();
                    u = this.match("[");
                    p = !this.hasLineTerminator && h === "async" && !this.match(":") && !this.match("(") && !this.match("*") && !this.match(",");
                    i = p ? this.parseObjectPropertyKey() : this.finalize(t, new o.Identifier(h));
                }
                else if (this.match("*")) {
                    this.nextToken();
                }
                else {
                    u = this.match("[");
                    i = this.parseObjectPropertyKey();
                } var d = this.qualifiedPropertyName(this.lookahead); if (r.type === 3 && !p && r.value === "get" && d) {
                    s = "get";
                    u = this.match("[");
                    i = this.parseObjectPropertyKey();
                    this.context.allowYield = false;
                    a = this.parseGetterMethod();
                }
                else if (r.type === 3 && !p && r.value === "set" && d) {
                    s = "set";
                    u = this.match("[");
                    i = this.parseObjectPropertyKey();
                    a = this.parseSetterMethod();
                }
                else if (r.type === 7 && r.value === "*" && d) {
                    s = "init";
                    u = this.match("[");
                    i = this.parseObjectPropertyKey();
                    a = this.parseGeneratorMethod();
                    c = true;
                }
                else {
                    if (!i) {
                        this.throwUnexpectedToken(this.lookahead);
                    }
                    s = "init";
                    if (this.match(":") && !p) {
                        if (!u && this.isPropertyKey(i, "__proto__")) {
                            if (e.value) {
                                this.tolerateError(n.Messages.DuplicateProtoProperty);
                            }
                            e.value = true;
                        }
                        this.nextToken();
                        a = this.inheritCoverGrammar(this.parseAssignmentExpression);
                    }
                    else if (this.match("(")) {
                        a = p ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
                        c = true;
                    }
                    else if (r.type === 3) {
                        var h = this.finalize(t, new o.Identifier(r.value));
                        if (this.match("=")) {
                            this.context.firstCoverInitializedNameError = this.lookahead;
                            this.nextToken();
                            l = true;
                            var m = this.isolateCoverGrammar(this.parseAssignmentExpression);
                            a = this.finalize(t, new o.AssignmentPattern(h, m));
                        }
                        else {
                            l = true;
                            a = h;
                        }
                    }
                    else {
                        this.throwUnexpectedToken(this.nextToken());
                    }
                } return this.finalize(t, new o.Property(s, i, u, a, c, l)); }; Parser.prototype.parseObjectInitializer = function () { var e = this.createNode(); this.expect("{"); var t = []; var r = { value: false }; while (!this.match("}")) {
                    t.push(this.parseObjectProperty(r));
                    if (!this.match("}")) {
                        this.expectCommaSeparator();
                    }
                } this.expect("}"); return this.finalize(e, new o.ObjectExpression(t)); }; Parser.prototype.parseTemplateHead = function () { s.assert(this.lookahead.head, "Template literal must start with a template head"); var e = this.createNode(); var t = this.nextToken(); var r = t.value; var i = t.cooked; return this.finalize(e, new o.TemplateElement({ raw: r, cooked: i }, t.tail)); }; Parser.prototype.parseTemplateElement = function () { if (this.lookahead.type !== 10) {
                    this.throwUnexpectedToken();
                } var e = this.createNode(); var t = this.nextToken(); var r = t.value; var s = t.cooked; return this.finalize(e, new o.TemplateElement({ raw: r, cooked: s }, t.tail)); }; Parser.prototype.parseTemplateLiteral = function () { var e = this.createNode(); var t = []; var r = []; var s = this.parseTemplateHead(); r.push(s); while (!s.tail) {
                    t.push(this.parseExpression());
                    s = this.parseTemplateElement();
                    r.push(s);
                } return this.finalize(e, new o.TemplateLiteral(r, t)); }; Parser.prototype.reinterpretExpressionAsPattern = function (e) { switch (e.type) {
                    case u.Syntax.Identifier:
                    case u.Syntax.MemberExpression:
                    case u.Syntax.RestElement:
                    case u.Syntax.AssignmentPattern: break;
                    case u.Syntax.SpreadElement:
                        e.type = u.Syntax.RestElement;
                        this.reinterpretExpressionAsPattern(e.argument);
                        break;
                    case u.Syntax.ArrayExpression:
                        e.type = u.Syntax.ArrayPattern;
                        for (var t = 0; t < e.elements.length; t++) {
                            if (e.elements[t] !== null) {
                                this.reinterpretExpressionAsPattern(e.elements[t]);
                            }
                        }
                        break;
                    case u.Syntax.ObjectExpression:
                        e.type = u.Syntax.ObjectPattern;
                        for (var t = 0; t < e.properties.length; t++) {
                            this.reinterpretExpressionAsPattern(e.properties[t].value);
                        }
                        break;
                    case u.Syntax.AssignmentExpression:
                        e.type = u.Syntax.AssignmentPattern;
                        delete e.operator;
                        this.reinterpretExpressionAsPattern(e.left);
                        break;
                    default: break;
                } }; Parser.prototype.parseGroupExpression = function () { var e; this.expect("("); if (this.match(")")) {
                    this.nextToken();
                    if (!this.match("=>")) {
                        this.expect("=>");
                    }
                    e = { type: l, params: [], async: false };
                }
                else {
                    var t = this.lookahead;
                    var r = [];
                    if (this.match("...")) {
                        e = this.parseRestElement(r);
                        this.expect(")");
                        if (!this.match("=>")) {
                            this.expect("=>");
                        }
                        e = { type: l, params: [e], async: false };
                    }
                    else {
                        var s = false;
                        this.context.isBindingElement = true;
                        e = this.inheritCoverGrammar(this.parseAssignmentExpression);
                        if (this.match(",")) {
                            var i = [];
                            this.context.isAssignmentTarget = false;
                            i.push(e);
                            while (this.lookahead.type !== 2) {
                                if (!this.match(",")) {
                                    break;
                                }
                                this.nextToken();
                                if (this.match(")")) {
                                    this.nextToken();
                                    for (var n = 0; n < i.length; n++) {
                                        this.reinterpretExpressionAsPattern(i[n]);
                                    }
                                    s = true;
                                    e = { type: l, params: i, async: false };
                                }
                                else if (this.match("...")) {
                                    if (!this.context.isBindingElement) {
                                        this.throwUnexpectedToken(this.lookahead);
                                    }
                                    i.push(this.parseRestElement(r));
                                    this.expect(")");
                                    if (!this.match("=>")) {
                                        this.expect("=>");
                                    }
                                    this.context.isBindingElement = false;
                                    for (var n = 0; n < i.length; n++) {
                                        this.reinterpretExpressionAsPattern(i[n]);
                                    }
                                    s = true;
                                    e = { type: l, params: i, async: false };
                                }
                                else {
                                    i.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
                                }
                                if (s) {
                                    break;
                                }
                            }
                            if (!s) {
                                e = this.finalize(this.startNode(t), new o.SequenceExpression(i));
                            }
                        }
                        if (!s) {
                            this.expect(")");
                            if (this.match("=>")) {
                                if (e.type === u.Syntax.Identifier && e.name === "yield") {
                                    s = true;
                                    e = { type: l, params: [e], async: false };
                                }
                                if (!s) {
                                    if (!this.context.isBindingElement) {
                                        this.throwUnexpectedToken(this.lookahead);
                                    }
                                    if (e.type === u.Syntax.SequenceExpression) {
                                        for (var n = 0; n < e.expressions.length; n++) {
                                            this.reinterpretExpressionAsPattern(e.expressions[n]);
                                        }
                                    }
                                    else {
                                        this.reinterpretExpressionAsPattern(e);
                                    }
                                    var a = e.type === u.Syntax.SequenceExpression ? e.expressions : [e];
                                    e = { type: l, params: a, async: false };
                                }
                            }
                            this.context.isBindingElement = false;
                        }
                    }
                } return e; }; Parser.prototype.parseArguments = function () { this.expect("("); var e = []; if (!this.match(")")) {
                    while (true) {
                        var t = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAssignmentExpression);
                        e.push(t);
                        if (this.match(")")) {
                            break;
                        }
                        this.expectCommaSeparator();
                        if (this.match(")")) {
                            break;
                        }
                    }
                } this.expect(")"); return e; }; Parser.prototype.isIdentifierName = function (e) { return e.type === 3 || e.type === 4 || e.type === 1 || e.type === 5; }; Parser.prototype.parseIdentifierName = function () { var e = this.createNode(); var t = this.nextToken(); if (!this.isIdentifierName(t)) {
                    this.throwUnexpectedToken(t);
                } return this.finalize(e, new o.Identifier(t.value)); }; Parser.prototype.parseNewExpression = function () { var e = this.createNode(); var t = this.parseIdentifierName(); s.assert(t.name === "new", "New expression must start with `new`"); var r; if (this.match(".")) {
                    this.nextToken();
                    if (this.lookahead.type === 3 && this.context.inFunctionBody && this.lookahead.value === "target") {
                        var i = this.parseIdentifierName();
                        r = new o.MetaProperty(t, i);
                    }
                    else {
                        this.throwUnexpectedToken(this.lookahead);
                    }
                }
                else {
                    var n = this.isolateCoverGrammar(this.parseLeftHandSideExpression);
                    var a = this.match("(") ? this.parseArguments() : [];
                    r = new o.NewExpression(n, a);
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                } return this.finalize(e, r); }; Parser.prototype.parseAsyncArgument = function () { var e = this.parseAssignmentExpression(); this.context.firstCoverInitializedNameError = null; return e; }; Parser.prototype.parseAsyncArguments = function () { this.expect("("); var e = []; if (!this.match(")")) {
                    while (true) {
                        var t = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAsyncArgument);
                        e.push(t);
                        if (this.match(")")) {
                            break;
                        }
                        this.expectCommaSeparator();
                        if (this.match(")")) {
                            break;
                        }
                    }
                } this.expect(")"); return e; }; Parser.prototype.parseLeftHandSideExpressionAllowCall = function () { var e = this.lookahead; var t = this.matchContextualKeyword("async"); var r = this.context.allowIn; this.context.allowIn = true; var s; if (this.matchKeyword("super") && this.context.inFunctionBody) {
                    s = this.createNode();
                    this.nextToken();
                    s = this.finalize(s, new o.Super);
                    if (!this.match("(") && !this.match(".") && !this.match("[")) {
                        this.throwUnexpectedToken(this.lookahead);
                    }
                }
                else {
                    s = this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression);
                } while (true) {
                    if (this.match(".")) {
                        this.context.isBindingElement = false;
                        this.context.isAssignmentTarget = true;
                        this.expect(".");
                        var i = this.parseIdentifierName();
                        s = this.finalize(this.startNode(e), new o.StaticMemberExpression(s, i));
                    }
                    else if (this.match("(")) {
                        var n = t && e.lineNumber === this.lookahead.lineNumber;
                        this.context.isBindingElement = false;
                        this.context.isAssignmentTarget = false;
                        var a = n ? this.parseAsyncArguments() : this.parseArguments();
                        s = this.finalize(this.startNode(e), new o.CallExpression(s, a));
                        if (n && this.match("=>")) {
                            for (var u = 0; u < a.length; ++u) {
                                this.reinterpretExpressionAsPattern(a[u]);
                            }
                            s = { type: l, params: a, async: true };
                        }
                    }
                    else if (this.match("[")) {
                        this.context.isBindingElement = false;
                        this.context.isAssignmentTarget = true;
                        this.expect("[");
                        var i = this.isolateCoverGrammar(this.parseExpression);
                        this.expect("]");
                        s = this.finalize(this.startNode(e), new o.ComputedMemberExpression(s, i));
                    }
                    else if (this.lookahead.type === 10 && this.lookahead.head) {
                        var c = this.parseTemplateLiteral();
                        s = this.finalize(this.startNode(e), new o.TaggedTemplateExpression(s, c));
                    }
                    else {
                        break;
                    }
                } this.context.allowIn = r; return s; }; Parser.prototype.parseSuper = function () { var e = this.createNode(); this.expectKeyword("super"); if (!this.match("[") && !this.match(".")) {
                    this.throwUnexpectedToken(this.lookahead);
                } return this.finalize(e, new o.Super); }; Parser.prototype.parseLeftHandSideExpression = function () { s.assert(this.context.allowIn, "callee of new expression always allow in keyword."); var e = this.startNode(this.lookahead); var t = this.matchKeyword("super") && this.context.inFunctionBody ? this.parseSuper() : this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression); while (true) {
                    if (this.match("[")) {
                        this.context.isBindingElement = false;
                        this.context.isAssignmentTarget = true;
                        this.expect("[");
                        var r = this.isolateCoverGrammar(this.parseExpression);
                        this.expect("]");
                        t = this.finalize(e, new o.ComputedMemberExpression(t, r));
                    }
                    else if (this.match(".")) {
                        this.context.isBindingElement = false;
                        this.context.isAssignmentTarget = true;
                        this.expect(".");
                        var r = this.parseIdentifierName();
                        t = this.finalize(e, new o.StaticMemberExpression(t, r));
                    }
                    else if (this.lookahead.type === 10 && this.lookahead.head) {
                        var i = this.parseTemplateLiteral();
                        t = this.finalize(e, new o.TaggedTemplateExpression(t, i));
                    }
                    else {
                        break;
                    }
                } return t; }; Parser.prototype.parseUpdateExpression = function () { var e; var t = this.lookahead; if (this.match("++") || this.match("--")) {
                    var r = this.startNode(t);
                    var s = this.nextToken();
                    e = this.inheritCoverGrammar(this.parseUnaryExpression);
                    if (this.context.strict && e.type === u.Syntax.Identifier && this.scanner.isRestrictedWord(e.name)) {
                        this.tolerateError(n.Messages.StrictLHSPrefix);
                    }
                    if (!this.context.isAssignmentTarget) {
                        this.tolerateError(n.Messages.InvalidLHSInAssignment);
                    }
                    var i = true;
                    e = this.finalize(r, new o.UpdateExpression(s.value, e, i));
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                }
                else {
                    e = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
                    if (!this.hasLineTerminator && this.lookahead.type === 7) {
                        if (this.match("++") || this.match("--")) {
                            if (this.context.strict && e.type === u.Syntax.Identifier && this.scanner.isRestrictedWord(e.name)) {
                                this.tolerateError(n.Messages.StrictLHSPostfix);
                            }
                            if (!this.context.isAssignmentTarget) {
                                this.tolerateError(n.Messages.InvalidLHSInAssignment);
                            }
                            this.context.isAssignmentTarget = false;
                            this.context.isBindingElement = false;
                            var a = this.nextToken().value;
                            var i = false;
                            e = this.finalize(this.startNode(t), new o.UpdateExpression(a, e, i));
                        }
                    }
                } return e; }; Parser.prototype.parseAwaitExpression = function () { var e = this.createNode(); this.nextToken(); var t = this.parseUnaryExpression(); return this.finalize(e, new o.AwaitExpression(t)); }; Parser.prototype.parseUnaryExpression = function () { var e; if (this.match("+") || this.match("-") || this.match("~") || this.match("!") || this.matchKeyword("delete") || this.matchKeyword("void") || this.matchKeyword("typeof")) {
                    var t = this.startNode(this.lookahead);
                    var r = this.nextToken();
                    e = this.inheritCoverGrammar(this.parseUnaryExpression);
                    e = this.finalize(t, new o.UnaryExpression(r.value, e));
                    if (this.context.strict && e.operator === "delete" && e.argument.type === u.Syntax.Identifier) {
                        this.tolerateError(n.Messages.StrictDelete);
                    }
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                }
                else if (this.context.await && this.matchContextualKeyword("await")) {
                    e = this.parseAwaitExpression();
                }
                else {
                    e = this.parseUpdateExpression();
                } return e; }; Parser.prototype.parseExponentiationExpression = function () { var e = this.lookahead; var t = this.inheritCoverGrammar(this.parseUnaryExpression); if (t.type !== u.Syntax.UnaryExpression && this.match("**")) {
                    this.nextToken();
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                    var r = t;
                    var s = this.isolateCoverGrammar(this.parseExponentiationExpression);
                    t = this.finalize(this.startNode(e), new o.BinaryExpression("**", r, s));
                } return t; }; Parser.prototype.binaryPrecedence = function (e) { var t = e.value; var r; if (e.type === 7) {
                    r = this.operatorPrecedence[t] || 0;
                }
                else if (e.type === 4) {
                    r = t === "instanceof" || this.context.allowIn && t === "in" ? 7 : 0;
                }
                else {
                    r = 0;
                } return r; }; Parser.prototype.parseBinaryExpression = function () { var e = this.lookahead; var t = this.inheritCoverGrammar(this.parseExponentiationExpression); var r = this.lookahead; var s = this.binaryPrecedence(r); if (s > 0) {
                    this.nextToken();
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                    var i = [e, this.lookahead];
                    var n = t;
                    var a = this.isolateCoverGrammar(this.parseExponentiationExpression);
                    var u = [n, r.value, a];
                    var c = [s];
                    while (true) {
                        s = this.binaryPrecedence(this.lookahead);
                        if (s <= 0) {
                            break;
                        }
                        while (u.length > 2 && s <= c[c.length - 1]) {
                            a = u.pop();
                            var l = u.pop();
                            c.pop();
                            n = u.pop();
                            i.pop();
                            var p = this.startNode(i[i.length - 1]);
                            u.push(this.finalize(p, new o.BinaryExpression(l, n, a)));
                        }
                        u.push(this.nextToken().value);
                        c.push(s);
                        i.push(this.lookahead);
                        u.push(this.isolateCoverGrammar(this.parseExponentiationExpression));
                    }
                    var h = u.length - 1;
                    t = u[h];
                    var d = i.pop();
                    while (h > 1) {
                        var m = i.pop();
                        var g = d && d.lineStart;
                        var p = this.startNode(m, g);
                        var l = u[h - 1];
                        t = this.finalize(p, new o.BinaryExpression(l, u[h - 2], t));
                        h -= 2;
                        d = m;
                    }
                } return t; }; Parser.prototype.parseConditionalExpression = function () { var e = this.lookahead; var t = this.inheritCoverGrammar(this.parseBinaryExpression); if (this.match("?")) {
                    this.nextToken();
                    var r = this.context.allowIn;
                    this.context.allowIn = true;
                    var s = this.isolateCoverGrammar(this.parseAssignmentExpression);
                    this.context.allowIn = r;
                    this.expect(":");
                    var i = this.isolateCoverGrammar(this.parseAssignmentExpression);
                    t = this.finalize(this.startNode(e), new o.ConditionalExpression(t, s, i));
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                } return t; }; Parser.prototype.checkPatternParam = function (e, t) { switch (t.type) {
                    case u.Syntax.Identifier:
                        this.validateParam(e, t, t.name);
                        break;
                    case u.Syntax.RestElement:
                        this.checkPatternParam(e, t.argument);
                        break;
                    case u.Syntax.AssignmentPattern:
                        this.checkPatternParam(e, t.left);
                        break;
                    case u.Syntax.ArrayPattern:
                        for (var r = 0; r < t.elements.length; r++) {
                            if (t.elements[r] !== null) {
                                this.checkPatternParam(e, t.elements[r]);
                            }
                        }
                        break;
                    case u.Syntax.ObjectPattern:
                        for (var r = 0; r < t.properties.length; r++) {
                            this.checkPatternParam(e, t.properties[r].value);
                        }
                        break;
                    default: break;
                } e.simple = e.simple && t instanceof o.Identifier; }; Parser.prototype.reinterpretAsCoverFormalsList = function (e) { var t = [e]; var r; var s = false; switch (e.type) {
                    case u.Syntax.Identifier: break;
                    case l:
                        t = e.params;
                        s = e.async;
                        break;
                    default: return null;
                } r = { simple: true, paramSet: {} }; for (var i = 0; i < t.length; ++i) {
                    var o = t[i];
                    if (o.type === u.Syntax.AssignmentPattern) {
                        if (o.right.type === u.Syntax.YieldExpression) {
                            if (o.right.argument) {
                                this.throwUnexpectedToken(this.lookahead);
                            }
                            o.right.type = u.Syntax.Identifier;
                            o.right.name = "yield";
                            delete o.right.argument;
                            delete o.right.delegate;
                        }
                    }
                    else if (s && o.type === u.Syntax.Identifier && o.name === "await") {
                        this.throwUnexpectedToken(this.lookahead);
                    }
                    this.checkPatternParam(r, o);
                    t[i] = o;
                } if (this.context.strict || !this.context.allowYield) {
                    for (var i = 0; i < t.length; ++i) {
                        var o = t[i];
                        if (o.type === u.Syntax.YieldExpression) {
                            this.throwUnexpectedToken(this.lookahead);
                        }
                    }
                } if (r.message === n.Messages.StrictParamDupe) {
                    var a = this.context.strict ? r.stricted : r.firstRestricted;
                    this.throwUnexpectedToken(a, r.message);
                } return { simple: r.simple, params: t, stricted: r.stricted, firstRestricted: r.firstRestricted, message: r.message }; }; Parser.prototype.parseAssignmentExpression = function () { var e; if (!this.context.allowYield && this.matchKeyword("yield")) {
                    e = this.parseYieldExpression();
                }
                else {
                    var t = this.lookahead;
                    var r = t;
                    e = this.parseConditionalExpression();
                    if (r.type === 3 && r.lineNumber === this.lookahead.lineNumber && r.value === "async") {
                        if (this.lookahead.type === 3 || this.matchKeyword("yield")) {
                            var s = this.parsePrimaryExpression();
                            this.reinterpretExpressionAsPattern(s);
                            e = { type: l, params: [s], async: true };
                        }
                    }
                    if (e.type === l || this.match("=>")) {
                        this.context.isAssignmentTarget = false;
                        this.context.isBindingElement = false;
                        var i = e.async;
                        var a = this.reinterpretAsCoverFormalsList(e);
                        if (a) {
                            if (this.hasLineTerminator) {
                                this.tolerateUnexpectedToken(this.lookahead);
                            }
                            this.context.firstCoverInitializedNameError = null;
                            var c = this.context.strict;
                            var p = this.context.allowStrictDirective;
                            this.context.allowStrictDirective = a.simple;
                            var h = this.context.allowYield;
                            var d = this.context.await;
                            this.context.allowYield = true;
                            this.context.await = i;
                            var m = this.startNode(t);
                            this.expect("=>");
                            var g = void 0;
                            if (this.match("{")) {
                                var E = this.context.allowIn;
                                this.context.allowIn = true;
                                g = this.parseFunctionSourceElements();
                                this.context.allowIn = E;
                            }
                            else {
                                g = this.isolateCoverGrammar(this.parseAssignmentExpression);
                            }
                            var v = g.type !== u.Syntax.BlockStatement;
                            if (this.context.strict && a.firstRestricted) {
                                this.throwUnexpectedToken(a.firstRestricted, a.message);
                            }
                            if (this.context.strict && a.stricted) {
                                this.tolerateUnexpectedToken(a.stricted, a.message);
                            }
                            e = i ? this.finalize(m, new o.AsyncArrowFunctionExpression(a.params, g, v)) : this.finalize(m, new o.ArrowFunctionExpression(a.params, g, v));
                            this.context.strict = c;
                            this.context.allowStrictDirective = p;
                            this.context.allowYield = h;
                            this.context.await = d;
                        }
                    }
                    else {
                        if (this.matchAssign()) {
                            if (!this.context.isAssignmentTarget) {
                                this.tolerateError(n.Messages.InvalidLHSInAssignment);
                            }
                            if (this.context.strict && e.type === u.Syntax.Identifier) {
                                var y = e;
                                if (this.scanner.isRestrictedWord(y.name)) {
                                    this.tolerateUnexpectedToken(r, n.Messages.StrictLHSAssignment);
                                }
                                if (this.scanner.isStrictModeReservedWord(y.name)) {
                                    this.tolerateUnexpectedToken(r, n.Messages.StrictReservedWord);
                                }
                            }
                            if (!this.match("=")) {
                                this.context.isAssignmentTarget = false;
                                this.context.isBindingElement = false;
                            }
                            else {
                                this.reinterpretExpressionAsPattern(e);
                            }
                            r = this.nextToken();
                            var D = r.value;
                            var x = this.isolateCoverGrammar(this.parseAssignmentExpression);
                            e = this.finalize(this.startNode(t), new o.AssignmentExpression(D, e, x));
                            this.context.firstCoverInitializedNameError = null;
                        }
                    }
                } return e; }; Parser.prototype.parseExpression = function () { var e = this.lookahead; var t = this.isolateCoverGrammar(this.parseAssignmentExpression); if (this.match(",")) {
                    var r = [];
                    r.push(t);
                    while (this.lookahead.type !== 2) {
                        if (!this.match(",")) {
                            break;
                        }
                        this.nextToken();
                        r.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
                    }
                    t = this.finalize(this.startNode(e), new o.SequenceExpression(r));
                } return t; }; Parser.prototype.parseStatementListItem = function () { var e; this.context.isAssignmentTarget = true; this.context.isBindingElement = true; if (this.lookahead.type === 4) {
                    switch (this.lookahead.value) {
                        case "export":
                            if (!this.context.isModule) {
                                this.tolerateUnexpectedToken(this.lookahead, n.Messages.IllegalExportDeclaration);
                            }
                            e = this.parseExportDeclaration();
                            break;
                        case "import":
                            if (!this.context.isModule) {
                                this.tolerateUnexpectedToken(this.lookahead, n.Messages.IllegalImportDeclaration);
                            }
                            e = this.parseImportDeclaration();
                            break;
                        case "const":
                            e = this.parseLexicalDeclaration({ inFor: false });
                            break;
                        case "function":
                            e = this.parseFunctionDeclaration();
                            break;
                        case "class":
                            e = this.parseClassDeclaration();
                            break;
                        case "let":
                            e = this.isLexicalDeclaration() ? this.parseLexicalDeclaration({ inFor: false }) : this.parseStatement();
                            break;
                        default:
                            e = this.parseStatement();
                            break;
                    }
                }
                else {
                    e = this.parseStatement();
                } return e; }; Parser.prototype.parseBlock = function () { var e = this.createNode(); this.expect("{"); var t = []; while (true) {
                    if (this.match("}")) {
                        break;
                    }
                    t.push(this.parseStatementListItem());
                } this.expect("}"); return this.finalize(e, new o.BlockStatement(t)); }; Parser.prototype.parseLexicalBinding = function (e, t) { var r = this.createNode(); var s = []; var i = this.parsePattern(s, e); if (this.context.strict && i.type === u.Syntax.Identifier) {
                    if (this.scanner.isRestrictedWord(i.name)) {
                        this.tolerateError(n.Messages.StrictVarName);
                    }
                } var a = null; if (e === "const") {
                    if (!this.matchKeyword("in") && !this.matchContextualKeyword("of")) {
                        if (this.match("=")) {
                            this.nextToken();
                            a = this.isolateCoverGrammar(this.parseAssignmentExpression);
                        }
                        else {
                            this.throwError(n.Messages.DeclarationMissingInitializer, "const");
                        }
                    }
                }
                else if (!t.inFor && i.type !== u.Syntax.Identifier || this.match("=")) {
                    this.expect("=");
                    a = this.isolateCoverGrammar(this.parseAssignmentExpression);
                } return this.finalize(r, new o.VariableDeclarator(i, a)); }; Parser.prototype.parseBindingList = function (e, t) { var r = [this.parseLexicalBinding(e, t)]; while (this.match(",")) {
                    this.nextToken();
                    r.push(this.parseLexicalBinding(e, t));
                } return r; }; Parser.prototype.isLexicalDeclaration = function () { var e = this.scanner.saveState(); this.scanner.scanComments(); var t = this.scanner.lex(); this.scanner.restoreState(e); return t.type === 3 || t.type === 7 && t.value === "[" || t.type === 7 && t.value === "{" || t.type === 4 && t.value === "let" || t.type === 4 && t.value === "yield"; }; Parser.prototype.parseLexicalDeclaration = function (e) { var t = this.createNode(); var r = this.nextToken().value; s.assert(r === "let" || r === "const", "Lexical declaration must be either let or const"); var i = this.parseBindingList(r, e); this.consumeSemicolon(); return this.finalize(t, new o.VariableDeclaration(i, r)); }; Parser.prototype.parseBindingRestElement = function (e, t) { var r = this.createNode(); this.expect("..."); var s = this.parsePattern(e, t); return this.finalize(r, new o.RestElement(s)); }; Parser.prototype.parseArrayPattern = function (e, t) { var r = this.createNode(); this.expect("["); var s = []; while (!this.match("]")) {
                    if (this.match(",")) {
                        this.nextToken();
                        s.push(null);
                    }
                    else {
                        if (this.match("...")) {
                            s.push(this.parseBindingRestElement(e, t));
                            break;
                        }
                        else {
                            s.push(this.parsePatternWithDefault(e, t));
                        }
                        if (!this.match("]")) {
                            this.expect(",");
                        }
                    }
                } this.expect("]"); return this.finalize(r, new o.ArrayPattern(s)); }; Parser.prototype.parsePropertyPattern = function (e, t) { var r = this.createNode(); var s = false; var i = false; var n = false; var a; var u; if (this.lookahead.type === 3) {
                    var c = this.lookahead;
                    a = this.parseVariableIdentifier();
                    var l = this.finalize(r, new o.Identifier(c.value));
                    if (this.match("=")) {
                        e.push(c);
                        i = true;
                        this.nextToken();
                        var p = this.parseAssignmentExpression();
                        u = this.finalize(this.startNode(c), new o.AssignmentPattern(l, p));
                    }
                    else if (!this.match(":")) {
                        e.push(c);
                        i = true;
                        u = l;
                    }
                    else {
                        this.expect(":");
                        u = this.parsePatternWithDefault(e, t);
                    }
                }
                else {
                    s = this.match("[");
                    a = this.parseObjectPropertyKey();
                    this.expect(":");
                    u = this.parsePatternWithDefault(e, t);
                } return this.finalize(r, new o.Property("init", a, s, u, n, i)); }; Parser.prototype.parseObjectPattern = function (e, t) { var r = this.createNode(); var s = []; this.expect("{"); while (!this.match("}")) {
                    s.push(this.parsePropertyPattern(e, t));
                    if (!this.match("}")) {
                        this.expect(",");
                    }
                } this.expect("}"); return this.finalize(r, new o.ObjectPattern(s)); }; Parser.prototype.parsePattern = function (e, t) { var r; if (this.match("[")) {
                    r = this.parseArrayPattern(e, t);
                }
                else if (this.match("{")) {
                    r = this.parseObjectPattern(e, t);
                }
                else {
                    if (this.matchKeyword("let") && (t === "const" || t === "let")) {
                        this.tolerateUnexpectedToken(this.lookahead, n.Messages.LetInLexicalBinding);
                    }
                    e.push(this.lookahead);
                    r = this.parseVariableIdentifier(t);
                } return r; }; Parser.prototype.parsePatternWithDefault = function (e, t) { var r = this.lookahead; var s = this.parsePattern(e, t); if (this.match("=")) {
                    this.nextToken();
                    var i = this.context.allowYield;
                    this.context.allowYield = true;
                    var n = this.isolateCoverGrammar(this.parseAssignmentExpression);
                    this.context.allowYield = i;
                    s = this.finalize(this.startNode(r), new o.AssignmentPattern(s, n));
                } return s; }; Parser.prototype.parseVariableIdentifier = function (e) { var t = this.createNode(); var r = this.nextToken(); if (r.type === 4 && r.value === "yield") {
                    if (this.context.strict) {
                        this.tolerateUnexpectedToken(r, n.Messages.StrictReservedWord);
                    }
                    else if (!this.context.allowYield) {
                        this.throwUnexpectedToken(r);
                    }
                }
                else if (r.type !== 3) {
                    if (this.context.strict && r.type === 4 && this.scanner.isStrictModeReservedWord(r.value)) {
                        this.tolerateUnexpectedToken(r, n.Messages.StrictReservedWord);
                    }
                    else {
                        if (this.context.strict || r.value !== "let" || e !== "var") {
                            this.throwUnexpectedToken(r);
                        }
                    }
                }
                else if ((this.context.isModule || this.context.await) && r.type === 3 && r.value === "await") {
                    this.tolerateUnexpectedToken(r);
                } return this.finalize(t, new o.Identifier(r.value)); }; Parser.prototype.parseVariableDeclaration = function (e) { var t = this.createNode(); var r = []; var s = this.parsePattern(r, "var"); if (this.context.strict && s.type === u.Syntax.Identifier) {
                    if (this.scanner.isRestrictedWord(s.name)) {
                        this.tolerateError(n.Messages.StrictVarName);
                    }
                } var i = null; if (this.match("=")) {
                    this.nextToken();
                    i = this.isolateCoverGrammar(this.parseAssignmentExpression);
                }
                else if (s.type !== u.Syntax.Identifier && !e.inFor) {
                    this.expect("=");
                } return this.finalize(t, new o.VariableDeclarator(s, i)); }; Parser.prototype.parseVariableDeclarationList = function (e) { var t = { inFor: e.inFor }; var r = []; r.push(this.parseVariableDeclaration(t)); while (this.match(",")) {
                    this.nextToken();
                    r.push(this.parseVariableDeclaration(t));
                } return r; }; Parser.prototype.parseVariableStatement = function () { var e = this.createNode(); this.expectKeyword("var"); var t = this.parseVariableDeclarationList({ inFor: false }); this.consumeSemicolon(); return this.finalize(e, new o.VariableDeclaration(t, "var")); }; Parser.prototype.parseEmptyStatement = function () { var e = this.createNode(); this.expect(";"); return this.finalize(e, new o.EmptyStatement); }; Parser.prototype.parseExpressionStatement = function () { var e = this.createNode(); var t = this.parseExpression(); this.consumeSemicolon(); return this.finalize(e, new o.ExpressionStatement(t)); }; Parser.prototype.parseIfClause = function () { if (this.context.strict && this.matchKeyword("function")) {
                    this.tolerateError(n.Messages.StrictFunction);
                } return this.parseStatement(); }; Parser.prototype.parseIfStatement = function () { var e = this.createNode(); var t; var r = null; this.expectKeyword("if"); this.expect("("); var s = this.parseExpression(); if (!this.match(")") && this.config.tolerant) {
                    this.tolerateUnexpectedToken(this.nextToken());
                    t = this.finalize(this.createNode(), new o.EmptyStatement);
                }
                else {
                    this.expect(")");
                    t = this.parseIfClause();
                    if (this.matchKeyword("else")) {
                        this.nextToken();
                        r = this.parseIfClause();
                    }
                } return this.finalize(e, new o.IfStatement(s, t, r)); }; Parser.prototype.parseDoWhileStatement = function () { var e = this.createNode(); this.expectKeyword("do"); var t = this.context.inIteration; this.context.inIteration = true; var r = this.parseStatement(); this.context.inIteration = t; this.expectKeyword("while"); this.expect("("); var s = this.parseExpression(); if (!this.match(")") && this.config.tolerant) {
                    this.tolerateUnexpectedToken(this.nextToken());
                }
                else {
                    this.expect(")");
                    if (this.match(";")) {
                        this.nextToken();
                    }
                } return this.finalize(e, new o.DoWhileStatement(r, s)); }; Parser.prototype.parseWhileStatement = function () { var e = this.createNode(); var t; this.expectKeyword("while"); this.expect("("); var r = this.parseExpression(); if (!this.match(")") && this.config.tolerant) {
                    this.tolerateUnexpectedToken(this.nextToken());
                    t = this.finalize(this.createNode(), new o.EmptyStatement);
                }
                else {
                    this.expect(")");
                    var s = this.context.inIteration;
                    this.context.inIteration = true;
                    t = this.parseStatement();
                    this.context.inIteration = s;
                } return this.finalize(e, new o.WhileStatement(r, t)); }; Parser.prototype.parseForStatement = function () { var e = null; var t = null; var r = null; var s = true; var i, a; var c = this.createNode(); this.expectKeyword("for"); this.expect("("); if (this.match(";")) {
                    this.nextToken();
                }
                else {
                    if (this.matchKeyword("var")) {
                        e = this.createNode();
                        this.nextToken();
                        var l = this.context.allowIn;
                        this.context.allowIn = false;
                        var p = this.parseVariableDeclarationList({ inFor: true });
                        this.context.allowIn = l;
                        if (p.length === 1 && this.matchKeyword("in")) {
                            var h = p[0];
                            if (h.init && (h.id.type === u.Syntax.ArrayPattern || h.id.type === u.Syntax.ObjectPattern || this.context.strict)) {
                                this.tolerateError(n.Messages.ForInOfLoopInitializer, "for-in");
                            }
                            e = this.finalize(e, new o.VariableDeclaration(p, "var"));
                            this.nextToken();
                            i = e;
                            a = this.parseExpression();
                            e = null;
                        }
                        else if (p.length === 1 && p[0].init === null && this.matchContextualKeyword("of")) {
                            e = this.finalize(e, new o.VariableDeclaration(p, "var"));
                            this.nextToken();
                            i = e;
                            a = this.parseAssignmentExpression();
                            e = null;
                            s = false;
                        }
                        else {
                            e = this.finalize(e, new o.VariableDeclaration(p, "var"));
                            this.expect(";");
                        }
                    }
                    else if (this.matchKeyword("const") || this.matchKeyword("let")) {
                        e = this.createNode();
                        var d = this.nextToken().value;
                        if (!this.context.strict && this.lookahead.value === "in") {
                            e = this.finalize(e, new o.Identifier(d));
                            this.nextToken();
                            i = e;
                            a = this.parseExpression();
                            e = null;
                        }
                        else {
                            var l = this.context.allowIn;
                            this.context.allowIn = false;
                            var p = this.parseBindingList(d, { inFor: true });
                            this.context.allowIn = l;
                            if (p.length === 1 && p[0].init === null && this.matchKeyword("in")) {
                                e = this.finalize(e, new o.VariableDeclaration(p, d));
                                this.nextToken();
                                i = e;
                                a = this.parseExpression();
                                e = null;
                            }
                            else if (p.length === 1 && p[0].init === null && this.matchContextualKeyword("of")) {
                                e = this.finalize(e, new o.VariableDeclaration(p, d));
                                this.nextToken();
                                i = e;
                                a = this.parseAssignmentExpression();
                                e = null;
                                s = false;
                            }
                            else {
                                this.consumeSemicolon();
                                e = this.finalize(e, new o.VariableDeclaration(p, d));
                            }
                        }
                    }
                    else {
                        var m = this.lookahead;
                        var l = this.context.allowIn;
                        this.context.allowIn = false;
                        e = this.inheritCoverGrammar(this.parseAssignmentExpression);
                        this.context.allowIn = l;
                        if (this.matchKeyword("in")) {
                            if (!this.context.isAssignmentTarget || e.type === u.Syntax.AssignmentExpression) {
                                this.tolerateError(n.Messages.InvalidLHSInForIn);
                            }
                            this.nextToken();
                            this.reinterpretExpressionAsPattern(e);
                            i = e;
                            a = this.parseExpression();
                            e = null;
                        }
                        else if (this.matchContextualKeyword("of")) {
                            if (!this.context.isAssignmentTarget || e.type === u.Syntax.AssignmentExpression) {
                                this.tolerateError(n.Messages.InvalidLHSInForLoop);
                            }
                            this.nextToken();
                            this.reinterpretExpressionAsPattern(e);
                            i = e;
                            a = this.parseAssignmentExpression();
                            e = null;
                            s = false;
                        }
                        else {
                            if (this.match(",")) {
                                var g = [e];
                                while (this.match(",")) {
                                    this.nextToken();
                                    g.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
                                }
                                e = this.finalize(this.startNode(m), new o.SequenceExpression(g));
                            }
                            this.expect(";");
                        }
                    }
                } if (typeof i === "undefined") {
                    if (!this.match(";")) {
                        t = this.parseExpression();
                    }
                    this.expect(";");
                    if (!this.match(")")) {
                        r = this.parseExpression();
                    }
                } var E; if (!this.match(")") && this.config.tolerant) {
                    this.tolerateUnexpectedToken(this.nextToken());
                    E = this.finalize(this.createNode(), new o.EmptyStatement);
                }
                else {
                    this.expect(")");
                    var v = this.context.inIteration;
                    this.context.inIteration = true;
                    E = this.isolateCoverGrammar(this.parseStatement);
                    this.context.inIteration = v;
                } return typeof i === "undefined" ? this.finalize(c, new o.ForStatement(e, t, r, E)) : s ? this.finalize(c, new o.ForInStatement(i, a, E)) : this.finalize(c, new o.ForOfStatement(i, a, E)); }; Parser.prototype.parseContinueStatement = function () { var e = this.createNode(); this.expectKeyword("continue"); var t = null; if (this.lookahead.type === 3 && !this.hasLineTerminator) {
                    var r = this.parseVariableIdentifier();
                    t = r;
                    var s = "$" + r.name;
                    if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, s)) {
                        this.throwError(n.Messages.UnknownLabel, r.name);
                    }
                } this.consumeSemicolon(); if (t === null && !this.context.inIteration) {
                    this.throwError(n.Messages.IllegalContinue);
                } return this.finalize(e, new o.ContinueStatement(t)); }; Parser.prototype.parseBreakStatement = function () { var e = this.createNode(); this.expectKeyword("break"); var t = null; if (this.lookahead.type === 3 && !this.hasLineTerminator) {
                    var r = this.parseVariableIdentifier();
                    var s = "$" + r.name;
                    if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, s)) {
                        this.throwError(n.Messages.UnknownLabel, r.name);
                    }
                    t = r;
                } this.consumeSemicolon(); if (t === null && !this.context.inIteration && !this.context.inSwitch) {
                    this.throwError(n.Messages.IllegalBreak);
                } return this.finalize(e, new o.BreakStatement(t)); }; Parser.prototype.parseReturnStatement = function () { if (!this.context.inFunctionBody) {
                    this.tolerateError(n.Messages.IllegalReturn);
                } var e = this.createNode(); this.expectKeyword("return"); var t = !this.match(";") && !this.match("}") && !this.hasLineTerminator && this.lookahead.type !== 2 || this.lookahead.type === 8 || this.lookahead.type === 10; var r = t ? this.parseExpression() : null; this.consumeSemicolon(); return this.finalize(e, new o.ReturnStatement(r)); }; Parser.prototype.parseWithStatement = function () { if (this.context.strict) {
                    this.tolerateError(n.Messages.StrictModeWith);
                } var e = this.createNode(); var t; this.expectKeyword("with"); this.expect("("); var r = this.parseExpression(); if (!this.match(")") && this.config.tolerant) {
                    this.tolerateUnexpectedToken(this.nextToken());
                    t = this.finalize(this.createNode(), new o.EmptyStatement);
                }
                else {
                    this.expect(")");
                    t = this.parseStatement();
                } return this.finalize(e, new o.WithStatement(r, t)); }; Parser.prototype.parseSwitchCase = function () { var e = this.createNode(); var t; if (this.matchKeyword("default")) {
                    this.nextToken();
                    t = null;
                }
                else {
                    this.expectKeyword("case");
                    t = this.parseExpression();
                } this.expect(":"); var r = []; while (true) {
                    if (this.match("}") || this.matchKeyword("default") || this.matchKeyword("case")) {
                        break;
                    }
                    r.push(this.parseStatementListItem());
                } return this.finalize(e, new o.SwitchCase(t, r)); }; Parser.prototype.parseSwitchStatement = function () { var e = this.createNode(); this.expectKeyword("switch"); this.expect("("); var t = this.parseExpression(); this.expect(")"); var r = this.context.inSwitch; this.context.inSwitch = true; var s = []; var i = false; this.expect("{"); while (true) {
                    if (this.match("}")) {
                        break;
                    }
                    var a = this.parseSwitchCase();
                    if (a.test === null) {
                        if (i) {
                            this.throwError(n.Messages.MultipleDefaultsInSwitch);
                        }
                        i = true;
                    }
                    s.push(a);
                } this.expect("}"); this.context.inSwitch = r; return this.finalize(e, new o.SwitchStatement(t, s)); }; Parser.prototype.parseLabelledStatement = function () { var e = this.createNode(); var t = this.parseExpression(); var r; if (t.type === u.Syntax.Identifier && this.match(":")) {
                    this.nextToken();
                    var s = t;
                    var i = "$" + s.name;
                    if (Object.prototype.hasOwnProperty.call(this.context.labelSet, i)) {
                        this.throwError(n.Messages.Redeclaration, "Label", s.name);
                    }
                    this.context.labelSet[i] = true;
                    var a = void 0;
                    if (this.matchKeyword("class")) {
                        this.tolerateUnexpectedToken(this.lookahead);
                        a = this.parseClassDeclaration();
                    }
                    else if (this.matchKeyword("function")) {
                        var c = this.lookahead;
                        var l = this.parseFunctionDeclaration();
                        if (this.context.strict) {
                            this.tolerateUnexpectedToken(c, n.Messages.StrictFunction);
                        }
                        else if (l.generator) {
                            this.tolerateUnexpectedToken(c, n.Messages.GeneratorInLegacyContext);
                        }
                        a = l;
                    }
                    else {
                        a = this.parseStatement();
                    }
                    delete this.context.labelSet[i];
                    r = new o.LabeledStatement(s, a);
                }
                else {
                    this.consumeSemicolon();
                    r = new o.ExpressionStatement(t);
                } return this.finalize(e, r); }; Parser.prototype.parseThrowStatement = function () { var e = this.createNode(); this.expectKeyword("throw"); if (this.hasLineTerminator) {
                    this.throwError(n.Messages.NewlineAfterThrow);
                } var t = this.parseExpression(); this.consumeSemicolon(); return this.finalize(e, new o.ThrowStatement(t)); }; Parser.prototype.parseCatchClause = function () { var e = this.createNode(); this.expectKeyword("catch"); this.expect("("); if (this.match(")")) {
                    this.throwUnexpectedToken(this.lookahead);
                } var t = []; var r = this.parsePattern(t); var s = {}; for (var i = 0; i < t.length; i++) {
                    var a = "$" + t[i].value;
                    if (Object.prototype.hasOwnProperty.call(s, a)) {
                        this.tolerateError(n.Messages.DuplicateBinding, t[i].value);
                    }
                    s[a] = true;
                } if (this.context.strict && r.type === u.Syntax.Identifier) {
                    if (this.scanner.isRestrictedWord(r.name)) {
                        this.tolerateError(n.Messages.StrictCatchVariable);
                    }
                } this.expect(")"); var c = this.parseBlock(); return this.finalize(e, new o.CatchClause(r, c)); }; Parser.prototype.parseFinallyClause = function () { this.expectKeyword("finally"); return this.parseBlock(); }; Parser.prototype.parseTryStatement = function () { var e = this.createNode(); this.expectKeyword("try"); var t = this.parseBlock(); var r = this.matchKeyword("catch") ? this.parseCatchClause() : null; var s = this.matchKeyword("finally") ? this.parseFinallyClause() : null; if (!r && !s) {
                    this.throwError(n.Messages.NoCatchOrFinally);
                } return this.finalize(e, new o.TryStatement(t, r, s)); }; Parser.prototype.parseDebuggerStatement = function () { var e = this.createNode(); this.expectKeyword("debugger"); this.consumeSemicolon(); return this.finalize(e, new o.DebuggerStatement); }; Parser.prototype.parseStatement = function () { var e; switch (this.lookahead.type) {
                    case 1:
                    case 5:
                    case 6:
                    case 8:
                    case 10:
                    case 9:
                        e = this.parseExpressionStatement();
                        break;
                    case 7:
                        var t = this.lookahead.value;
                        if (t === "{") {
                            e = this.parseBlock();
                        }
                        else if (t === "(") {
                            e = this.parseExpressionStatement();
                        }
                        else if (t === ";") {
                            e = this.parseEmptyStatement();
                        }
                        else {
                            e = this.parseExpressionStatement();
                        }
                        break;
                    case 3:
                        e = this.matchAsyncFunction() ? this.parseFunctionDeclaration() : this.parseLabelledStatement();
                        break;
                    case 4:
                        switch (this.lookahead.value) {
                            case "break":
                                e = this.parseBreakStatement();
                                break;
                            case "continue":
                                e = this.parseContinueStatement();
                                break;
                            case "debugger":
                                e = this.parseDebuggerStatement();
                                break;
                            case "do":
                                e = this.parseDoWhileStatement();
                                break;
                            case "for":
                                e = this.parseForStatement();
                                break;
                            case "function":
                                e = this.parseFunctionDeclaration();
                                break;
                            case "if":
                                e = this.parseIfStatement();
                                break;
                            case "return":
                                e = this.parseReturnStatement();
                                break;
                            case "switch":
                                e = this.parseSwitchStatement();
                                break;
                            case "throw":
                                e = this.parseThrowStatement();
                                break;
                            case "try":
                                e = this.parseTryStatement();
                                break;
                            case "var":
                                e = this.parseVariableStatement();
                                break;
                            case "while":
                                e = this.parseWhileStatement();
                                break;
                            case "with":
                                e = this.parseWithStatement();
                                break;
                            default:
                                e = this.parseExpressionStatement();
                                break;
                        }
                        break;
                    default: e = this.throwUnexpectedToken(this.lookahead);
                } return e; }; Parser.prototype.parseFunctionSourceElements = function () { var e = this.createNode(); this.expect("{"); var t = this.parseDirectivePrologues(); var r = this.context.labelSet; var s = this.context.inIteration; var i = this.context.inSwitch; var n = this.context.inFunctionBody; this.context.labelSet = {}; this.context.inIteration = false; this.context.inSwitch = false; this.context.inFunctionBody = true; while (this.lookahead.type !== 2) {
                    if (this.match("}")) {
                        break;
                    }
                    t.push(this.parseStatementListItem());
                } this.expect("}"); this.context.labelSet = r; this.context.inIteration = s; this.context.inSwitch = i; this.context.inFunctionBody = n; return this.finalize(e, new o.BlockStatement(t)); }; Parser.prototype.validateParam = function (e, t, r) { var s = "$" + r; if (this.context.strict) {
                    if (this.scanner.isRestrictedWord(r)) {
                        e.stricted = t;
                        e.message = n.Messages.StrictParamName;
                    }
                    if (Object.prototype.hasOwnProperty.call(e.paramSet, s)) {
                        e.stricted = t;
                        e.message = n.Messages.StrictParamDupe;
                    }
                }
                else if (!e.firstRestricted) {
                    if (this.scanner.isRestrictedWord(r)) {
                        e.firstRestricted = t;
                        e.message = n.Messages.StrictParamName;
                    }
                    else if (this.scanner.isStrictModeReservedWord(r)) {
                        e.firstRestricted = t;
                        e.message = n.Messages.StrictReservedWord;
                    }
                    else if (Object.prototype.hasOwnProperty.call(e.paramSet, s)) {
                        e.stricted = t;
                        e.message = n.Messages.StrictParamDupe;
                    }
                } if (typeof Object.defineProperty === "function") {
                    Object.defineProperty(e.paramSet, s, { value: true, enumerable: true, writable: true, configurable: true });
                }
                else {
                    e.paramSet[s] = true;
                } }; Parser.prototype.parseRestElement = function (e) { var t = this.createNode(); this.expect("..."); var r = this.parsePattern(e); if (this.match("=")) {
                    this.throwError(n.Messages.DefaultRestParameter);
                } if (!this.match(")")) {
                    this.throwError(n.Messages.ParameterAfterRestParameter);
                } return this.finalize(t, new o.RestElement(r)); }; Parser.prototype.parseFormalParameter = function (e) { var t = []; var r = this.match("...") ? this.parseRestElement(t) : this.parsePatternWithDefault(t); for (var s = 0; s < t.length; s++) {
                    this.validateParam(e, t[s], t[s].value);
                } e.simple = e.simple && r instanceof o.Identifier; e.params.push(r); }; Parser.prototype.parseFormalParameters = function (e) { var t; t = { simple: true, params: [], firstRestricted: e }; this.expect("("); if (!this.match(")")) {
                    t.paramSet = {};
                    while (this.lookahead.type !== 2) {
                        this.parseFormalParameter(t);
                        if (this.match(")")) {
                            break;
                        }
                        this.expect(",");
                        if (this.match(")")) {
                            break;
                        }
                    }
                } this.expect(")"); return { simple: t.simple, params: t.params, stricted: t.stricted, firstRestricted: t.firstRestricted, message: t.message }; }; Parser.prototype.matchAsyncFunction = function () { var e = this.matchContextualKeyword("async"); if (e) {
                    var t = this.scanner.saveState();
                    this.scanner.scanComments();
                    var r = this.scanner.lex();
                    this.scanner.restoreState(t);
                    e = t.lineNumber === r.lineNumber && r.type === 4 && r.value === "function";
                } return e; }; Parser.prototype.parseFunctionDeclaration = function (e) { var t = this.createNode(); var r = this.matchContextualKeyword("async"); if (r) {
                    this.nextToken();
                } this.expectKeyword("function"); var s = r ? false : this.match("*"); if (s) {
                    this.nextToken();
                } var i; var a = null; var u = null; if (!e || !this.match("(")) {
                    var c = this.lookahead;
                    a = this.parseVariableIdentifier();
                    if (this.context.strict) {
                        if (this.scanner.isRestrictedWord(c.value)) {
                            this.tolerateUnexpectedToken(c, n.Messages.StrictFunctionName);
                        }
                    }
                    else {
                        if (this.scanner.isRestrictedWord(c.value)) {
                            u = c;
                            i = n.Messages.StrictFunctionName;
                        }
                        else if (this.scanner.isStrictModeReservedWord(c.value)) {
                            u = c;
                            i = n.Messages.StrictReservedWord;
                        }
                    }
                } var l = this.context.await; var p = this.context.allowYield; this.context.await = r; this.context.allowYield = !s; var h = this.parseFormalParameters(u); var d = h.params; var m = h.stricted; u = h.firstRestricted; if (h.message) {
                    i = h.message;
                } var g = this.context.strict; var E = this.context.allowStrictDirective; this.context.allowStrictDirective = h.simple; var v = this.parseFunctionSourceElements(); if (this.context.strict && u) {
                    this.throwUnexpectedToken(u, i);
                } if (this.context.strict && m) {
                    this.tolerateUnexpectedToken(m, i);
                } this.context.strict = g; this.context.allowStrictDirective = E; this.context.await = l; this.context.allowYield = p; return r ? this.finalize(t, new o.AsyncFunctionDeclaration(a, d, v)) : this.finalize(t, new o.FunctionDeclaration(a, d, v, s)); }; Parser.prototype.parseFunctionExpression = function () { var e = this.createNode(); var t = this.matchContextualKeyword("async"); if (t) {
                    this.nextToken();
                } this.expectKeyword("function"); var r = t ? false : this.match("*"); if (r) {
                    this.nextToken();
                } var s; var i = null; var a; var u = this.context.await; var c = this.context.allowYield; this.context.await = t; this.context.allowYield = !r; if (!this.match("(")) {
                    var l = this.lookahead;
                    i = !this.context.strict && !r && this.matchKeyword("yield") ? this.parseIdentifierName() : this.parseVariableIdentifier();
                    if (this.context.strict) {
                        if (this.scanner.isRestrictedWord(l.value)) {
                            this.tolerateUnexpectedToken(l, n.Messages.StrictFunctionName);
                        }
                    }
                    else {
                        if (this.scanner.isRestrictedWord(l.value)) {
                            a = l;
                            s = n.Messages.StrictFunctionName;
                        }
                        else if (this.scanner.isStrictModeReservedWord(l.value)) {
                            a = l;
                            s = n.Messages.StrictReservedWord;
                        }
                    }
                } var p = this.parseFormalParameters(a); var h = p.params; var d = p.stricted; a = p.firstRestricted; if (p.message) {
                    s = p.message;
                } var m = this.context.strict; var g = this.context.allowStrictDirective; this.context.allowStrictDirective = p.simple; var E = this.parseFunctionSourceElements(); if (this.context.strict && a) {
                    this.throwUnexpectedToken(a, s);
                } if (this.context.strict && d) {
                    this.tolerateUnexpectedToken(d, s);
                } this.context.strict = m; this.context.allowStrictDirective = g; this.context.await = u; this.context.allowYield = c; return t ? this.finalize(e, new o.AsyncFunctionExpression(i, h, E)) : this.finalize(e, new o.FunctionExpression(i, h, E, r)); }; Parser.prototype.parseDirective = function () { var e = this.lookahead; var t = this.createNode(); var r = this.parseExpression(); var s = r.type === u.Syntax.Literal ? this.getTokenRaw(e).slice(1, -1) : null; this.consumeSemicolon(); return this.finalize(t, s ? new o.Directive(r, s) : new o.ExpressionStatement(r)); }; Parser.prototype.parseDirectivePrologues = function () { var e = null; var t = []; while (true) {
                    var r = this.lookahead;
                    if (r.type !== 8) {
                        break;
                    }
                    var s = this.parseDirective();
                    t.push(s);
                    var i = s.directive;
                    if (typeof i !== "string") {
                        break;
                    }
                    if (i === "use strict") {
                        this.context.strict = true;
                        if (e) {
                            this.tolerateUnexpectedToken(e, n.Messages.StrictOctalLiteral);
                        }
                        if (!this.context.allowStrictDirective) {
                            this.tolerateUnexpectedToken(r, n.Messages.IllegalLanguageModeDirective);
                        }
                    }
                    else {
                        if (!e && r.octal) {
                            e = r;
                        }
                    }
                } return t; }; Parser.prototype.qualifiedPropertyName = function (e) { switch (e.type) {
                    case 3:
                    case 8:
                    case 1:
                    case 5:
                    case 6:
                    case 4: return true;
                    case 7: return e.value === "[";
                    default: break;
                } return false; }; Parser.prototype.parseGetterMethod = function () { var e = this.createNode(); var t = false; var r = this.context.allowYield; this.context.allowYield = !t; var s = this.parseFormalParameters(); if (s.params.length > 0) {
                    this.tolerateError(n.Messages.BadGetterArity);
                } var i = this.parsePropertyMethod(s); this.context.allowYield = r; return this.finalize(e, new o.FunctionExpression(null, s.params, i, t)); }; Parser.prototype.parseSetterMethod = function () { var e = this.createNode(); var t = false; var r = this.context.allowYield; this.context.allowYield = !t; var s = this.parseFormalParameters(); if (s.params.length !== 1) {
                    this.tolerateError(n.Messages.BadSetterArity);
                }
                else if (s.params[0] instanceof o.RestElement) {
                    this.tolerateError(n.Messages.BadSetterRestParameter);
                } var i = this.parsePropertyMethod(s); this.context.allowYield = r; return this.finalize(e, new o.FunctionExpression(null, s.params, i, t)); }; Parser.prototype.parseGeneratorMethod = function () { var e = this.createNode(); var t = true; var r = this.context.allowYield; this.context.allowYield = true; var s = this.parseFormalParameters(); this.context.allowYield = false; var i = this.parsePropertyMethod(s); this.context.allowYield = r; return this.finalize(e, new o.FunctionExpression(null, s.params, i, t)); }; Parser.prototype.isStartOfExpression = function () { var e = true; var t = this.lookahead.value; switch (this.lookahead.type) {
                    case 7:
                        e = t === "[" || t === "(" || t === "{" || t === "+" || t === "-" || t === "!" || t === "~" || t === "++" || t === "--" || t === "/" || t === "/=";
                        break;
                    case 4:
                        e = t === "class" || t === "delete" || t === "function" || t === "let" || t === "new" || t === "super" || t === "this" || t === "typeof" || t === "void" || t === "yield";
                        break;
                    default: break;
                } return e; }; Parser.prototype.parseYieldExpression = function () { var e = this.createNode(); this.expectKeyword("yield"); var t = null; var r = false; if (!this.hasLineTerminator) {
                    var s = this.context.allowYield;
                    this.context.allowYield = false;
                    r = this.match("*");
                    if (r) {
                        this.nextToken();
                        t = this.parseAssignmentExpression();
                    }
                    else if (this.isStartOfExpression()) {
                        t = this.parseAssignmentExpression();
                    }
                    this.context.allowYield = s;
                } return this.finalize(e, new o.YieldExpression(t, r)); }; Parser.prototype.parseClassElement = function (e) { var t = this.lookahead; var r = this.createNode(); var s = ""; var i = null; var a = null; var u = false; var c = false; var l = false; var p = false; if (this.match("*")) {
                    this.nextToken();
                }
                else {
                    u = this.match("[");
                    i = this.parseObjectPropertyKey();
                    var h = i;
                    if (h.name === "static" && (this.qualifiedPropertyName(this.lookahead) || this.match("*"))) {
                        t = this.lookahead;
                        l = true;
                        u = this.match("[");
                        if (this.match("*")) {
                            this.nextToken();
                        }
                        else {
                            i = this.parseObjectPropertyKey();
                        }
                    }
                    if (t.type === 3 && !this.hasLineTerminator && t.value === "async") {
                        var d = this.lookahead.value;
                        if (d !== ":" && d !== "(" && d !== "*") {
                            p = true;
                            t = this.lookahead;
                            i = this.parseObjectPropertyKey();
                            if (t.type === 3 && t.value === "constructor") {
                                this.tolerateUnexpectedToken(t, n.Messages.ConstructorIsAsync);
                            }
                        }
                    }
                } var m = this.qualifiedPropertyName(this.lookahead); if (t.type === 3) {
                    if (t.value === "get" && m) {
                        s = "get";
                        u = this.match("[");
                        i = this.parseObjectPropertyKey();
                        this.context.allowYield = false;
                        a = this.parseGetterMethod();
                    }
                    else if (t.value === "set" && m) {
                        s = "set";
                        u = this.match("[");
                        i = this.parseObjectPropertyKey();
                        a = this.parseSetterMethod();
                    }
                }
                else if (t.type === 7 && t.value === "*" && m) {
                    s = "init";
                    u = this.match("[");
                    i = this.parseObjectPropertyKey();
                    a = this.parseGeneratorMethod();
                    c = true;
                } if (!s && i && this.match("(")) {
                    s = "init";
                    a = p ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
                    c = true;
                } if (!s) {
                    this.throwUnexpectedToken(this.lookahead);
                } if (s === "init") {
                    s = "method";
                } if (!u) {
                    if (l && this.isPropertyKey(i, "prototype")) {
                        this.throwUnexpectedToken(t, n.Messages.StaticPrototype);
                    }
                    if (!l && this.isPropertyKey(i, "constructor")) {
                        if (s !== "method" || !c || a && a.generator) {
                            this.throwUnexpectedToken(t, n.Messages.ConstructorSpecialMethod);
                        }
                        if (e.value) {
                            this.throwUnexpectedToken(t, n.Messages.DuplicateConstructor);
                        }
                        else {
                            e.value = true;
                        }
                        s = "constructor";
                    }
                } return this.finalize(r, new o.MethodDefinition(i, u, a, s, l)); }; Parser.prototype.parseClassElementList = function () { var e = []; var t = { value: false }; this.expect("{"); while (!this.match("}")) {
                    if (this.match(";")) {
                        this.nextToken();
                    }
                    else {
                        e.push(this.parseClassElement(t));
                    }
                } this.expect("}"); return e; }; Parser.prototype.parseClassBody = function () { var e = this.createNode(); var t = this.parseClassElementList(); return this.finalize(e, new o.ClassBody(t)); }; Parser.prototype.parseClassDeclaration = function (e) { var t = this.createNode(); var r = this.context.strict; this.context.strict = true; this.expectKeyword("class"); var s = e && this.lookahead.type !== 3 ? null : this.parseVariableIdentifier(); var i = null; if (this.matchKeyword("extends")) {
                    this.nextToken();
                    i = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
                } var n = this.parseClassBody(); this.context.strict = r; return this.finalize(t, new o.ClassDeclaration(s, i, n)); }; Parser.prototype.parseClassExpression = function () { var e = this.createNode(); var t = this.context.strict; this.context.strict = true; this.expectKeyword("class"); var r = this.lookahead.type === 3 ? this.parseVariableIdentifier() : null; var s = null; if (this.matchKeyword("extends")) {
                    this.nextToken();
                    s = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
                } var i = this.parseClassBody(); this.context.strict = t; return this.finalize(e, new o.ClassExpression(r, s, i)); }; Parser.prototype.parseModule = function () { this.context.strict = true; this.context.isModule = true; this.scanner.isModule = true; var e = this.createNode(); var t = this.parseDirectivePrologues(); while (this.lookahead.type !== 2) {
                    t.push(this.parseStatementListItem());
                } return this.finalize(e, new o.Module(t)); }; Parser.prototype.parseScript = function () { var e = this.createNode(); var t = this.parseDirectivePrologues(); while (this.lookahead.type !== 2) {
                    t.push(this.parseStatementListItem());
                } return this.finalize(e, new o.Script(t)); }; Parser.prototype.parseModuleSpecifier = function () { var e = this.createNode(); if (this.lookahead.type !== 8) {
                    this.throwError(n.Messages.InvalidModuleSpecifier);
                } var t = this.nextToken(); var r = this.getTokenRaw(t); return this.finalize(e, new o.Literal(t.value, r)); }; Parser.prototype.parseImportSpecifier = function () { var e = this.createNode(); var t; var r; if (this.lookahead.type === 3) {
                    t = this.parseVariableIdentifier();
                    r = t;
                    if (this.matchContextualKeyword("as")) {
                        this.nextToken();
                        r = this.parseVariableIdentifier();
                    }
                }
                else {
                    t = this.parseIdentifierName();
                    r = t;
                    if (this.matchContextualKeyword("as")) {
                        this.nextToken();
                        r = this.parseVariableIdentifier();
                    }
                    else {
                        this.throwUnexpectedToken(this.nextToken());
                    }
                } return this.finalize(e, new o.ImportSpecifier(r, t)); }; Parser.prototype.parseNamedImports = function () { this.expect("{"); var e = []; while (!this.match("}")) {
                    e.push(this.parseImportSpecifier());
                    if (!this.match("}")) {
                        this.expect(",");
                    }
                } this.expect("}"); return e; }; Parser.prototype.parseImportDefaultSpecifier = function () { var e = this.createNode(); var t = this.parseIdentifierName(); return this.finalize(e, new o.ImportDefaultSpecifier(t)); }; Parser.prototype.parseImportNamespaceSpecifier = function () { var e = this.createNode(); this.expect("*"); if (!this.matchContextualKeyword("as")) {
                    this.throwError(n.Messages.NoAsAfterImportNamespace);
                } this.nextToken(); var t = this.parseIdentifierName(); return this.finalize(e, new o.ImportNamespaceSpecifier(t)); }; Parser.prototype.parseImportDeclaration = function () { if (this.context.inFunctionBody) {
                    this.throwError(n.Messages.IllegalImportDeclaration);
                } var e = this.createNode(); this.expectKeyword("import"); var t; var r = []; if (this.lookahead.type === 8) {
                    t = this.parseModuleSpecifier();
                }
                else {
                    if (this.match("{")) {
                        r = r.concat(this.parseNamedImports());
                    }
                    else if (this.match("*")) {
                        r.push(this.parseImportNamespaceSpecifier());
                    }
                    else if (this.isIdentifierName(this.lookahead) && !this.matchKeyword("default")) {
                        r.push(this.parseImportDefaultSpecifier());
                        if (this.match(",")) {
                            this.nextToken();
                            if (this.match("*")) {
                                r.push(this.parseImportNamespaceSpecifier());
                            }
                            else if (this.match("{")) {
                                r = r.concat(this.parseNamedImports());
                            }
                            else {
                                this.throwUnexpectedToken(this.lookahead);
                            }
                        }
                    }
                    else {
                        this.throwUnexpectedToken(this.nextToken());
                    }
                    if (!this.matchContextualKeyword("from")) {
                        var s = this.lookahead.value ? n.Messages.UnexpectedToken : n.Messages.MissingFromClause;
                        this.throwError(s, this.lookahead.value);
                    }
                    this.nextToken();
                    t = this.parseModuleSpecifier();
                } this.consumeSemicolon(); return this.finalize(e, new o.ImportDeclaration(r, t)); }; Parser.prototype.parseExportSpecifier = function () { var e = this.createNode(); var t = this.parseIdentifierName(); var r = t; if (this.matchContextualKeyword("as")) {
                    this.nextToken();
                    r = this.parseIdentifierName();
                } return this.finalize(e, new o.ExportSpecifier(t, r)); }; Parser.prototype.parseExportDeclaration = function () { if (this.context.inFunctionBody) {
                    this.throwError(n.Messages.IllegalExportDeclaration);
                } var e = this.createNode(); this.expectKeyword("export"); var t; if (this.matchKeyword("default")) {
                    this.nextToken();
                    if (this.matchKeyword("function")) {
                        var r = this.parseFunctionDeclaration(true);
                        t = this.finalize(e, new o.ExportDefaultDeclaration(r));
                    }
                    else if (this.matchKeyword("class")) {
                        var r = this.parseClassDeclaration(true);
                        t = this.finalize(e, new o.ExportDefaultDeclaration(r));
                    }
                    else if (this.matchContextualKeyword("async")) {
                        var r = this.matchAsyncFunction() ? this.parseFunctionDeclaration(true) : this.parseAssignmentExpression();
                        t = this.finalize(e, new o.ExportDefaultDeclaration(r));
                    }
                    else {
                        if (this.matchContextualKeyword("from")) {
                            this.throwError(n.Messages.UnexpectedToken, this.lookahead.value);
                        }
                        var r = this.match("{") ? this.parseObjectInitializer() : this.match("[") ? this.parseArrayInitializer() : this.parseAssignmentExpression();
                        this.consumeSemicolon();
                        t = this.finalize(e, new o.ExportDefaultDeclaration(r));
                    }
                }
                else if (this.match("*")) {
                    this.nextToken();
                    if (!this.matchContextualKeyword("from")) {
                        var s = this.lookahead.value ? n.Messages.UnexpectedToken : n.Messages.MissingFromClause;
                        this.throwError(s, this.lookahead.value);
                    }
                    this.nextToken();
                    var i = this.parseModuleSpecifier();
                    this.consumeSemicolon();
                    t = this.finalize(e, new o.ExportAllDeclaration(i));
                }
                else if (this.lookahead.type === 4) {
                    var r = void 0;
                    switch (this.lookahead.value) {
                        case "let":
                        case "const":
                            r = this.parseLexicalDeclaration({ inFor: false });
                            break;
                        case "var":
                        case "class":
                        case "function":
                            r = this.parseStatementListItem();
                            break;
                        default: this.throwUnexpectedToken(this.lookahead);
                    }
                    t = this.finalize(e, new o.ExportNamedDeclaration(r, [], null));
                }
                else if (this.matchAsyncFunction()) {
                    var r = this.parseFunctionDeclaration();
                    t = this.finalize(e, new o.ExportNamedDeclaration(r, [], null));
                }
                else {
                    var a = [];
                    var u = null;
                    var c = false;
                    this.expect("{");
                    while (!this.match("}")) {
                        c = c || this.matchKeyword("default");
                        a.push(this.parseExportSpecifier());
                        if (!this.match("}")) {
                            this.expect(",");
                        }
                    }
                    this.expect("}");
                    if (this.matchContextualKeyword("from")) {
                        this.nextToken();
                        u = this.parseModuleSpecifier();
                        this.consumeSemicolon();
                    }
                    else if (c) {
                        var s = this.lookahead.value ? n.Messages.UnexpectedToken : n.Messages.MissingFromClause;
                        this.throwError(s, this.lookahead.value);
                    }
                    else {
                        this.consumeSemicolon();
                    }
                    t = this.finalize(e, new o.ExportNamedDeclaration(null, a, u));
                } return t; }; return Parser; }();
                t.Parser = p;
            }, function (e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true });
                function assert(e, t) { if (!e) {
                    throw new Error("ASSERT: " + t);
                } }
                t.assert = assert;
            }, function (e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true });
                var r = function () { function ErrorHandler() { this.errors = []; this.tolerant = false; } ErrorHandler.prototype.recordError = function (e) { this.errors.push(e); }; ErrorHandler.prototype.tolerate = function (e) { if (this.tolerant) {
                    this.recordError(e);
                }
                else {
                    throw e;
                } }; ErrorHandler.prototype.constructError = function (e, t) { var r = new Error(e); try {
                    throw r;
                }
                catch (e) {
                    if (Object.create && Object.defineProperty) {
                        r = Object.create(e);
                        Object.defineProperty(r, "column", { value: t });
                    }
                } return r; }; ErrorHandler.prototype.createError = function (e, t, r, s) { var i = "Line " + t + ": " + s; var n = this.constructError(i, r); n.index = e; n.lineNumber = t; n.description = s; return n; }; ErrorHandler.prototype.throwError = function (e, t, r, s) { throw this.createError(e, t, r, s); }; ErrorHandler.prototype.tolerateError = function (e, t, r, s) { var i = this.createError(e, t, r, s); if (this.tolerant) {
                    this.recordError(i);
                }
                else {
                    throw i;
                } }; return ErrorHandler; }();
                t.ErrorHandler = r;
            }, function (e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true });
                t.Messages = { BadGetterArity: "Getter must not have any formal parameters", BadSetterArity: "Setter must have exactly one formal parameter", BadSetterRestParameter: "Setter function argument must not be a rest parameter", ConstructorIsAsync: "Class constructor may not be an async method", ConstructorSpecialMethod: "Class constructor may not be an accessor", DeclarationMissingInitializer: "Missing initializer in %0 declaration", DefaultRestParameter: "Unexpected token =", DuplicateBinding: "Duplicate binding %0", DuplicateConstructor: "A class may only have one constructor", DuplicateProtoProperty: "Duplicate __proto__ fields are not allowed in object literals", ForInOfLoopInitializer: "%0 loop variable declaration may not have an initializer", GeneratorInLegacyContext: "Generator declarations are not allowed in legacy contexts", IllegalBreak: "Illegal break statement", IllegalContinue: "Illegal continue statement", IllegalExportDeclaration: "Unexpected token", IllegalImportDeclaration: "Unexpected token", IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list", IllegalReturn: "Illegal return statement", InvalidEscapedReservedWord: "Keyword must not contain escaped characters", InvalidHexEscapeSequence: "Invalid hexadecimal escape sequence", InvalidLHSInAssignment: "Invalid left-hand side in assignment", InvalidLHSInForIn: "Invalid left-hand side in for-in", InvalidLHSInForLoop: "Invalid left-hand side in for-loop", InvalidModuleSpecifier: "Unexpected token", InvalidRegExp: "Invalid regular expression", LetInLexicalBinding: "let is disallowed as a lexically bound name", MissingFromClause: "Unexpected token", MultipleDefaultsInSwitch: "More than one default clause in switch statement", NewlineAfterThrow: "Illegal newline after throw", NoAsAfterImportNamespace: "Unexpected token", NoCatchOrFinally: "Missing catch or finally after try", ParameterAfterRestParameter: "Rest parameter must be last formal parameter", Redeclaration: "%0 '%1' has already been declared", StaticPrototype: "Classes may not have static property named prototype", StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode", StrictDelete: "Delete of an unqualified identifier in strict mode.", StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block", StrictFunctionName: "Function name may not be eval or arguments in strict mode", StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode", StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode", StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode", StrictModeWith: "Strict mode code may not include a with statement", StrictOctalLiteral: "Octal literals are not allowed in strict mode.", StrictParamDupe: "Strict mode function may not have duplicate parameter names", StrictParamName: "Parameter name eval or arguments is not allowed in strict mode", StrictReservedWord: "Use of future reserved word in strict mode", StrictVarName: "Variable name may not be eval or arguments in strict mode", TemplateOctalLiteral: "Octal literals are not allowed in template strings.", UnexpectedEOS: "Unexpected end of input", UnexpectedIdentifier: "Unexpected identifier", UnexpectedNumber: "Unexpected number", UnexpectedReserved: "Unexpected reserved word", UnexpectedString: "Unexpected string", UnexpectedTemplate: "Unexpected quasi %0", UnexpectedToken: "Unexpected token %0", UnexpectedTokenIllegal: "Unexpected token ILLEGAL", UnknownLabel: "Undefined label '%0'", UnterminatedRegExp: "Invalid regular expression: missing /" };
            }, function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true });
                var s = r(9);
                var i = r(4);
                var n = r(11);
                function hexValue(e) { return "0123456789abcdef".indexOf(e.toLowerCase()); }
                function octalValue(e) { return "01234567".indexOf(e); }
                var o = function () { function Scanner(e, t) { this.source = e; this.errorHandler = t; this.trackComment = false; this.isModule = false; this.length = e.length; this.index = 0; this.lineNumber = e.length > 0 ? 1 : 0; this.lineStart = 0; this.curlyStack = []; } Scanner.prototype.saveState = function () { return { index: this.index, lineNumber: this.lineNumber, lineStart: this.lineStart }; }; Scanner.prototype.restoreState = function (e) { this.index = e.index; this.lineNumber = e.lineNumber; this.lineStart = e.lineStart; }; Scanner.prototype.eof = function () { return this.index >= this.length; }; Scanner.prototype.throwUnexpectedToken = function (e) { if (e === void 0) {
                    e = n.Messages.UnexpectedTokenIllegal;
                } return this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, e); }; Scanner.prototype.tolerateUnexpectedToken = function (e) { if (e === void 0) {
                    e = n.Messages.UnexpectedTokenIllegal;
                } this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, e); }; Scanner.prototype.skipSingleLineComment = function (e) { var t = []; var r, s; if (this.trackComment) {
                    t = [];
                    r = this.index - e;
                    s = { start: { line: this.lineNumber, column: this.index - this.lineStart - e }, end: {} };
                } while (!this.eof()) {
                    var n = this.source.charCodeAt(this.index);
                    ++this.index;
                    if (i.Character.isLineTerminator(n)) {
                        if (this.trackComment) {
                            s.end = { line: this.lineNumber, column: this.index - this.lineStart - 1 };
                            var o = { multiLine: false, slice: [r + e, this.index - 1], range: [r, this.index - 1], loc: s };
                            t.push(o);
                        }
                        if (n === 13 && this.source.charCodeAt(this.index) === 10) {
                            ++this.index;
                        }
                        ++this.lineNumber;
                        this.lineStart = this.index;
                        return t;
                    }
                } if (this.trackComment) {
                    s.end = { line: this.lineNumber, column: this.index - this.lineStart };
                    var o = { multiLine: false, slice: [r + e, this.index], range: [r, this.index], loc: s };
                    t.push(o);
                } return t; }; Scanner.prototype.skipMultiLineComment = function () { var e = []; var t, r; if (this.trackComment) {
                    e = [];
                    t = this.index - 2;
                    r = { start: { line: this.lineNumber, column: this.index - this.lineStart - 2 }, end: {} };
                } while (!this.eof()) {
                    var s = this.source.charCodeAt(this.index);
                    if (i.Character.isLineTerminator(s)) {
                        if (s === 13 && this.source.charCodeAt(this.index + 1) === 10) {
                            ++this.index;
                        }
                        ++this.lineNumber;
                        ++this.index;
                        this.lineStart = this.index;
                    }
                    else if (s === 42) {
                        if (this.source.charCodeAt(this.index + 1) === 47) {
                            this.index += 2;
                            if (this.trackComment) {
                                r.end = { line: this.lineNumber, column: this.index - this.lineStart };
                                var n = { multiLine: true, slice: [t + 2, this.index - 2], range: [t, this.index], loc: r };
                                e.push(n);
                            }
                            return e;
                        }
                        ++this.index;
                    }
                    else {
                        ++this.index;
                    }
                } if (this.trackComment) {
                    r.end = { line: this.lineNumber, column: this.index - this.lineStart };
                    var n = { multiLine: true, slice: [t + 2, this.index], range: [t, this.index], loc: r };
                    e.push(n);
                } this.tolerateUnexpectedToken(); return e; }; Scanner.prototype.scanComments = function () { var e; if (this.trackComment) {
                    e = [];
                } var t = this.index === 0; while (!this.eof()) {
                    var r = this.source.charCodeAt(this.index);
                    if (i.Character.isWhiteSpace(r)) {
                        ++this.index;
                    }
                    else if (i.Character.isLineTerminator(r)) {
                        ++this.index;
                        if (r === 13 && this.source.charCodeAt(this.index) === 10) {
                            ++this.index;
                        }
                        ++this.lineNumber;
                        this.lineStart = this.index;
                        t = true;
                    }
                    else if (r === 47) {
                        r = this.source.charCodeAt(this.index + 1);
                        if (r === 47) {
                            this.index += 2;
                            var s = this.skipSingleLineComment(2);
                            if (this.trackComment) {
                                e = e.concat(s);
                            }
                            t = true;
                        }
                        else if (r === 42) {
                            this.index += 2;
                            var s = this.skipMultiLineComment();
                            if (this.trackComment) {
                                e = e.concat(s);
                            }
                        }
                        else {
                            break;
                        }
                    }
                    else if (t && r === 45) {
                        if (this.source.charCodeAt(this.index + 1) === 45 && this.source.charCodeAt(this.index + 2) === 62) {
                            this.index += 3;
                            var s = this.skipSingleLineComment(3);
                            if (this.trackComment) {
                                e = e.concat(s);
                            }
                        }
                        else {
                            break;
                        }
                    }
                    else if (r === 60 && !this.isModule) {
                        if (this.source.slice(this.index + 1, this.index + 4) === "!--") {
                            this.index += 4;
                            var s = this.skipSingleLineComment(4);
                            if (this.trackComment) {
                                e = e.concat(s);
                            }
                        }
                        else {
                            break;
                        }
                    }
                    else {
                        break;
                    }
                } return e; }; Scanner.prototype.isFutureReservedWord = function (e) { switch (e) {
                    case "enum":
                    case "export":
                    case "import":
                    case "super": return true;
                    default: return false;
                } }; Scanner.prototype.isStrictModeReservedWord = function (e) { switch (e) {
                    case "implements":
                    case "interface":
                    case "package":
                    case "private":
                    case "protected":
                    case "public":
                    case "static":
                    case "yield":
                    case "let": return true;
                    default: return false;
                } }; Scanner.prototype.isRestrictedWord = function (e) { return e === "eval" || e === "arguments"; }; Scanner.prototype.isKeyword = function (e) { switch (e.length) {
                    case 2: return e === "if" || e === "in" || e === "do";
                    case 3: return e === "var" || e === "for" || e === "new" || e === "try" || e === "let";
                    case 4: return e === "this" || e === "else" || e === "case" || e === "void" || e === "with" || e === "enum";
                    case 5: return e === "while" || e === "break" || e === "catch" || e === "throw" || e === "const" || e === "yield" || e === "class" || e === "super";
                    case 6: return e === "return" || e === "typeof" || e === "delete" || e === "switch" || e === "export" || e === "import";
                    case 7: return e === "default" || e === "finally" || e === "extends";
                    case 8: return e === "function" || e === "continue" || e === "debugger";
                    case 10: return e === "instanceof";
                    default: return false;
                } }; Scanner.prototype.codePointAt = function (e) { var t = this.source.charCodeAt(e); if (t >= 55296 && t <= 56319) {
                    var r = this.source.charCodeAt(e + 1);
                    if (r >= 56320 && r <= 57343) {
                        var s = t;
                        t = (s - 55296) * 1024 + r - 56320 + 65536;
                    }
                } return t; }; Scanner.prototype.scanHexEscape = function (e) { var t = e === "u" ? 4 : 2; var r = 0; for (var s = 0; s < t; ++s) {
                    if (!this.eof() && i.Character.isHexDigit(this.source.charCodeAt(this.index))) {
                        r = r * 16 + hexValue(this.source[this.index++]);
                    }
                    else {
                        return null;
                    }
                } return String.fromCharCode(r); }; Scanner.prototype.scanUnicodeCodePointEscape = function () { var e = this.source[this.index]; var t = 0; if (e === "}") {
                    this.throwUnexpectedToken();
                } while (!this.eof()) {
                    e = this.source[this.index++];
                    if (!i.Character.isHexDigit(e.charCodeAt(0))) {
                        break;
                    }
                    t = t * 16 + hexValue(e);
                } if (t > 1114111 || e !== "}") {
                    this.throwUnexpectedToken();
                } return i.Character.fromCodePoint(t); }; Scanner.prototype.getIdentifier = function () { var e = this.index++; while (!this.eof()) {
                    var t = this.source.charCodeAt(this.index);
                    if (t === 92) {
                        this.index = e;
                        return this.getComplexIdentifier();
                    }
                    else if (t >= 55296 && t < 57343) {
                        this.index = e;
                        return this.getComplexIdentifier();
                    }
                    if (i.Character.isIdentifierPart(t)) {
                        ++this.index;
                    }
                    else {
                        break;
                    }
                } return this.source.slice(e, this.index); }; Scanner.prototype.getComplexIdentifier = function () { var e = this.codePointAt(this.index); var t = i.Character.fromCodePoint(e); this.index += t.length; var r; if (e === 92) {
                    if (this.source.charCodeAt(this.index) !== 117) {
                        this.throwUnexpectedToken();
                    }
                    ++this.index;
                    if (this.source[this.index] === "{") {
                        ++this.index;
                        r = this.scanUnicodeCodePointEscape();
                    }
                    else {
                        r = this.scanHexEscape("u");
                        if (r === null || r === "\\" || !i.Character.isIdentifierStart(r.charCodeAt(0))) {
                            this.throwUnexpectedToken();
                        }
                    }
                    t = r;
                } while (!this.eof()) {
                    e = this.codePointAt(this.index);
                    if (!i.Character.isIdentifierPart(e)) {
                        break;
                    }
                    r = i.Character.fromCodePoint(e);
                    t += r;
                    this.index += r.length;
                    if (e === 92) {
                        t = t.substr(0, t.length - 1);
                        if (this.source.charCodeAt(this.index) !== 117) {
                            this.throwUnexpectedToken();
                        }
                        ++this.index;
                        if (this.source[this.index] === "{") {
                            ++this.index;
                            r = this.scanUnicodeCodePointEscape();
                        }
                        else {
                            r = this.scanHexEscape("u");
                            if (r === null || r === "\\" || !i.Character.isIdentifierPart(r.charCodeAt(0))) {
                                this.throwUnexpectedToken();
                            }
                        }
                        t += r;
                    }
                } return t; }; Scanner.prototype.octalToDecimal = function (e) { var t = e !== "0"; var r = octalValue(e); if (!this.eof() && i.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
                    t = true;
                    r = r * 8 + octalValue(this.source[this.index++]);
                    if ("0123".indexOf(e) >= 0 && !this.eof() && i.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
                        r = r * 8 + octalValue(this.source[this.index++]);
                    }
                } return { code: r, octal: t }; }; Scanner.prototype.scanIdentifier = function () { var e; var t = this.index; var r = this.source.charCodeAt(t) === 92 ? this.getComplexIdentifier() : this.getIdentifier(); if (r.length === 1) {
                    e = 3;
                }
                else if (this.isKeyword(r)) {
                    e = 4;
                }
                else if (r === "null") {
                    e = 5;
                }
                else if (r === "true" || r === "false") {
                    e = 1;
                }
                else {
                    e = 3;
                } if (e !== 3 && t + r.length !== this.index) {
                    var s = this.index;
                    this.index = t;
                    this.tolerateUnexpectedToken(n.Messages.InvalidEscapedReservedWord);
                    this.index = s;
                } return { type: e, value: r, lineNumber: this.lineNumber, lineStart: this.lineStart, start: t, end: this.index }; }; Scanner.prototype.scanPunctuator = function () { var e = this.index; var t = this.source[this.index]; switch (t) {
                    case "(":
                    case "{":
                        if (t === "{") {
                            this.curlyStack.push("{");
                        }
                        ++this.index;
                        break;
                    case ".":
                        ++this.index;
                        if (this.source[this.index] === "." && this.source[this.index + 1] === ".") {
                            this.index += 2;
                            t = "...";
                        }
                        break;
                    case "}":
                        ++this.index;
                        this.curlyStack.pop();
                        break;
                    case ")":
                    case ";":
                    case ",":
                    case "[":
                    case "]":
                    case ":":
                    case "?":
                    case "~":
                        ++this.index;
                        break;
                    default:
                        t = this.source.substr(this.index, 4);
                        if (t === ">>>=") {
                            this.index += 4;
                        }
                        else {
                            t = t.substr(0, 3);
                            if (t === "===" || t === "!==" || t === ">>>" || t === "<<=" || t === ">>=" || t === "**=") {
                                this.index += 3;
                            }
                            else {
                                t = t.substr(0, 2);
                                if (t === "&&" || t === "||" || t === "==" || t === "!=" || t === "+=" || t === "-=" || t === "*=" || t === "/=" || t === "++" || t === "--" || t === "<<" || t === ">>" || t === "&=" || t === "|=" || t === "^=" || t === "%=" || t === "<=" || t === ">=" || t === "=>" || t === "**") {
                                    this.index += 2;
                                }
                                else {
                                    t = this.source[this.index];
                                    if ("<>=!+-*%&|^/".indexOf(t) >= 0) {
                                        ++this.index;
                                    }
                                }
                            }
                        }
                } if (this.index === e) {
                    this.throwUnexpectedToken();
                } return { type: 7, value: t, lineNumber: this.lineNumber, lineStart: this.lineStart, start: e, end: this.index }; }; Scanner.prototype.scanHexLiteral = function (e) { var t = ""; while (!this.eof()) {
                    if (!i.Character.isHexDigit(this.source.charCodeAt(this.index))) {
                        break;
                    }
                    t += this.source[this.index++];
                } if (t.length === 0) {
                    this.throwUnexpectedToken();
                } if (i.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
                    this.throwUnexpectedToken();
                } return { type: 6, value: parseInt("0x" + t, 16), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e, end: this.index }; }; Scanner.prototype.scanBinaryLiteral = function (e) { var t = ""; var r; while (!this.eof()) {
                    r = this.source[this.index];
                    if (r !== "0" && r !== "1") {
                        break;
                    }
                    t += this.source[this.index++];
                } if (t.length === 0) {
                    this.throwUnexpectedToken();
                } if (!this.eof()) {
                    r = this.source.charCodeAt(this.index);
                    if (i.Character.isIdentifierStart(r) || i.Character.isDecimalDigit(r)) {
                        this.throwUnexpectedToken();
                    }
                } return { type: 6, value: parseInt(t, 2), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e, end: this.index }; }; Scanner.prototype.scanOctalLiteral = function (e, t) { var r = ""; var s = false; if (i.Character.isOctalDigit(e.charCodeAt(0))) {
                    s = true;
                    r = "0" + this.source[this.index++];
                }
                else {
                    ++this.index;
                } while (!this.eof()) {
                    if (!i.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
                        break;
                    }
                    r += this.source[this.index++];
                } if (!s && r.length === 0) {
                    this.throwUnexpectedToken();
                } if (i.Character.isIdentifierStart(this.source.charCodeAt(this.index)) || i.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                    this.throwUnexpectedToken();
                } return { type: 6, value: parseInt(r, 8), octal: s, lineNumber: this.lineNumber, lineStart: this.lineStart, start: t, end: this.index }; }; Scanner.prototype.isImplicitOctalLiteral = function () { for (var e = this.index + 1; e < this.length; ++e) {
                    var t = this.source[e];
                    if (t === "8" || t === "9") {
                        return false;
                    }
                    if (!i.Character.isOctalDigit(t.charCodeAt(0))) {
                        return true;
                    }
                } return true; }; Scanner.prototype.scanNumericLiteral = function () { var e = this.index; var t = this.source[e]; s.assert(i.Character.isDecimalDigit(t.charCodeAt(0)) || t === ".", "Numeric literal must start with a decimal digit or a decimal point"); var r = ""; if (t !== ".") {
                    r = this.source[this.index++];
                    t = this.source[this.index];
                    if (r === "0") {
                        if (t === "x" || t === "X") {
                            ++this.index;
                            return this.scanHexLiteral(e);
                        }
                        if (t === "b" || t === "B") {
                            ++this.index;
                            return this.scanBinaryLiteral(e);
                        }
                        if (t === "o" || t === "O") {
                            return this.scanOctalLiteral(t, e);
                        }
                        if (t && i.Character.isOctalDigit(t.charCodeAt(0))) {
                            if (this.isImplicitOctalLiteral()) {
                                return this.scanOctalLiteral(t, e);
                            }
                        }
                    }
                    while (i.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                        r += this.source[this.index++];
                    }
                    t = this.source[this.index];
                } if (t === ".") {
                    r += this.source[this.index++];
                    while (i.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                        r += this.source[this.index++];
                    }
                    t = this.source[this.index];
                } if (t === "e" || t === "E") {
                    r += this.source[this.index++];
                    t = this.source[this.index];
                    if (t === "+" || t === "-") {
                        r += this.source[this.index++];
                    }
                    if (i.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                        while (i.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                            r += this.source[this.index++];
                        }
                    }
                    else {
                        this.throwUnexpectedToken();
                    }
                } if (i.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
                    this.throwUnexpectedToken();
                } return { type: 6, value: parseFloat(r), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e, end: this.index }; }; Scanner.prototype.scanStringLiteral = function () { var e = this.index; var t = this.source[e]; s.assert(t === "'" || t === '"', "String literal must starts with a quote"); ++this.index; var r = false; var o = ""; while (!this.eof()) {
                    var a = this.source[this.index++];
                    if (a === t) {
                        t = "";
                        break;
                    }
                    else if (a === "\\") {
                        a = this.source[this.index++];
                        if (!a || !i.Character.isLineTerminator(a.charCodeAt(0))) {
                            switch (a) {
                                case "u":
                                    if (this.source[this.index] === "{") {
                                        ++this.index;
                                        o += this.scanUnicodeCodePointEscape();
                                    }
                                    else {
                                        var u = this.scanHexEscape(a);
                                        if (u === null) {
                                            this.throwUnexpectedToken();
                                        }
                                        o += u;
                                    }
                                    break;
                                case "x":
                                    var c = this.scanHexEscape(a);
                                    if (c === null) {
                                        this.throwUnexpectedToken(n.Messages.InvalidHexEscapeSequence);
                                    }
                                    o += c;
                                    break;
                                case "n":
                                    o += "\n";
                                    break;
                                case "r":
                                    o += "\r";
                                    break;
                                case "t":
                                    o += "\t";
                                    break;
                                case "b":
                                    o += "\b";
                                    break;
                                case "f":
                                    o += "\f";
                                    break;
                                case "v":
                                    o += "\v";
                                    break;
                                case "8":
                                case "9":
                                    o += a;
                                    this.tolerateUnexpectedToken();
                                    break;
                                default:
                                    if (a && i.Character.isOctalDigit(a.charCodeAt(0))) {
                                        var l = this.octalToDecimal(a);
                                        r = l.octal || r;
                                        o += String.fromCharCode(l.code);
                                    }
                                    else {
                                        o += a;
                                    }
                                    break;
                            }
                        }
                        else {
                            ++this.lineNumber;
                            if (a === "\r" && this.source[this.index] === "\n") {
                                ++this.index;
                            }
                            this.lineStart = this.index;
                        }
                    }
                    else if (i.Character.isLineTerminator(a.charCodeAt(0))) {
                        break;
                    }
                    else {
                        o += a;
                    }
                } if (t !== "") {
                    this.index = e;
                    this.throwUnexpectedToken();
                } return { type: 8, value: o, octal: r, lineNumber: this.lineNumber, lineStart: this.lineStart, start: e, end: this.index }; }; Scanner.prototype.scanTemplate = function () { var e = ""; var t = false; var r = this.index; var s = this.source[r] === "`"; var o = false; var a = 2; ++this.index; while (!this.eof()) {
                    var u = this.source[this.index++];
                    if (u === "`") {
                        a = 1;
                        o = true;
                        t = true;
                        break;
                    }
                    else if (u === "$") {
                        if (this.source[this.index] === "{") {
                            this.curlyStack.push("${");
                            ++this.index;
                            t = true;
                            break;
                        }
                        e += u;
                    }
                    else if (u === "\\") {
                        u = this.source[this.index++];
                        if (!i.Character.isLineTerminator(u.charCodeAt(0))) {
                            switch (u) {
                                case "n":
                                    e += "\n";
                                    break;
                                case "r":
                                    e += "\r";
                                    break;
                                case "t":
                                    e += "\t";
                                    break;
                                case "u":
                                    if (this.source[this.index] === "{") {
                                        ++this.index;
                                        e += this.scanUnicodeCodePointEscape();
                                    }
                                    else {
                                        var c = this.index;
                                        var l = this.scanHexEscape(u);
                                        if (l !== null) {
                                            e += l;
                                        }
                                        else {
                                            this.index = c;
                                            e += u;
                                        }
                                    }
                                    break;
                                case "x":
                                    var p = this.scanHexEscape(u);
                                    if (p === null) {
                                        this.throwUnexpectedToken(n.Messages.InvalidHexEscapeSequence);
                                    }
                                    e += p;
                                    break;
                                case "b":
                                    e += "\b";
                                    break;
                                case "f":
                                    e += "\f";
                                    break;
                                case "v":
                                    e += "\v";
                                    break;
                                default:
                                    if (u === "0") {
                                        if (i.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                                            this.throwUnexpectedToken(n.Messages.TemplateOctalLiteral);
                                        }
                                        e += "\0";
                                    }
                                    else if (i.Character.isOctalDigit(u.charCodeAt(0))) {
                                        this.throwUnexpectedToken(n.Messages.TemplateOctalLiteral);
                                    }
                                    else {
                                        e += u;
                                    }
                                    break;
                            }
                        }
                        else {
                            ++this.lineNumber;
                            if (u === "\r" && this.source[this.index] === "\n") {
                                ++this.index;
                            }
                            this.lineStart = this.index;
                        }
                    }
                    else if (i.Character.isLineTerminator(u.charCodeAt(0))) {
                        ++this.lineNumber;
                        if (u === "\r" && this.source[this.index] === "\n") {
                            ++this.index;
                        }
                        this.lineStart = this.index;
                        e += "\n";
                    }
                    else {
                        e += u;
                    }
                } if (!t) {
                    this.throwUnexpectedToken();
                } if (!s) {
                    this.curlyStack.pop();
                } return { type: 10, value: this.source.slice(r + 1, this.index - a), cooked: e, head: s, tail: o, lineNumber: this.lineNumber, lineStart: this.lineStart, start: r, end: this.index }; }; Scanner.prototype.testRegExp = function (e, t) { var r = "￿"; var s = e; var i = this; if (t.indexOf("u") >= 0) {
                    s = s.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, (function (e, t, s) { var o = parseInt(t || s, 16); if (o > 1114111) {
                        i.throwUnexpectedToken(n.Messages.InvalidRegExp);
                    } if (o <= 65535) {
                        return String.fromCharCode(o);
                    } return r; })).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, r);
                } try {
                    RegExp(s);
                }
                catch (e) {
                    this.throwUnexpectedToken(n.Messages.InvalidRegExp);
                } try {
                    return new RegExp(e, t);
                }
                catch (e) {
                    return null;
                } }; Scanner.prototype.scanRegExpBody = function () { var e = this.source[this.index]; s.assert(e === "/", "Regular expression literal must start with a slash"); var t = this.source[this.index++]; var r = false; var o = false; while (!this.eof()) {
                    e = this.source[this.index++];
                    t += e;
                    if (e === "\\") {
                        e = this.source[this.index++];
                        if (i.Character.isLineTerminator(e.charCodeAt(0))) {
                            this.throwUnexpectedToken(n.Messages.UnterminatedRegExp);
                        }
                        t += e;
                    }
                    else if (i.Character.isLineTerminator(e.charCodeAt(0))) {
                        this.throwUnexpectedToken(n.Messages.UnterminatedRegExp);
                    }
                    else if (r) {
                        if (e === "]") {
                            r = false;
                        }
                    }
                    else {
                        if (e === "/") {
                            o = true;
                            break;
                        }
                        else if (e === "[") {
                            r = true;
                        }
                    }
                } if (!o) {
                    this.throwUnexpectedToken(n.Messages.UnterminatedRegExp);
                } return t.substr(1, t.length - 2); }; Scanner.prototype.scanRegExpFlags = function () { var e = ""; var t = ""; while (!this.eof()) {
                    var r = this.source[this.index];
                    if (!i.Character.isIdentifierPart(r.charCodeAt(0))) {
                        break;
                    }
                    ++this.index;
                    if (r === "\\" && !this.eof()) {
                        r = this.source[this.index];
                        if (r === "u") {
                            ++this.index;
                            var s = this.index;
                            var n = this.scanHexEscape("u");
                            if (n !== null) {
                                t += n;
                                for (e += "\\u"; s < this.index; ++s) {
                                    e += this.source[s];
                                }
                            }
                            else {
                                this.index = s;
                                t += "u";
                                e += "\\u";
                            }
                            this.tolerateUnexpectedToken();
                        }
                        else {
                            e += "\\";
                            this.tolerateUnexpectedToken();
                        }
                    }
                    else {
                        t += r;
                        e += r;
                    }
                } return t; }; Scanner.prototype.scanRegExp = function () { var e = this.index; var t = this.scanRegExpBody(); var r = this.scanRegExpFlags(); var s = this.testRegExp(t, r); return { type: 9, value: "", pattern: t, flags: r, regex: s, lineNumber: this.lineNumber, lineStart: this.lineStart, start: e, end: this.index }; }; Scanner.prototype.lex = function () { if (this.eof()) {
                    return { type: 2, value: "", lineNumber: this.lineNumber, lineStart: this.lineStart, start: this.index, end: this.index };
                } var e = this.source.charCodeAt(this.index); if (i.Character.isIdentifierStart(e)) {
                    return this.scanIdentifier();
                } if (e === 40 || e === 41 || e === 59) {
                    return this.scanPunctuator();
                } if (e === 39 || e === 34) {
                    return this.scanStringLiteral();
                } if (e === 46) {
                    if (i.Character.isDecimalDigit(this.source.charCodeAt(this.index + 1))) {
                        return this.scanNumericLiteral();
                    }
                    return this.scanPunctuator();
                } if (i.Character.isDecimalDigit(e)) {
                    return this.scanNumericLiteral();
                } if (e === 96 || e === 125 && this.curlyStack[this.curlyStack.length - 1] === "${") {
                    return this.scanTemplate();
                } if (e >= 55296 && e < 57343) {
                    if (i.Character.isIdentifierStart(this.codePointAt(this.index))) {
                        return this.scanIdentifier();
                    }
                } return this.scanPunctuator(); }; return Scanner; }();
                t.Scanner = o;
            }, function (e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true });
                t.TokenName = {};
                t.TokenName[1] = "Boolean";
                t.TokenName[2] = "<end>";
                t.TokenName[3] = "Identifier";
                t.TokenName[4] = "Keyword";
                t.TokenName[5] = "Null";
                t.TokenName[6] = "Numeric";
                t.TokenName[7] = "Punctuator";
                t.TokenName[8] = "String";
                t.TokenName[9] = "RegularExpression";
                t.TokenName[10] = "Template";
            }, function (e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true });
                t.XHTMLEntities = { quot: '"', amp: "&", apos: "'", gt: ">", nbsp: " ", iexcl: "¡", cent: "¢", pound: "£", curren: "¤", yen: "¥", brvbar: "¦", sect: "§", uml: "¨", copy: "©", ordf: "ª", laquo: "«", not: "¬", shy: "­", reg: "®", macr: "¯", deg: "°", plusmn: "±", sup2: "²", sup3: "³", acute: "´", micro: "µ", para: "¶", middot: "·", cedil: "¸", sup1: "¹", ordm: "º", raquo: "»", frac14: "¼", frac12: "½", frac34: "¾", iquest: "¿", Agrave: "À", Aacute: "Á", Acirc: "Â", Atilde: "Ã", Auml: "Ä", Aring: "Å", AElig: "Æ", Ccedil: "Ç", Egrave: "È", Eacute: "É", Ecirc: "Ê", Euml: "Ë", Igrave: "Ì", Iacute: "Í", Icirc: "Î", Iuml: "Ï", ETH: "Ð", Ntilde: "Ñ", Ograve: "Ò", Oacute: "Ó", Ocirc: "Ô", Otilde: "Õ", Ouml: "Ö", times: "×", Oslash: "Ø", Ugrave: "Ù", Uacute: "Ú", Ucirc: "Û", Uuml: "Ü", Yacute: "Ý", THORN: "Þ", szlig: "ß", agrave: "à", aacute: "á", acirc: "â", atilde: "ã", auml: "ä", aring: "å", aelig: "æ", ccedil: "ç", egrave: "è", eacute: "é", ecirc: "ê", euml: "ë", igrave: "ì", iacute: "í", icirc: "î", iuml: "ï", eth: "ð", ntilde: "ñ", ograve: "ò", oacute: "ó", ocirc: "ô", otilde: "õ", ouml: "ö", divide: "÷", oslash: "ø", ugrave: "ù", uacute: "ú", ucirc: "û", uuml: "ü", yacute: "ý", thorn: "þ", yuml: "ÿ", OElig: "Œ", oelig: "œ", Scaron: "Š", scaron: "š", Yuml: "Ÿ", fnof: "ƒ", circ: "ˆ", tilde: "˜", Alpha: "Α", Beta: "Β", Gamma: "Γ", Delta: "Δ", Epsilon: "Ε", Zeta: "Ζ", Eta: "Η", Theta: "Θ", Iota: "Ι", Kappa: "Κ", Lambda: "Λ", Mu: "Μ", Nu: "Ν", Xi: "Ξ", Omicron: "Ο", Pi: "Π", Rho: "Ρ", Sigma: "Σ", Tau: "Τ", Upsilon: "Υ", Phi: "Φ", Chi: "Χ", Psi: "Ψ", Omega: "Ω", alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", zeta: "ζ", eta: "η", theta: "θ", iota: "ι", kappa: "κ", lambda: "λ", mu: "μ", nu: "ν", xi: "ξ", omicron: "ο", pi: "π", rho: "ρ", sigmaf: "ς", sigma: "σ", tau: "τ", upsilon: "υ", phi: "φ", chi: "χ", psi: "ψ", omega: "ω", thetasym: "ϑ", upsih: "ϒ", piv: "ϖ", ensp: " ", emsp: " ", thinsp: " ", zwnj: "‌", zwj: "‍", lrm: "‎", rlm: "‏", ndash: "–", mdash: "—", lsquo: "‘", rsquo: "’", sbquo: "‚", ldquo: "“", rdquo: "”", bdquo: "„", dagger: "†", Dagger: "‡", bull: "•", hellip: "…", permil: "‰", prime: "′", Prime: "″", lsaquo: "‹", rsaquo: "›", oline: "‾", frasl: "⁄", euro: "€", image: "ℑ", weierp: "℘", real: "ℜ", trade: "™", alefsym: "ℵ", larr: "←", uarr: "↑", rarr: "→", darr: "↓", harr: "↔", crarr: "↵", lArr: "⇐", uArr: "⇑", rArr: "⇒", dArr: "⇓", hArr: "⇔", forall: "∀", part: "∂", exist: "∃", empty: "∅", nabla: "∇", isin: "∈", notin: "∉", ni: "∋", prod: "∏", sum: "∑", minus: "−", lowast: "∗", radic: "√", prop: "∝", infin: "∞", ang: "∠", and: "∧", or: "∨", cap: "∩", cup: "∪", int: "∫", there4: "∴", sim: "∼", cong: "≅", asymp: "≈", ne: "≠", equiv: "≡", le: "≤", ge: "≥", sub: "⊂", sup: "⊃", nsub: "⊄", sube: "⊆", supe: "⊇", oplus: "⊕", otimes: "⊗", perp: "⊥", sdot: "⋅", lceil: "⌈", rceil: "⌉", lfloor: "⌊", rfloor: "⌋", loz: "◊", spades: "♠", clubs: "♣", hearts: "♥", diams: "♦", lang: "⟨", rang: "⟩" };
            }, function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true });
                var s = r(10);
                var i = r(12);
                var n = r(13);
                var o = function () { function Reader() { this.values = []; this.curly = this.paren = -1; } Reader.prototype.beforeFunctionExpression = function (e) { return ["(", "{", "[", "in", "typeof", "instanceof", "new", "return", "case", "delete", "throw", "void", "=", "+=", "-=", "*=", "**=", "/=", "%=", "<<=", ">>=", ">>>=", "&=", "|=", "^=", ",", "+", "-", "*", "**", "/", "%", "++", "--", "<<", ">>", ">>>", "&", "|", "^", "!", "~", "&&", "||", "?", ":", "===", "==", ">=", "<=", "<", ">", "!=", "!=="].indexOf(e) >= 0; }; Reader.prototype.isRegexStart = function () { var e = this.values[this.values.length - 1]; var t = e !== null; switch (e) {
                    case "this":
                    case "]":
                        t = false;
                        break;
                    case ")":
                        var r = this.values[this.paren - 1];
                        t = r === "if" || r === "while" || r === "for" || r === "with";
                        break;
                    case "}":
                        t = false;
                        if (this.values[this.curly - 3] === "function") {
                            var s = this.values[this.curly - 4];
                            t = s ? !this.beforeFunctionExpression(s) : false;
                        }
                        else if (this.values[this.curly - 4] === "function") {
                            var s = this.values[this.curly - 5];
                            t = s ? !this.beforeFunctionExpression(s) : true;
                        }
                        break;
                    default: break;
                } return t; }; Reader.prototype.push = function (e) { if (e.type === 7 || e.type === 4) {
                    if (e.value === "{") {
                        this.curly = this.values.length;
                    }
                    else if (e.value === "(") {
                        this.paren = this.values.length;
                    }
                    this.values.push(e.value);
                }
                else {
                    this.values.push(null);
                } }; return Reader; }();
                var a = function () { function Tokenizer(e, t) { this.errorHandler = new s.ErrorHandler; this.errorHandler.tolerant = t ? typeof t.tolerant === "boolean" && t.tolerant : false; this.scanner = new i.Scanner(e, this.errorHandler); this.scanner.trackComment = t ? typeof t.comment === "boolean" && t.comment : false; this.trackRange = t ? typeof t.range === "boolean" && t.range : false; this.trackLoc = t ? typeof t.loc === "boolean" && t.loc : false; this.buffer = []; this.reader = new o; } Tokenizer.prototype.errors = function () { return this.errorHandler.errors; }; Tokenizer.prototype.getNextToken = function () { if (this.buffer.length === 0) {
                    var e = this.scanner.scanComments();
                    if (this.scanner.trackComment) {
                        for (var t = 0; t < e.length; ++t) {
                            var r = e[t];
                            var s = this.scanner.source.slice(r.slice[0], r.slice[1]);
                            var i = { type: r.multiLine ? "BlockComment" : "LineComment", value: s };
                            if (this.trackRange) {
                                i.range = r.range;
                            }
                            if (this.trackLoc) {
                                i.loc = r.loc;
                            }
                            this.buffer.push(i);
                        }
                    }
                    if (!this.scanner.eof()) {
                        var o = void 0;
                        if (this.trackLoc) {
                            o = { start: { line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart }, end: {} };
                        }
                        var a = this.scanner.source[this.scanner.index] === "/" && this.reader.isRegexStart();
                        var u = a ? this.scanner.scanRegExp() : this.scanner.lex();
                        this.reader.push(u);
                        var c = { type: n.TokenName[u.type], value: this.scanner.source.slice(u.start, u.end) };
                        if (this.trackRange) {
                            c.range = [u.start, u.end];
                        }
                        if (this.trackLoc) {
                            o.end = { line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart };
                            c.loc = o;
                        }
                        if (u.type === 9) {
                            var l = u.pattern;
                            var p = u.flags;
                            c.regex = { pattern: l, flags: p };
                        }
                        this.buffer.push(c);
                    }
                } return this.buffer.shift(); }; return Tokenizer; }();
                t.Tokenizer = a;
            }]); })); }, 734: function (e, t, r) { var s = r(522); var i = { codeblock: { startString: "## Strings\n```diff", endString: "```", addedHeader: "\n# Added\n", updatedHeader: "\n# Updated\n", removedHeader: "\n# Removed\n", added: function (e) { return "+ " + e[0] + ": " + e[1] + "\n"; }, updated: function (e) { return "- " + e[0] + ": " + e[1] + "\n+ " + e[0] + ": " + e[2] + "\n"; }, removed: function (e) { return "- " + e[0] + ": " + e[1] + "\n"; } }, inline: { startString: "## Strings\n", endString: "", addedHeader: "### Added\n", updatedHeader: "### Updated\n", removedHeader: "### Removed\n", added: function (e) { return " - `" + e[0] + "`: `" + e[1] + "`\n"; }, updated: function (e) { return " - `" + e[0] + "`: `" + e[1] + "` -> `" + e[2] + "`\n"; }, removed: function (e) { return " - `" + e[0] + "`: `" + e[1] + "`\n"; } } }; var n; function doWork(e, t, r) { var i = [s(e), s(t)]; var _a = diff(i), o = _a.addedStrings, a = _a.updatedStrings, u = _a.removedStrings; n = r; var c = buildString(o, a, u); return c; } function diff(e) { var t = []; var r = []; var s = []; for (var _i = 0, _a = Object.keys(e[0]); _i < _a.length; _i++) {
            var s_10 = _a[_i];
            if (e[1][s_10]) {
                if (e[0][s_10] !== e[1][s_10]) {
                    r.push([s_10, e[0][s_10], e[1][s_10]]);
                }
            }
            else {
                t.push([s_10, e[0][s_10]]);
            }
        } for (var _b = 0, _c = Object.keys(e[1]); _b < _c.length; _b++) {
            var t_12 = _c[_b];
            if (!e[0][t_12]) {
                s.push([t_12, e[1][t_12]]);
            }
        } return { addedStrings: s, updatedStrings: r, removedStrings: t }; } function buildString(e, t, r) { var s = ""; if (e[0] || t[0] || r[0]) {
            s += i[n].startString;
            if (e[0]) {
                s += i[n].addedHeader;
                s += buildDiffString(e, "added");
            }
            if (t[0]) {
                s += i[n].updatedHeader;
                s += buildDiffString(t, "updated");
            }
            if (r[0]) {
                s += i[n].removedHeader;
                s += buildDiffString(r, "removed");
            }
            s += i[n].endString;
        } return s; } function buildDiffString(e, t) { var r = ""; e.forEach((function (e) { r += i[n][t](e); })); return r; } e.exports = doWork; }, 522: function (e, t, r) { var s = r(90); e.exports = getLangStrings; function getLangStrings(e) { var t = s.parse(e).body[0].expression.arguments[0].elements; var r = {}; t.forEach((function (e) { var _a; (_a = e === null || e === void 0 ? void 0 : e.properties) === null || _a === void 0 ? void 0 : _a.forEach((function (e) { var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x; if (((_h = (_g = (_f = (_e = (_d = (_c = (_b = (_a = e === null || e === void 0 ? void 0 : e.value) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.body) === null || _c === void 0 ? void 0 : _c[1]) === null || _d === void 0 ? void 0 : _d.expression) === null || _e === void 0 ? void 0 : _e.right) === null || _f === void 0 ? void 0 : _f.callee) === null || _g === void 0 ? void 0 : _g.object) === null || _h === void 0 ? void 0 : _h.name) === "Object" && ((_r = (_q = (_p = (_o = (_m = (_l = (_k = (_j = e === null || e === void 0 ? void 0 : e.value) === null || _j === void 0 ? void 0 : _j.body) === null || _k === void 0 ? void 0 : _k.body) === null || _l === void 0 ? void 0 : _l[1]) === null || _m === void 0 ? void 0 : _m.expression) === null || _o === void 0 ? void 0 : _o.right) === null || _p === void 0 ? void 0 : _p.callee) === null || _q === void 0 ? void 0 : _q.property) === null || _r === void 0 ? void 0 : _r.name) === "freeze" && ((_x = (_w = (_v = (_u = (_t = (_s = e === null || e === void 0 ? void 0 : e.value) === null || _s === void 0 ? void 0 : _s.body) === null || _t === void 0 ? void 0 : _t.body) === null || _u === void 0 ? void 0 : _u[1]) === null || _v === void 0 ? void 0 : _v.expression) === null || _w === void 0 ? void 0 : _w.right) === null || _x === void 0 ? void 0 : _x.arguments[0])) {
            if (e.value.body.body[1].expression.right.arguments[0].properties.some((function (e) { if (e.key.name === "DISCORD_NAME" || e.key.name === "TEAL") {
                return true;
            } }))) {
                e.value.body.body[1].expression.right.arguments[0].properties.forEach((function (e) { r[e.key.name] = e.value.raw; }));
            }
        } })); })); return r; } }, 597: function (e) {
            "use strict";
            /*!
             * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
             *
             * Copyright (c) 2014-2017, Jon Schlinkert.
             * Released under the MIT License.
             */ function isObject(e) { return Object.prototype.toString.call(e) === "[object Object]"; }
            function isPlainObject(e) { var t, r; if (isObject(e) === false)
                return false; t = e.constructor; if (t === undefined)
                return true; r = t.prototype; if (isObject(r) === false)
                return false; if (r.hasOwnProperty("isPrototypeOf") === false) {
                return false;
            } return true; }
            e.exports = isPlainObject;
        }, 893: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            /*!
             * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
             *
             * Copyright (c) 2014-2017, Jon Schlinkert.
             * Released under the MIT License.
             */ function isObject(e) { return Object.prototype.toString.call(e) === "[object Object]"; }
            function isPlainObject(e) { var t, r; if (isObject(e) === false)
                return false; t = e.constructor; if (t === undefined)
                return true; r = t.prototype; if (isObject(r) === false)
                return false; if (r.hasOwnProperty("isPrototypeOf") === false) {
                return false;
            } return true; }
            t.isPlainObject = isPlainObject;
        }, 351: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            function _interopDefault(e) { return e && typeof e === "object" && "default" in e ? e["default"] : e; }
            var s = _interopDefault(r(413));
            var i = _interopDefault(r(605));
            var n = _interopDefault(r(835));
            var o = _interopDefault(r(211));
            var a = _interopDefault(r(761));
            var u = s.Readable;
            var c = Symbol("buffer");
            var l = Symbol("type");
            var Blob = /** @class */ (function () {
                function Blob() {
                    this[l] = "";
                    var e = arguments[0];
                    var t = arguments[1];
                    var r = [];
                    var s = 0;
                    if (e) {
                        var t_13 = e;
                        var i_6 = Number(t_13.length);
                        for (var e_18 = 0; e_18 < i_6; e_18++) {
                            var i_7 = t_13[e_18];
                            var n_3 = void 0;
                            if (i_7 instanceof Buffer) {
                                n_3 = i_7;
                            }
                            else if (ArrayBuffer.isView(i_7)) {
                                n_3 = Buffer.from(i_7.buffer, i_7.byteOffset, i_7.byteLength);
                            }
                            else if (i_7 instanceof ArrayBuffer) {
                                n_3 = Buffer.from(i_7);
                            }
                            else if (i_7 instanceof Blob) {
                                n_3 = i_7[c];
                            }
                            else {
                                n_3 = Buffer.from(typeof i_7 === "string" ? i_7 : String(i_7));
                            }
                            s += n_3.length;
                            r.push(n_3);
                        }
                    }
                    this[c] = Buffer.concat(r);
                    var i = t && t.type !== undefined && String(t.type).toLowerCase();
                    if (i && !/[^\u0020-\u007E]/.test(i)) {
                        this[l] = i;
                    }
                }
                Object.defineProperty(Blob.prototype, "size", {
                    get: function () { return this[c].length; },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Blob.prototype, "type", {
                    get: function () { return this[l]; },
                    enumerable: false,
                    configurable: true
                });
                Blob.prototype.text = function () { return Promise.resolve(this[c].toString()); };
                Blob.prototype.arrayBuffer = function () { var e = this[c]; var t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength); return Promise.resolve(t); };
                Blob.prototype.stream = function () { var e = new u; e._read = function () { }; e.push(this[c]); e.push(null); return e; };
                Blob.prototype.toString = function () { return "[object Blob]"; };
                Blob.prototype.slice = function () { var e = this.size; var t = arguments[0]; var r = arguments[1]; var s, i; if (t === undefined) {
                    s = 0;
                }
                else if (t < 0) {
                    s = Math.max(e + t, 0);
                }
                else {
                    s = Math.min(t, e);
                } if (r === undefined) {
                    i = e;
                }
                else if (r < 0) {
                    i = Math.max(e + r, 0);
                }
                else {
                    i = Math.min(r, e);
                } var n = Math.max(i - s, 0); var o = this[c]; var a = o.slice(s, s + n); var u = new Blob([], { type: arguments[2] }); u[c] = a; return u; };
                return Blob;
            }());
            Object.defineProperties(Blob.prototype, { size: { enumerable: true }, type: { enumerable: true }, slice: { enumerable: true } });
            Object.defineProperty(Blob.prototype, Symbol.toStringTag, { value: "Blob", writable: false, enumerable: false, configurable: true });
            function FetchError(e, t, r) { Error.call(this, e); this.message = e; this.type = t; if (r) {
                this.code = this.errno = r.code;
            } Error.captureStackTrace(this, this.constructor); }
            FetchError.prototype = Object.create(Error.prototype);
            FetchError.prototype.constructor = FetchError;
            FetchError.prototype.name = "FetchError";
            var p;
            try {
                p = r(710).convert;
            }
            catch (e) { }
            var h = Symbol("Body internals");
            var d = s.PassThrough;
            function Body(e) { var t = this; var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, i = r.size; var n = i === undefined ? 0 : i; var o = r.timeout; var a = o === undefined ? 0 : o; if (e == null) {
                e = null;
            }
            else if (isURLSearchParams(e)) {
                e = Buffer.from(e.toString());
            }
            else if (isBlob(e))
                ;
            else if (Buffer.isBuffer(e))
                ;
            else if (Object.prototype.toString.call(e) === "[object ArrayBuffer]") {
                e = Buffer.from(e);
            }
            else if (ArrayBuffer.isView(e)) {
                e = Buffer.from(e.buffer, e.byteOffset, e.byteLength);
            }
            else if (e instanceof s)
                ;
            else {
                e = Buffer.from(String(e));
            } this[h] = { body: e, disturbed: false, error: null }; this.size = n; this.timeout = a; if (e instanceof s) {
                e.on("error", (function (e) { var r = e.name === "AbortError" ? e : new FetchError("Invalid response body while trying to fetch " + t.url + ": " + e.message, "system", e); t[h].error = r; }));
            } }
            Body.prototype = { get body() { return this[h].body; }, get bodyUsed() { return this[h].disturbed; }, arrayBuffer: function () { return consumeBody.call(this).then((function (e) { return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength); })); }, blob: function () { var e = this.headers && this.headers.get("content-type") || ""; return consumeBody.call(this).then((function (t) {
                    var _a;
                    return Object.assign(new Blob([], { type: e.toLowerCase() }), (_a = {}, _a[c] = t, _a));
                })); }, json: function () { var e = this; return consumeBody.call(this).then((function (t) { try {
                    return JSON.parse(t.toString());
                }
                catch (t) {
                    return Body.Promise.reject(new FetchError("invalid json response body at " + e.url + " reason: " + t.message, "invalid-json"));
                } })); }, text: function () { return consumeBody.call(this).then((function (e) { return e.toString(); })); }, buffer: function () { return consumeBody.call(this); }, textConverted: function () { var e = this; return consumeBody.call(this).then((function (t) { return convertBody(t, e.headers); })); } };
            Object.defineProperties(Body.prototype, { body: { enumerable: true }, bodyUsed: { enumerable: true }, arrayBuffer: { enumerable: true }, blob: { enumerable: true }, json: { enumerable: true }, text: { enumerable: true } });
            Body.mixIn = function (e) { for (var _i = 0, _a = Object.getOwnPropertyNames(Body.prototype); _i < _a.length; _i++) {
                var t_14 = _a[_i];
                if (!(t_14 in e)) {
                    var r_5 = Object.getOwnPropertyDescriptor(Body.prototype, t_14);
                    Object.defineProperty(e, t_14, r_5);
                }
            } };
            function consumeBody() { var e = this; if (this[h].disturbed) {
                return Body.Promise.reject(new TypeError("body used already for: " + this.url));
            } this[h].disturbed = true; if (this[h].error) {
                return Body.Promise.reject(this[h].error);
            } var t = this.body; if (t === null) {
                return Body.Promise.resolve(Buffer.alloc(0));
            } if (isBlob(t)) {
                t = t.stream();
            } if (Buffer.isBuffer(t)) {
                return Body.Promise.resolve(t);
            } if (!(t instanceof s)) {
                return Body.Promise.resolve(Buffer.alloc(0));
            } var r = []; var i = 0; var n = false; return new Body.Promise((function (s, o) { var a; if (e.timeout) {
                a = setTimeout((function () { n = true; o(new FetchError("Response timeout while trying to fetch " + e.url + " (over " + e.timeout + "ms)", "body-timeout")); }), e.timeout);
            } t.on("error", (function (t) { if (t.name === "AbortError") {
                n = true;
                o(t);
            }
            else {
                o(new FetchError("Invalid response body while trying to fetch " + e.url + ": " + t.message, "system", t));
            } })); t.on("data", (function (t) { if (n || t === null) {
                return;
            } if (e.size && i + t.length > e.size) {
                n = true;
                o(new FetchError("content size at " + e.url + " over limit: " + e.size, "max-size"));
                return;
            } i += t.length; r.push(t); })); t.on("end", (function () { if (n) {
                return;
            } clearTimeout(a); try {
                s(Buffer.concat(r, i));
            }
            catch (t) {
                o(new FetchError("Could not create Buffer from response body for " + e.url + ": " + t.message, "system", t));
            } })); })); }
            function convertBody(e, t) { if (typeof p !== "function") {
                throw new Error("The package `encoding` must be installed to use the textConverted() function");
            } var r = t.get("content-type"); var s = "utf-8"; var i, n; if (r) {
                i = /charset=([^;]*)/i.exec(r);
            } n = e.slice(0, 1024).toString(); if (!i && n) {
                i = /<meta.+?charset=(['"])(.+?)\1/i.exec(n);
            } if (!i && n) {
                i = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(n);
                if (!i) {
                    i = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(n);
                    if (i) {
                        i.pop();
                    }
                }
                if (i) {
                    i = /charset=(.*)/i.exec(i.pop());
                }
            } if (!i && n) {
                i = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(n);
            } if (i) {
                s = i.pop();
                if (s === "gb2312" || s === "gbk") {
                    s = "gb18030";
                }
            } return p(e, "UTF-8", s).toString(); }
            function isURLSearchParams(e) { if (typeof e !== "object" || typeof e.append !== "function" || typeof e["delete"] !== "function" || typeof e.get !== "function" || typeof e.getAll !== "function" || typeof e.has !== "function" || typeof e.set !== "function") {
                return false;
            } return e.constructor.name === "URLSearchParams" || Object.prototype.toString.call(e) === "[object URLSearchParams]" || typeof e.sort === "function"; }
            function isBlob(e) { return typeof e === "object" && typeof e.arrayBuffer === "function" && typeof e.type === "string" && typeof e.stream === "function" && typeof e.constructor === "function" && typeof e.constructor.name === "string" && /^(Blob|File)$/.test(e.constructor.name) && /^(Blob|File)$/.test(e[Symbol.toStringTag]); }
            function clone(e) { var t, r; var i = e.body; if (e.bodyUsed) {
                throw new Error("cannot clone body after it is used");
            } if (i instanceof s && typeof i.getBoundary !== "function") {
                t = new d;
                r = new d;
                i.pipe(t);
                i.pipe(r);
                e[h].body = t;
                i = r;
            } return i; }
            function extractContentType(e) { if (e === null) {
                return null;
            }
            else if (typeof e === "string") {
                return "text/plain;charset=UTF-8";
            }
            else if (isURLSearchParams(e)) {
                return "application/x-www-form-urlencoded;charset=UTF-8";
            }
            else if (isBlob(e)) {
                return e.type || null;
            }
            else if (Buffer.isBuffer(e)) {
                return null;
            }
            else if (Object.prototype.toString.call(e) === "[object ArrayBuffer]") {
                return null;
            }
            else if (ArrayBuffer.isView(e)) {
                return null;
            }
            else if (typeof e.getBoundary === "function") {
                return "multipart/form-data;boundary=" + e.getBoundary();
            }
            else if (e instanceof s) {
                return null;
            }
            else {
                return "text/plain;charset=UTF-8";
            } }
            function getTotalBytes(e) { var t = e.body; if (t === null) {
                return 0;
            }
            else if (isBlob(t)) {
                return t.size;
            }
            else if (Buffer.isBuffer(t)) {
                return t.length;
            }
            else if (t && typeof t.getLengthSync === "function") {
                if (t._lengthRetrievers && t._lengthRetrievers.length == 0 || t.hasKnownLength && t.hasKnownLength()) {
                    return t.getLengthSync();
                }
                return null;
            }
            else {
                return null;
            } }
            function writeToStream(e, t) { var r = t.body; if (r === null) {
                e.end();
            }
            else if (isBlob(r)) {
                r.stream().pipe(e);
            }
            else if (Buffer.isBuffer(r)) {
                e.write(r);
                e.end();
            }
            else {
                r.pipe(e);
            } }
            Body.Promise = global.Promise;
            var m = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
            var g = /[^\t\x20-\x7e\x80-\xff]/;
            function validateName(e) { e = "" + e; if (m.test(e) || e === "") {
                throw new TypeError(e + " is not a legal HTTP header name");
            } }
            function validateValue(e) { e = "" + e; if (g.test(e)) {
                throw new TypeError(e + " is not a legal HTTP header value");
            } }
            function find(e, t) { t = t.toLowerCase(); for (var r_6 in e) {
                if (r_6.toLowerCase() === t) {
                    return r_6;
                }
            } return undefined; }
            var E = Symbol("map");
            var Headers = /** @class */ (function () {
                function Headers() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
                    this[E] = Object.create(null);
                    if (e instanceof Headers) {
                        var t_15 = e.raw();
                        var r_9 = Object.keys(t_15);
                        for (var _i = 0, r_7 = r_9; _i < r_7.length; _i++) {
                            var e_20 = r_7[_i];
                            for (var _a = 0, _b = t_15[e_20]; _a < _b.length; _a++) {
                                var r_10 = _b[_a];
                                this.append(e_20, r_10);
                            }
                        }
                        return;
                    }
                    if (e == null)
                        ;
                    else if (typeof e === "object") {
                        var t_16 = e[Symbol.iterator];
                        if (t_16 != null) {
                            if (typeof t_16 !== "function") {
                                throw new TypeError("Header pairs must be iterable");
                            }
                            var r_11 = [];
                            for (var _c = 0, e_19 = e; _c < e_19.length; _c++) {
                                var t_17 = e_19[_c];
                                if (typeof t_17 !== "object" || typeof t_17[Symbol.iterator] !== "function") {
                                    throw new TypeError("Each header pair must be iterable");
                                }
                                r_11.push(Array.from(t_17));
                            }
                            for (var _d = 0, r_8 = r_11; _d < r_8.length; _d++) {
                                var e_21 = r_8[_d];
                                if (e_21.length !== 2) {
                                    throw new TypeError("Each header pair must be a name/value tuple");
                                }
                                this.append(e_21[0], e_21[1]);
                            }
                        }
                        else {
                            for (var _e = 0, _f = Object.keys(e); _e < _f.length; _e++) {
                                var t_18 = _f[_e];
                                var r_12 = e[t_18];
                                this.append(t_18, r_12);
                            }
                        }
                    }
                    else {
                        throw new TypeError("Provided initializer must be an object");
                    }
                }
                Headers.prototype.get = function (e) { e = "" + e; validateName(e); var t = find(this[E], e); if (t === undefined) {
                    return null;
                } return this[E][t].join(", "); };
                Headers.prototype.forEach = function (e) { var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined; var r = getHeaders(this); var s = 0; while (s < r.length) {
                    var i = r[s];
                    var n_4 = i[0], o_4 = i[1];
                    e.call(t, o_4, n_4, this);
                    r = getHeaders(this);
                    s++;
                } };
                Headers.prototype.set = function (e, t) { e = "" + e; t = "" + t; validateName(e); validateValue(t); var r = find(this[E], e); this[E][r !== undefined ? r : e] = [t]; };
                Headers.prototype.append = function (e, t) { e = "" + e; t = "" + t; validateName(e); validateValue(t); var r = find(this[E], e); if (r !== undefined) {
                    this[E][r].push(t);
                }
                else {
                    this[E][e] = [t];
                } };
                Headers.prototype.has = function (e) { e = "" + e; validateName(e); return find(this[E], e) !== undefined; };
                Headers.prototype["delete"] = function (e) { e = "" + e; validateName(e); var t = find(this[E], e); if (t !== undefined) {
                    delete this[E][t];
                } };
                Headers.prototype.raw = function () { return this[E]; };
                Headers.prototype.keys = function () { return createHeadersIterator(this, "key"); };
                Headers.prototype.values = function () { return createHeadersIterator(this, "value"); };
                Headers.prototype[Symbol.iterator] = function () { return createHeadersIterator(this, "key+value"); };
                return Headers;
            }());
            Headers.prototype.entries = Headers.prototype[Symbol.iterator];
            Object.defineProperty(Headers.prototype, Symbol.toStringTag, { value: "Headers", writable: false, enumerable: false, configurable: true });
            Object.defineProperties(Headers.prototype, { get: { enumerable: true }, forEach: { enumerable: true }, set: { enumerable: true }, append: { enumerable: true }, has: { enumerable: true }, "delete": { enumerable: true }, keys: { enumerable: true }, values: { enumerable: true }, entries: { enumerable: true } });
            function getHeaders(e) { var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "key+value"; var r = Object.keys(e[E]).sort(); return r.map(t === "key" ? function (e) { return e.toLowerCase(); } : t === "value" ? function (t) { return e[E][t].join(", "); } : function (t) { return [t.toLowerCase(), e[E][t].join(", ")]; }); }
            var v = Symbol("internal");
            function createHeadersIterator(e, t) { var r = Object.create(y); r[v] = { target: e, kind: t, index: 0 }; return r; }
            var y = Object.setPrototypeOf({ next: function () { if (!this || Object.getPrototypeOf(this) !== y) {
                    throw new TypeError("Value of `this` is not a HeadersIterator");
                } var e = this[v]; var t = e.target, r = e.kind, s = e.index; var i = getHeaders(t, r); var n = i.length; if (s >= n) {
                    return { value: undefined, done: true };
                } this[v].index = s + 1; return { value: i[s], done: false }; } }, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
            Object.defineProperty(y, Symbol.toStringTag, { value: "HeadersIterator", writable: false, enumerable: false, configurable: true });
            function exportNodeCompatibleHeaders(e) { var t = Object.assign({ __proto__: null }, e[E]); var r = find(e[E], "Host"); if (r !== undefined) {
                t[r] = t[r][0];
            } return t; }
            function createHeadersLenient(e) { var t = new Headers; for (var _i = 0, _a = Object.keys(e); _i < _a.length; _i++) {
                var r_13 = _a[_i];
                if (m.test(r_13)) {
                    continue;
                }
                if (Array.isArray(e[r_13])) {
                    for (var _b = 0, _c = e[r_13]; _b < _c.length; _b++) {
                        var s_11 = _c[_b];
                        if (g.test(s_11)) {
                            continue;
                        }
                        if (t[E][r_13] === undefined) {
                            t[E][r_13] = [s_11];
                        }
                        else {
                            t[E][r_13].push(s_11);
                        }
                    }
                }
                else if (!g.test(e[r_13])) {
                    t[E][r_13] = [e[r_13]];
                }
            } return t; }
            var D = Symbol("Response internals");
            var x = i.STATUS_CODES;
            var Response = /** @class */ (function () {
                function Response() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    Body.call(this, e, t);
                    var r = t.status || 200;
                    var s = new Headers(t.headers);
                    if (e != null && !s.has("Content-Type")) {
                        var t_19 = extractContentType(e);
                        if (t_19) {
                            s.append("Content-Type", t_19);
                        }
                    }
                    this[D] = { url: t.url, status: r, statusText: t.statusText || x[r], headers: s, counter: t.counter };
                }
                Object.defineProperty(Response.prototype, "url", {
                    get: function () { return this[D].url || ""; },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Response.prototype, "status", {
                    get: function () { return this[D].status; },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Response.prototype, "ok", {
                    get: function () { return this[D].status >= 200 && this[D].status < 300; },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Response.prototype, "redirected", {
                    get: function () { return this[D].counter > 0; },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Response.prototype, "statusText", {
                    get: function () { return this[D].statusText; },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Response.prototype, "headers", {
                    get: function () { return this[D].headers; },
                    enumerable: false,
                    configurable: true
                });
                Response.prototype.clone = function () { return new Response(clone(this), { url: this.url, status: this.status, statusText: this.statusText, headers: this.headers, ok: this.ok, redirected: this.redirected }); };
                return Response;
            }());
            Body.mixIn(Response.prototype);
            Object.defineProperties(Response.prototype, { url: { enumerable: true }, status: { enumerable: true }, ok: { enumerable: true }, redirected: { enumerable: true }, statusText: { enumerable: true }, headers: { enumerable: true }, clone: { enumerable: true } });
            Object.defineProperty(Response.prototype, Symbol.toStringTag, { value: "Response", writable: false, enumerable: false, configurable: true });
            var w = Symbol("Request internals");
            var b = n.parse;
            var T = n.format;
            var S = "destroy" in s.Readable.prototype;
            function isRequest(e) { return typeof e === "object" && typeof e[w] === "object"; }
            function isAbortSignal(e) { var t = e && typeof e === "object" && Object.getPrototypeOf(e); return !!(t && t.constructor.name === "AbortSignal"); }
            var Request = /** @class */ (function () {
                function Request(e) {
                    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    var r;
                    if (!isRequest(e)) {
                        if (e && e.href) {
                            r = b(e.href);
                        }
                        else {
                            r = b("" + e);
                        }
                        e = {};
                    }
                    else {
                        r = b(e.url);
                    }
                    var s = t.method || e.method || "GET";
                    s = s.toUpperCase();
                    if ((t.body != null || isRequest(e) && e.body !== null) && (s === "GET" || s === "HEAD")) {
                        throw new TypeError("Request with GET/HEAD method cannot have body");
                    }
                    var i = t.body != null ? t.body : isRequest(e) && e.body !== null ? clone(e) : null;
                    Body.call(this, i, { timeout: t.timeout || e.timeout || 0, size: t.size || e.size || 0 });
                    var n = new Headers(t.headers || e.headers || {});
                    if (i != null && !n.has("Content-Type")) {
                        var e_22 = extractContentType(i);
                        if (e_22) {
                            n.append("Content-Type", e_22);
                        }
                    }
                    var o = isRequest(e) ? e.signal : null;
                    if ("signal" in t)
                        o = t.signal;
                    if (o != null && !isAbortSignal(o)) {
                        throw new TypeError("Expected signal to be an instanceof AbortSignal");
                    }
                    this[w] = { method: s, redirect: t.redirect || e.redirect || "follow", headers: n, parsedURL: r, signal: o };
                    this.follow = t.follow !== undefined ? t.follow : e.follow !== undefined ? e.follow : 20;
                    this.compress = t.compress !== undefined ? t.compress : e.compress !== undefined ? e.compress : true;
                    this.counter = t.counter || e.counter || 0;
                    this.agent = t.agent || e.agent;
                }
                Object.defineProperty(Request.prototype, "method", {
                    get: function () { return this[w].method; },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Request.prototype, "url", {
                    get: function () { return T(this[w].parsedURL); },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Request.prototype, "headers", {
                    get: function () { return this[w].headers; },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Request.prototype, "redirect", {
                    get: function () { return this[w].redirect; },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Request.prototype, "signal", {
                    get: function () { return this[w].signal; },
                    enumerable: false,
                    configurable: true
                });
                Request.prototype.clone = function () { return new Request(this); };
                return Request;
            }());
            Body.mixIn(Request.prototype);
            Object.defineProperty(Request.prototype, Symbol.toStringTag, { value: "Request", writable: false, enumerable: false, configurable: true });
            Object.defineProperties(Request.prototype, { method: { enumerable: true }, url: { enumerable: true }, headers: { enumerable: true }, redirect: { enumerable: true }, clone: { enumerable: true }, signal: { enumerable: true } });
            function getNodeRequestOptions(e) { var t = e[w].parsedURL; var r = new Headers(e[w].headers); if (!r.has("Accept")) {
                r.set("Accept", "*/*");
            } if (!t.protocol || !t.hostname) {
                throw new TypeError("Only absolute URLs are supported");
            } if (!/^https?:$/.test(t.protocol)) {
                throw new TypeError("Only HTTP(S) protocols are supported");
            } if (e.signal && e.body instanceof s.Readable && !S) {
                throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");
            } var i = null; if (e.body == null && /^(POST|PUT)$/i.test(e.method)) {
                i = "0";
            } if (e.body != null) {
                var t_20 = getTotalBytes(e);
                if (typeof t_20 === "number") {
                    i = String(t_20);
                }
            } if (i) {
                r.set("Content-Length", i);
            } if (!r.has("User-Agent")) {
                r.set("User-Agent", "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)");
            } if (e.compress && !r.has("Accept-Encoding")) {
                r.set("Accept-Encoding", "gzip,deflate");
            } var n = e.agent; if (typeof n === "function") {
                n = n(t);
            } if (!r.has("Connection") && !n) {
                r.set("Connection", "close");
            } return Object.assign({}, t, { method: e.method, headers: exportNodeCompatibleHeaders(r), agent: n }); }
            function AbortError(e) { Error.call(this, e); this.type = "aborted"; this.message = e; Error.captureStackTrace(this, this.constructor); }
            AbortError.prototype = Object.create(Error.prototype);
            AbortError.prototype.constructor = AbortError;
            AbortError.prototype.name = "AbortError";
            var C = s.PassThrough;
            var A = n.resolve;
            function fetch(e, t) { if (!fetch.Promise) {
                throw new Error("native promise missing, set fetch.Promise to your favorite alternative");
            } Body.Promise = fetch.Promise; return new fetch.Promise((function (r, n) { var u = new Request(e, t); var c = getNodeRequestOptions(u); var l = (c.protocol === "https:" ? o : i).request; var p = u.signal; var h = null; var d = function abort() { var e = new AbortError("The user aborted a request."); n(e); if (u.body && u.body instanceof s.Readable) {
                u.body.destroy(e);
            } if (!h || !h.body)
                return; h.body.emit("error", e); }; if (p && p.aborted) {
                d();
                return;
            } var m = function abortAndFinalize() { d(); finalize(); }; var g = l(c); var E; if (p) {
                p.addEventListener("abort", m);
            } function finalize() { g.abort(); if (p)
                p.removeEventListener("abort", m); clearTimeout(E); } if (u.timeout) {
                g.once("socket", (function (e) { E = setTimeout((function () { n(new FetchError("network timeout at: " + u.url, "request-timeout")); finalize(); }), u.timeout); }));
            } g.on("error", (function (e) { n(new FetchError("request to " + u.url + " failed, reason: " + e.message, "system", e)); finalize(); })); g.on("response", (function (e) { clearTimeout(E); var t = createHeadersLenient(e.headers); if (fetch.isRedirect(e.statusCode)) {
                var s_12 = t.get("Location");
                var i_8 = s_12 === null ? null : A(u.url, s_12);
                switch (u.redirect) {
                    case "error":
                        n(new FetchError("uri requested responds with a redirect, redirect mode is set to error: " + u.url, "no-redirect"));
                        finalize();
                        return;
                    case "manual":
                        if (i_8 !== null) {
                            try {
                                t.set("Location", i_8);
                            }
                            catch (e) {
                                n(e);
                            }
                        }
                        break;
                    case "follow":
                        if (i_8 === null) {
                            break;
                        }
                        if (u.counter >= u.follow) {
                            n(new FetchError("maximum redirect reached at: " + u.url, "max-redirect"));
                            finalize();
                            return;
                        }
                        var s_13 = { headers: new Headers(u.headers), follow: u.follow, counter: u.counter + 1, agent: u.agent, compress: u.compress, method: u.method, body: u.body, signal: u.signal, timeout: u.timeout, size: u.size };
                        if (e.statusCode !== 303 && u.body && getTotalBytes(u) === null) {
                            n(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
                            finalize();
                            return;
                        }
                        if (e.statusCode === 303 || (e.statusCode === 301 || e.statusCode === 302) && u.method === "POST") {
                            s_13.method = "GET";
                            s_13.body = undefined;
                            s_13.headers["delete"]("content-length");
                        }
                        r(fetch(new Request(i_8, s_13)));
                        finalize();
                        return;
                }
            } e.once("end", (function () { if (p)
                p.removeEventListener("abort", m); })); var s = e.pipe(new C); var i = { url: u.url, status: e.statusCode, statusText: e.statusMessage, headers: t, size: u.size, timeout: u.timeout, counter: u.counter }; var o = t.get("Content-Encoding"); if (!u.compress || u.method === "HEAD" || o === null || e.statusCode === 204 || e.statusCode === 304) {
                h = new Response(s, i);
                r(h);
                return;
            } var c = { flush: a.Z_SYNC_FLUSH, finishFlush: a.Z_SYNC_FLUSH }; if (o == "gzip" || o == "x-gzip") {
                s = s.pipe(a.createGunzip(c));
                h = new Response(s, i);
                r(h);
                return;
            } if (o == "deflate" || o == "x-deflate") {
                var t_21 = e.pipe(new C);
                t_21.once("data", (function (e) { if ((e[0] & 15) === 8) {
                    s = s.pipe(a.createInflate());
                }
                else {
                    s = s.pipe(a.createInflateRaw());
                } h = new Response(s, i); r(h); }));
                return;
            } if (o == "br" && typeof a.createBrotliDecompress === "function") {
                s = s.pipe(a.createBrotliDecompress());
                h = new Response(s, i);
                r(h);
                return;
            } h = new Response(s, i); r(h); })); writeToStream(g, u); })); }
            fetch.isRedirect = function (e) { return e === 301 || e === 302 || e === 303 || e === 307 || e === 308; };
            fetch.Promise = global.Promise;
            e.exports = t = fetch;
            Object.defineProperty(t, "__esModule", { value: true });
            t["default"] = t;
            t.Headers = Headers;
            t.Request = Request;
            t.Response = Response;
            t.FetchError = FetchError;
        }, 666: function (e, t, r) { var s = r(871); e.exports = s(once); e.exports.strict = s(onceStrict); once.proto = once((function () { Object.defineProperty(Function.prototype, "once", { value: function () { return once(this); }, configurable: true }); Object.defineProperty(Function.prototype, "onceStrict", { value: function () { return onceStrict(this); }, configurable: true }); })); function once(e) { var f = function () { if (f.called)
            return f.value; f.called = true; return f.value = e.apply(this, arguments); }; f.called = false; return f; } function onceStrict(e) { var f = function () { if (f.called)
            throw new Error(f.onceError); f.called = true; return f.value = e.apply(this, arguments); }; var t = e.name || "Function wrapped with `once`"; f.onceError = t + " shouldn't be called more than once"; f.called = false; return f; } }, 565: function (e, t, r) { e.exports = r(828); }, 828: function (e, t, r) {
            "use strict";
            var s = r(631);
            var i = r(16);
            var n = r(605);
            var o = r(211);
            var a = r(614);
            var u = r(357);
            var c = r(669);
            t.httpOverHttp = httpOverHttp;
            t.httpsOverHttp = httpsOverHttp;
            t.httpOverHttps = httpOverHttps;
            t.httpsOverHttps = httpsOverHttps;
            function httpOverHttp(e) { var t = new TunnelingAgent(e); t.request = n.request; return t; }
            function httpsOverHttp(e) { var t = new TunnelingAgent(e); t.request = n.request; t.createSocket = createSecureSocket; t.defaultPort = 443; return t; }
            function httpOverHttps(e) { var t = new TunnelingAgent(e); t.request = o.request; return t; }
            function httpsOverHttps(e) { var t = new TunnelingAgent(e); t.request = o.request; t.createSocket = createSecureSocket; t.defaultPort = 443; return t; }
            function TunnelingAgent(e) { var t = this; t.options = e || {}; t.proxyOptions = t.options.proxy || {}; t.maxSockets = t.options.maxSockets || n.Agent.defaultMaxSockets; t.requests = []; t.sockets = []; t.on("free", (function onFree(e, r, s, i) { var n = toOptions(r, s, i); for (var o = 0, a = t.requests.length; o < a; ++o) {
                var u = t.requests[o];
                if (u.host === n.host && u.port === n.port) {
                    t.requests.splice(o, 1);
                    u.request.onSocket(e);
                    return;
                }
            } e.destroy(); t.removeSocket(e); })); }
            c.inherits(TunnelingAgent, a.EventEmitter);
            TunnelingAgent.prototype.addRequest = function addRequest(e, t, r, s) { var i = this; var n = mergeOptions({ request: e }, i.options, toOptions(t, r, s)); if (i.sockets.length >= this.maxSockets) {
                i.requests.push(n);
                return;
            } i.createSocket(n, (function (t) { t.on("free", onFree); t.on("close", onCloseOrRemove); t.on("agentRemove", onCloseOrRemove); e.onSocket(t); function onFree() { i.emit("free", t, n); } function onCloseOrRemove(e) { i.removeSocket(t); t.removeListener("free", onFree); t.removeListener("close", onCloseOrRemove); t.removeListener("agentRemove", onCloseOrRemove); } })); };
            TunnelingAgent.prototype.createSocket = function createSocket(e, t) { var r = this; var s = {}; r.sockets.push(s); var i = mergeOptions({}, r.proxyOptions, { method: "CONNECT", path: e.host + ":" + e.port, agent: false, headers: { host: e.host + ":" + e.port } }); if (e.localAddress) {
                i.localAddress = e.localAddress;
            } if (i.proxyAuth) {
                i.headers = i.headers || {};
                i.headers["Proxy-Authorization"] = "Basic " + new Buffer(i.proxyAuth).toString("base64");
            } l("making CONNECT request"); var n = r.request(i); n.useChunkedEncodingByDefault = false; n.once("response", onResponse); n.once("upgrade", onUpgrade); n.once("connect", onConnect); n.once("error", onError); n.end(); function onResponse(e) { e.upgrade = true; } function onUpgrade(e, t, r) { process.nextTick((function () { onConnect(e, t, r); })); } function onConnect(i, o, a) { n.removeAllListeners(); o.removeAllListeners(); if (i.statusCode !== 200) {
                l("tunneling socket could not be established, statusCode=%d", i.statusCode);
                o.destroy();
                var u = new Error("tunneling socket could not be established, " + "statusCode=" + i.statusCode);
                u.code = "ECONNRESET";
                e.request.emit("error", u);
                r.removeSocket(s);
                return;
            } if (a.length > 0) {
                l("got illegal response body from proxy");
                o.destroy();
                var u = new Error("got illegal response body from proxy");
                u.code = "ECONNRESET";
                e.request.emit("error", u);
                r.removeSocket(s);
                return;
            } l("tunneling connection has established"); r.sockets[r.sockets.indexOf(s)] = o; return t(o); } function onError(t) { n.removeAllListeners(); l("tunneling socket could not be established, cause=%s\n", t.message, t.stack); var i = new Error("tunneling socket could not be established, " + "cause=" + t.message); i.code = "ECONNRESET"; e.request.emit("error", i); r.removeSocket(s); } };
            TunnelingAgent.prototype.removeSocket = function removeSocket(e) { var t = this.sockets.indexOf(e); if (t === -1) {
                return;
            } this.sockets.splice(t, 1); var r = this.requests.shift(); if (r) {
                this.createSocket(r, (function (e) { r.request.onSocket(e); }));
            } };
            function createSecureSocket(e, t) { var r = this; TunnelingAgent.prototype.createSocket.call(r, e, (function (s) { var n = e.request.getHeader("host"); var o = mergeOptions({}, r.options, { socket: s, servername: n ? n.replace(/:.*$/, "") : e.host }); var a = i.connect(0, o); r.sockets[r.sockets.indexOf(s)] = a; t(a); })); }
            function toOptions(e, t, r) { if (typeof e === "string") {
                return { host: e, port: t, localAddress: r };
            } return e; }
            function mergeOptions(e) { for (var t = 1, r = arguments.length; t < r; ++t) {
                var s = arguments[t];
                if (typeof s === "object") {
                    var i = Object.keys(s);
                    for (var n = 0, o = i.length; n < o; ++n) {
                        var a = i[n];
                        if (s[a] !== undefined) {
                            e[a] = s[a];
                        }
                    }
                }
            } return e; }
            var l;
            if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
                l = function () { var e = Array.prototype.slice.call(arguments); if (typeof e[0] === "string") {
                    e[0] = "TUNNEL: " + e[0];
                }
                else {
                    e.unshift("TUNNEL:");
                } console.error.apply(console, e); };
            }
            else {
                l = function () { };
            }
            t.debug = l;
        }, 447: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            function getUserAgent() { if (typeof navigator === "object" && "userAgent" in navigator) {
                return navigator.userAgent;
            } if (typeof process === "object" && "version" in process) {
                return "Node.js/" + process.version.substr(1) + " (" + process.platform + "; " + process.arch + ")";
            } return "<environment undetectable>"; }
            t.getUserAgent = getUserAgent;
        }, 871: function (e) { e.exports = wrappy; function wrappy(e, t) { if (e && t)
            return wrappy(e)(t); if (typeof e !== "function")
            throw new TypeError("need wrapper function"); Object.keys(e).forEach((function (t) { wrapper[t] = e[t]; })); return wrapper; function wrapper() { var t = new Array(arguments.length); for (var r = 0; r < t.length; r++) {
            t[r] = arguments[r];
        } var s = e.apply(this, t); var i = t[t.length - 1]; if (typeof s === "function" && s !== i) {
            Object.keys(i).forEach((function (e) { s[e] = i[e]; }));
        } return s; } } }, 676: function (e, t, r) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function (e, t, r, s) { if (s === undefined)
                s = r; Object.defineProperty(e, s, { enumerable: true, get: function () { return t[r]; } }); } : function (e, t, r, s) { if (s === undefined)
                s = r; e[s] = t[r]; });
            var i = this && this.__setModuleDefault || (Object.create ? function (e, t) { Object.defineProperty(e, "default", { enumerable: true, value: t }); } : function (e, t) { e["default"] = t; });
            var n = this && this.__importStar || function (e) { if (e && e.__esModule)
                return e; var t = {}; if (e != null)
                for (var r in e)
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r))
                        s(t, e, r); i(t, e); return t; };
            var o = this && this.__importDefault || function (e) { return e && e.__esModule ? e : { "default": e }; };
            Object.defineProperty(t, "__esModule", { value: true });
            var a = n(r(355));
            var u = r(262);
            var c = o(r(734));
            var l = process.env.GITHUB_TOKEN;
            var p = /\/\d{4}\/(?:\d{4}-\d{2}-\d{2}|\d{2}\/\d{2})\/[a-z0-9]{20,}\.js$/;
            var h = "current.js";
            function run() {
                return __awaiter(this, void 0, void 0, function () { var e, t, r, s, i, n, o, d, _a, m, g, E, v, y, D, _b, x, w, b, T, S, C, A, k, F, e_23; return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 6, , 7]);
                            if (!l)
                                return [2 /*return*/, a.setFailed("Invalid GITHUB_TOKEN")];
                            d = u.getOctokit(l);
                            _a = u.context.repo, m = _a.owner, g = _a.repo;
                            if (u.context.eventName !== "push")
                                return [2 /*return*/];
                            E = u.context.payload;
                            v = E.after;
                            return [4 /*yield*/, d.rest.repos.getCommit({ owner: m, repo: g, ref: v })];
                        case 1:
                            y = _c.sent();
                            if (!y)
                                return [2 /*return*/, a.setFailed("commit not found")];
                            D = (e = y.data.files) === null || e === void 0 ? void 0 : e[0];
                            if (!D || (D === null || D === void 0 ? void 0 : D.status) !== "added")
                                return [2 /*return*/, a.info("not a build commit")];
                            _b = (r = (t = y === null || y === void 0 ? void 0 : y.data) === null || t === void 0 ? void 0 : t.files) === null || r === void 0 ? void 0 : r[0], x = _b.blob_url, w = _b.sha;
                            if (!(p === null || p === void 0 ? void 0 : p.test(x)))
                                return [2 /*return*/, a.info("not a build file")];
                            return [4 /*yield*/, d.rest.git.getTree({ owner: m, repo: g, tree_sha: E.before })];
                        case 2:
                            b = _c.sent();
                            T = (o = (n = (i = (s = b === null || b === void 0 ? void 0 : b.data) === null || s === void 0 ? void 0 : s.tree) === null || i === void 0 ? void 0 : i.find) === null || n === void 0 ? void 0 : n.call(i, (function (e) { return e.path === h; }))) === null || o === void 0 ? void 0 : o.sha;
                            if (!T)
                                return [2 /*return*/, a.info("no current file")];
                            return [4 /*yield*/, d.rest.git.getBlob({ owner: m, repo: g, file_sha: T })];
                        case 3:
                            S = _c.sent();
                            return [4 /*yield*/, d.rest.git.getBlob({ owner: m, repo: g, file_sha: w })];
                        case 4:
                            C = _c.sent();
                            A = Buffer.from(S.data.content, "base64").toString("utf8");
                            k = Buffer.from(C.data.content, "base64").toString("utf8");
                            if (a.isDebug()) {
                                a.debug("" + A.length);
                                a.debug("" + k.length);
                            }
                            F = void 0;
                            try {
                                F = c["default"](A, k, "codeblock");
                            }
                            catch (e) {
                                return [2 /*return*/, a.setFailed("unable to diff strings: " + e)];
                            }
                            if (!F)
                                return [2 /*return*/, a.info("no strings changed")];
                            return [4 /*yield*/, d.rest.repos.createCommitComment({ owner: m, repo: g, commit_sha: v, body: F })];
                        case 5:
                            _c.sent();
                            return [2 /*return*/, a.info("created commit comment")];
                        case 6:
                            e_23 = _c.sent();
                            a.setFailed(a.isDebug() ? e_23.stack : e_23.message);
                            return [3 /*break*/, 7];
                        case 7: return [2 /*return*/];
                    }
                }); });
            }
            run();
        }, 710: function (module) { module.exports = eval("require")("encoding"); }, 357: function (e) {
            "use strict";
            e.exports = require("assert");
        }, 614: function (e) {
            "use strict";
            e.exports = require("events");
        }, 747: function (e) {
            "use strict";
            e.exports = require("fs");
        }, 605: function (e) {
            "use strict";
            e.exports = require("http");
        }, 211: function (e) {
            "use strict";
            e.exports = require("https");
        }, 631: function (e) {
            "use strict";
            e.exports = require("net");
        }, 87: function (e) {
            "use strict";
            e.exports = require("os");
        }, 622: function (e) {
            "use strict";
            e.exports = require("path");
        }, 413: function (e) {
            "use strict";
            e.exports = require("stream");
        }, 16: function (e) {
            "use strict";
            e.exports = require("tls");
        }, 835: function (e) {
            "use strict";
            e.exports = require("url");
        }, 669: function (e) {
            "use strict";
            e.exports = require("util");
        }, 761: function (e) {
            "use strict";
            e.exports = require("zlib");
        } };
    var __webpack_module_cache__ = {};
    function __nccwpck_require__(e) { var t = __webpack_module_cache__[e]; if (t !== undefined) {
        return t.exports;
    } var r = __webpack_module_cache__[e] = { exports: {} }; var s = true; try {
        __webpack_modules__[e].call(r.exports, r, r.exports, __nccwpck_require__);
        s = false;
    }
    finally {
        if (s)
            delete __webpack_module_cache__[e];
    } return r.exports; }
    if (typeof __nccwpck_require__ !== "undefined")
        __nccwpck_require__.ab = __dirname + "/";
    var __webpack_exports__ = __nccwpck_require__(676);
    module.exports = __webpack_exports__;
})();
