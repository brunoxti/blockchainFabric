/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./invoke.js":
/*!*******************!*\
  !*** ./invoke.js ***!
  \*******************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nconst { Wallets , Gateway  } = __webpack_require__(/*! fabric-network */ \"fabric-network\");\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst path = __webpack_require__(/*! path */ \"path\");\nexports.create = async function(chave, valor) {\n    return generic(\"create\", chave, valor);\n};\nexports.calcule = async function(chave, valor, valor2, operation) {\n    return generic(\"calcule\", chave, valor, valor2, operation);\n};\nexports.retrieve = async function(chave) {\n    return generic(\"retrieve\", chave, \"!\");\n};\nexports.update = async function(chave, valor) {\n    return generic(\"update\", chave, valor);\n};\nexports[\"delete\"] = async function(chave) {\n    return generic(\"delete\", chave, \"!\");\n};\nasync function generic(method, chave, valor, valor2, operation) {\n    console.log(method + \"|\" + chave + \"|\" + valor + \"|\" + valor2 + \"|\" + operation);\n    try {\n        const connectionProfilePath = path.resolve(__dirname, \".\", \"connection.json\");\n        const connectionProfile = JSON.parse(fs.readFileSync(connectionProfilePath, \"utf8\"));\n        // Create a new file system based wallet for managing identities.\n        const walletPath = path.join(process.cwd(), \"wallet\");\n        const wallet = await Wallets.newFileSystemWallet(walletPath);\n        // Create a new gateway for connecting to our peer node.\n        const gateway = new Gateway();\n        // eslint-disable-line @typescript-eslint/no-unsafe-assignment\n        const connectionOptions = {\n            wallet,\n            identity: \"admin\",\n            discovery: {\n                enabled: true,\n                asLocalhost: true\n            }\n        };\n        await gateway.connect(connectionProfile, connectionOptions);\n        // Get the network (channel) our contract is deployed to.\n        const network = await gateway.getNetwork(\"mychannel\");\n        // Get the contract from the network.\n        const contract = network.getContract(\"APIJava\");\n        // Submit the specified transaction.\n        console.log(\"Eii\");\n        var result = \"\";\n        if (valor == \"!\") {\n            console.log(\"valor = \" + valor);\n            result = await contract.submitTransaction(method, chave);\n        } else {\n            console.log(\"mandado os 3 \");\n            result = await contract.submitTransaction(method, chave, valor, valor2, operation);\n        }\n        console.log(\"Transa\\xe7\\xe3o submetida\");\n        // Disconnect from the gateway.\n        console.log(\"teste \" + result.toString());\n        gateway.disconnect();\n        if (result == null || result == \"\") return \"ok\";\n        else return result.toString();\n    } catch (error) {\n        return \"Falha ao submeter transa\\xe7\\xe3o:\" + error;\n    }\n}\n;\nmodule.export = {\n    Wallets,\n    Gateway\n};\nmodule.export = fs;\nmodule.export = path;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dGVudCI6WyJcbiBjb25zdCB7IFdhbGxldHMsIEdhdGV3YXkgfSA9IHJlcXVpcmUoJ2ZhYnJpYy1uZXR3b3JrJyk7XG4gY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbiBleHBvcnRzLmNyZWF0ZSA9IChhc3luYyBmdW5jdGlvbiggY2hhdmUsIHZhbG9yICkge1xuICAgIHJldHVybiBnZW5lcmljKCdjcmVhdGUnLCBjaGF2ZSwgdmFsb3IpO1xuIH0pO1xuXG4gZXhwb3J0cy5jYWxjdWxlID0gKGFzeW5jIGZ1bmN0aW9uKCBjaGF2ZSwgdmFsb3IsIHZhbG9yMiwgb3BlcmF0aW9uICkge1xuICAgcmV0dXJuIGdlbmVyaWMoJ2NhbGN1bGUnLCBjaGF2ZSwgdmFsb3IsIHZhbG9yMiwgb3BlcmF0aW9uKTtcbn0pO1xuXG4gZXhwb3J0cy5yZXRyaWV2ZSA9IChhc3luYyBmdW5jdGlvbiggY2hhdmUpIHtcbiAgIHJldHVybiBnZW5lcmljKCdyZXRyaWV2ZScsIGNoYXZlLCBcIiFcIik7XG59KTtcblxuZXhwb3J0cy51cGRhdGUgPSAoYXN5bmMgZnVuY3Rpb24oIGNoYXZlLCB2YWxvciApIHtcbiAgIHJldHVybiBnZW5lcmljKCd1cGRhdGUnLCBjaGF2ZSwgdmFsb3IpO1xufSk7XG5cbmV4cG9ydHMuZGVsZXRlID0gKGFzeW5jIGZ1bmN0aW9uKCBjaGF2ZSkge1xuICAgcmV0dXJuIGdlbmVyaWMoJ2RlbGV0ZScsIGNoYXZlLCBcIiFcIik7XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJpYyhtZXRob2QsIGNoYXZlLCB2YWxvciwgdmFsb3IyLCBvcGVyYXRpb24gKSB7XG5cbiAgY29uc29sZS5sb2cobWV0aG9kICsgXCJ8XCIgKyBjaGF2ZSArIFwifFwiICsgdmFsb3IgKyBcInxcIiArIHZhbG9yMiArIFwifFwiICsgb3BlcmF0aW9uKTtcblxuICAgdHJ5IHtcblxuICAgIGNvbnN0IGNvbm5lY3Rpb25Qcm9maWxlUGF0aCA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuJywgXCJjb25uZWN0aW9uLmpzb25cIik7XG4gICAgY29uc3QgY29ubmVjdGlvblByb2ZpbGUgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhjb25uZWN0aW9uUHJvZmlsZVBhdGgsICd1dGY4JykpOyBcblxuICAgIC8vIENyZWF0ZSBhIG5ldyBmaWxlIHN5c3RlbSBiYXNlZCB3YWxsZXQgZm9yIG1hbmFnaW5nIGlkZW50aXRpZXMuXG4gICAgY29uc3Qgd2FsbGV0UGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcIndhbGxldFwiKTtcbiAgICBjb25zdCB3YWxsZXQgPSBhd2FpdCBXYWxsZXRzLm5ld0ZpbGVTeXN0ZW1XYWxsZXQod2FsbGV0UGF0aCk7XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgZ2F0ZXdheSBmb3IgY29ubmVjdGluZyB0byBvdXIgcGVlciBub2RlLlxuICAgIGNvbnN0IGdhdGV3YXkgPSBuZXcgR2F0ZXdheSgpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG4gICAgY29uc3QgY29ubmVjdGlvbk9wdGlvbnMgPSB7IHdhbGxldCwgaWRlbnRpdHk6ICdhZG1pbicsIGRpc2NvdmVyeTogeyBlbmFibGVkOiB0cnVlLCBhc0xvY2FsaG9zdDogdHJ1ZSB9IH07XG4gICAgYXdhaXQgZ2F0ZXdheS5jb25uZWN0KGNvbm5lY3Rpb25Qcm9maWxlLCBjb25uZWN0aW9uT3B0aW9ucyk7XG4gICAgLy8gR2V0IHRoZSBuZXR3b3JrIChjaGFubmVsKSBvdXIgY29udHJhY3QgaXMgZGVwbG95ZWQgdG8uXG5cbiAgICBjb25zdCBuZXR3b3JrID0gYXdhaXQgZ2F0ZXdheS5nZXROZXR3b3JrKFwibXljaGFubmVsXCIpO1xuICAgIC8vIEdldCB0aGUgY29udHJhY3QgZnJvbSB0aGUgbmV0d29yay5cbiAgICBjb25zdCBjb250cmFjdCA9IG5ldHdvcmsuZ2V0Q29udHJhY3QoXCJBUElKYXZhXCIpO1xuICAgIC8vIFN1Ym1pdCB0aGUgc3BlY2lmaWVkIHRyYW5zYWN0aW9uLlxuICAgIGNvbnNvbGUubG9nKCdFaWknKTtcbiAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICBpZiAodmFsb3IgPT0gXCIhXCIpe1xuICAgICAgY29uc29sZS5sb2coJ3ZhbG9yID0gJyArIHZhbG9yKTtcbiAgICAgICByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5zdWJtaXRUcmFuc2FjdGlvbihtZXRob2QsIGNoYXZlKTtcbiAgICAgIH1cbiAgICBlbHNle1xuICAgICAgY29uc29sZS5sb2coJ21hbmRhZG8gb3MgMyAnKTtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LnN1Ym1pdFRyYW5zYWN0aW9uKG1ldGhvZCwgY2hhdmUsIHZhbG9yLCB2YWxvcjIsIG9wZXJhdGlvbik7ICBcblxuICAgIH0gXG4gICAgY29uc29sZS5sb2coJ1RyYW5zYcOnw6NvIHN1Ym1ldGlkYScpO1xuICAgIC8vIERpc2Nvbm5lY3QgZnJvbSB0aGUgZ2F0ZXdheS5cbiAgICBjb25zb2xlLmxvZyhcInRlc3RlIFwiICsgcmVzdWx0LnRvU3RyaW5nKCkpO1xuICAgIGdhdGV3YXkuZGlzY29ubmVjdCgpO1xuICAgIGlmIChyZXN1bHQgPT0gbnVsbCB8fCByZXN1bHQgPT0gXCJcIilcbiAgICAgICByZXR1cm4gIFwib2tcIjtcbiAgICBlbHNlXG4gICAgICAgcmV0dXJuIHJlc3VsdC50b1N0cmluZygpO1xuXG4gIH0gXG4gIGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnRmFsaGEgYW8gc3VibWV0ZXIgdHJhbnNhw6fDo286JyArIGVycm9yO1xuICB9XG4gfTtcblxuIG1vZHVsZS5leHBvcnQgPSB7IFdhbGxldHMsIEdhdGV3YXkgfTtcbiBtb2R1bGUuZXhwb3J0ID0gZnM7XG4gbW9kdWxlLmV4cG9ydCA9IHBhdGg7XG4iXSwibmFtZXMiOlsiV2FsbGV0cyIsIkdhdGV3YXkiLCJyZXF1aXJlIiwiZnMiLCJwYXRoIiwiZXhwb3J0cyIsImNyZWF0ZSIsImNoYXZlIiwidmFsb3IiLCJnZW5lcmljIiwiY2FsY3VsZSIsInZhbG9yMiIsIm9wZXJhdGlvbiIsInJldHJpZXZlIiwidXBkYXRlIiwiZGVsZXRlIiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3Rpb25Qcm9maWxlUGF0aCIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJjb25uZWN0aW9uUHJvZmlsZSIsIkpTT04iLCJwYXJzZSIsInJlYWRGaWxlU3luYyIsIndhbGxldFBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsIndhbGxldCIsIm5ld0ZpbGVTeXN0ZW1XYWxsZXQiLCJnYXRld2F5IiwiY29ubmVjdGlvbk9wdGlvbnMiLCJpZGVudGl0eSIsImRpc2NvdmVyeSIsImVuYWJsZWQiLCJhc0xvY2FsaG9zdCIsImNvbm5lY3QiLCJuZXR3b3JrIiwiZ2V0TmV0d29yayIsImNvbnRyYWN0IiwiZ2V0Q29udHJhY3QiLCJyZXN1bHQiLCJzdWJtaXRUcmFuc2FjdGlvbiIsInRvU3RyaW5nIiwiZGlzY29ubmVjdCIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./invoke.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n// content of index.js\nvar React = __webpack_require__(/*! react */ \"react\");\nconst contract = __webpack_require__(/*! ../invoke.js */ \"./invoke.js\");\n// content of index.js\nvar React, { Component  } = __webpack_require__(/*! react */ \"react\");\nclass CampaignIndex extends Component {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"React\"\n        }, void 0, false, {\n            fileName: \"/home/bruno/dev/blockchain/clientCode/pages/index.js\",\n            lineNumber: 11,\n            columnNumber: 15\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CampaignIndex); // const express = require(\"express\");\n // const bodyParser = require(\"body-parser\");\n // const fileUpload = require('express-fileupload');\n // const cors = require('cors');\n // const morgan = require('morgan');\n // const port = 3546\n //  //async function main() {\n //  //  contract.create(\"0008\", \"00008\")\n //  //}\n // main();\n // async function main() {\n // app = express();\n // app.use(express.json())\n // app.use(fileUpload({\n //     createParentPath: true\n // }));\n // app.use(cors());\n // app.use(bodyParser.json());\n // app.use(bodyParser.urlencoded({extended: true}));\n // app.use(morgan('dev'))\n // app.use(express.static('static'));\n // app.use('/', express.static(\"static\"))\n // app.get(\"/create\", async (req) => {\n //    await contract.create(req.query.chave, req.query.valor);\n //    console.log(\"success post\");\n // })\n // app.get(\"/calcule\", async (req) => {\n //    await contract.calcule(req.query.chave, req.query.valor1, req.query.valor2, req.query.operation);\n //    console.log(\"success post\");\n // })\n // app.get(\"/update\", async (req, res) => {\n //    ret = await contract.update(req.query.chave, req.query.valor);\n //    console.log(ret);\n //    res.send(ret);\n // })\n // app.get(\"/retrieve\", async (req, res) => { \n //    ret = await contract.retrieve(req.query.chave);     \n //    console.log(ret);   \n //    res.send(ret);\n // })\n // app.get(\"/delete\", async (req, res) => {     \n //    ret = await contract.delete(req.query.chave);\n //    console.log(ret);\n //    res.send(ret);\n // })\n // app.listen(port, function(err) {\n //    console.log(\"Servidor rodando na porta\" + port);\n // })\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQURBLHNCQUFzQjtBQUN0QixJQUFJQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsb0JBQU8sQ0FBQztBQUM1QixNQUFNQyxRQUFRLEdBQUdELG1CQUFPLENBQUMsaUNBQWMsQ0FBQztBQUV4QyxzQkFBc0I7QUFDdEIsSUFBSUQsS0FBSyxFQUFFLEVBQUNHLFNBQVMsR0FBQyxHQUFHRixtQkFBTyxDQUFDLG9CQUFPLENBQUM7QUFHekMsTUFBTUcsYUFBYSxTQUFTRCxTQUFTO0lBQ2xDRSxNQUFNLEdBQUU7UUFDTCxxQkFBUSw4REFBQ0MsS0FBRztzQkFBQyxPQUFLOzs7OztnQkFBTSxDQUFFO0tBQy9CO0NBQ0E7QUFFRCxpRUFBZUYsYUFBYSxFQUFDLENBQzdCLHNDQUFzQztDQUN0Qyw2Q0FBNkM7Q0FDN0Msb0RBQW9EO0NBQ3BELGdDQUFnQztDQUNoQyxvQ0FBb0M7Q0FFcEMsb0JBQW9CO0NBRXBCLDZCQUE2QjtDQUM3Qix3Q0FBd0M7Q0FDeEMsT0FBTztDQUNQLFVBQVU7Q0FHViwwQkFBMEI7Q0FFMUIsbUJBQW1CO0NBRW5CLDBCQUEwQjtDQUMxQix1QkFBdUI7Q0FDdkIsNkJBQTZCO0NBQzdCLE9BQU87Q0FDUCxtQkFBbUI7Q0FDbkIsOEJBQThCO0NBQzlCLG9EQUFvRDtDQUNwRCx5QkFBeUI7Q0FDekIscUNBQXFDO0NBQ3JDLHlDQUF5QztDQUV6QyxzQ0FBc0M7Q0FFdEMsOERBQThEO0NBQzlELGtDQUFrQztDQUNsQyxLQUFLO0NBQ0wsdUNBQXVDO0NBQ3ZDLHVHQUF1RztDQUN2RyxrQ0FBa0M7Q0FDbEMsS0FBSztDQUVMLDJDQUEyQztDQUMzQyxvRUFBb0U7Q0FDcEUsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtDQUNwQixLQUFLO0NBRUwsOENBQThDO0NBRTlDLDBEQUEwRDtDQUMxRCwwQkFBMEI7Q0FDMUIsb0JBQW9CO0NBQ3BCLEtBQUs7Q0FFTCxnREFBZ0Q7Q0FDaEQsbURBQW1EO0NBQ25ELHVCQUF1QjtDQUN2QixvQkFBb0I7Q0FDcEIsS0FBSztDQUVMLG1DQUFtQztDQUNuQyxzREFBc0Q7Q0FDdEQsS0FBSztDQUVMLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnRlbnQgb2YgaW5kZXguanNcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBjb250cmFjdCA9IHJlcXVpcmUoJy4uL2ludm9rZS5qcycpXG5cbi8vIGNvbnRlbnQgb2YgaW5kZXguanNcbnZhciBSZWFjdCwge0NvbXBvbmVudH0gPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5cbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBDb21wb25lbnR7XG4gICByZW5kZXIoKXtcbiAgICAgIHJldHVybiAoPGRpdj5SZWFjdDwvZGl2Pik7XG59XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduSW5kZXg7XG4vLyBjb25zdCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG4vLyBjb25zdCBib2R5UGFyc2VyID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpO1xuLy8gY29uc3QgZmlsZVVwbG9hZCA9IHJlcXVpcmUoJ2V4cHJlc3MtZmlsZXVwbG9hZCcpO1xuLy8gY29uc3QgY29ycyA9IHJlcXVpcmUoJ2NvcnMnKTtcbi8vIGNvbnN0IG1vcmdhbiA9IHJlcXVpcmUoJ21vcmdhbicpO1xuXG4vLyBjb25zdCBwb3J0ID0gMzU0NlxuXG4vLyAgLy9hc3luYyBmdW5jdGlvbiBtYWluKCkge1xuLy8gIC8vICBjb250cmFjdC5jcmVhdGUoXCIwMDA4XCIsIFwiMDAwMDhcIilcbi8vICAvL31cbi8vIG1haW4oKTtcblxuXG4vLyBhc3luYyBmdW5jdGlvbiBtYWluKCkge1xuXG4vLyBhcHAgPSBleHByZXNzKCk7XG5cbi8vIGFwcC51c2UoZXhwcmVzcy5qc29uKCkpXG4vLyBhcHAudXNlKGZpbGVVcGxvYWQoe1xuLy8gICAgIGNyZWF0ZVBhcmVudFBhdGg6IHRydWVcbi8vIH0pKTtcbi8vIGFwcC51c2UoY29ycygpKTtcbi8vIGFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuLy8gYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe2V4dGVuZGVkOiB0cnVlfSkpO1xuLy8gYXBwLnVzZShtb3JnYW4oJ2RldicpKVxuLy8gYXBwLnVzZShleHByZXNzLnN0YXRpYygnc3RhdGljJykpO1xuLy8gYXBwLnVzZSgnLycsIGV4cHJlc3Muc3RhdGljKFwic3RhdGljXCIpKVxuXG4vLyBhcHAuZ2V0KFwiL2NyZWF0ZVwiLCBhc3luYyAocmVxKSA9PiB7XG4gICBcbi8vICAgIGF3YWl0IGNvbnRyYWN0LmNyZWF0ZShyZXEucXVlcnkuY2hhdmUsIHJlcS5xdWVyeS52YWxvcik7XG4vLyAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3MgcG9zdFwiKTtcbi8vIH0pXG4vLyBhcHAuZ2V0KFwiL2NhbGN1bGVcIiwgYXN5bmMgKHJlcSkgPT4ge1xuLy8gICAgYXdhaXQgY29udHJhY3QuY2FsY3VsZShyZXEucXVlcnkuY2hhdmUsIHJlcS5xdWVyeS52YWxvcjEsIHJlcS5xdWVyeS52YWxvcjIsIHJlcS5xdWVyeS5vcGVyYXRpb24pO1xuLy8gICAgY29uc29sZS5sb2coXCJzdWNjZXNzIHBvc3RcIik7XG4vLyB9KVxuXG4vLyBhcHAuZ2V0KFwiL3VwZGF0ZVwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcbi8vICAgIHJldCA9IGF3YWl0IGNvbnRyYWN0LnVwZGF0ZShyZXEucXVlcnkuY2hhdmUsIHJlcS5xdWVyeS52YWxvcik7XG4vLyAgICBjb25zb2xlLmxvZyhyZXQpO1xuLy8gICAgcmVzLnNlbmQocmV0KTtcbi8vIH0pXG5cbi8vIGFwcC5nZXQoXCIvcmV0cmlldmVcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7IFxuICAgXG4vLyAgICByZXQgPSBhd2FpdCBjb250cmFjdC5yZXRyaWV2ZShyZXEucXVlcnkuY2hhdmUpOyAgICAgXG4vLyAgICBjb25zb2xlLmxvZyhyZXQpOyAgIFxuLy8gICAgcmVzLnNlbmQocmV0KTtcbi8vIH0pXG5cbi8vIGFwcC5nZXQoXCIvZGVsZXRlXCIsIGFzeW5jIChyZXEsIHJlcykgPT4geyAgICAgXG4vLyAgICByZXQgPSBhd2FpdCBjb250cmFjdC5kZWxldGUocmVxLnF1ZXJ5LmNoYXZlKTtcbi8vICAgIGNvbnNvbGUubG9nKHJldCk7XG4vLyAgICByZXMuc2VuZChyZXQpO1xuLy8gfSlcblxuLy8gYXBwLmxpc3Rlbihwb3J0LCBmdW5jdGlvbihlcnIpIHtcbi8vICAgIGNvbnNvbGUubG9nKFwiU2Vydmlkb3Igcm9kYW5kbyBuYSBwb3J0YVwiICsgcG9ydCk7XG4vLyB9KVxuXG4vLyB9XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiY29udHJhY3QiLCJDb21wb25lbnQiLCJDYW1wYWlnbkluZGV4IiwicmVuZGVyIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "fabric-network":
/*!*********************************!*\
  !*** external "fabric-network" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("fabric-network");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();