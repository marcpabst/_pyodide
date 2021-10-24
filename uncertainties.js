var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="uncertainties.data";var REMOTE_PACKAGE_BASE="uncertainties.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","uncertainties",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/uncertainties","unumpy",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/uncertainties","lib1to2",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/uncertainties/lib1to2","fixes",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","uncertainties-3.1.5-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:193411,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1419,2835,4258,5429,6804,8182,9497,10816,12124,13518,14861,16271,17783,19167,20554,21863,23170,24576,25757,26969,28314,29570,30947,32139,33412,34539,35708,37010,37806,39231,40644,42178,43678,45112,46405,47636,48912,50014,51253,52330,53646,54834,56137,57535,58841,60231,61454,62918,64305,65689,66996,68324,69544,70689,71738,72905,74022,75201,76506,77850,79302,80644,81826,83025,84351,85799,87017,88132,89500,90900,92158,93500,94817,96078,97410,98428,99666,100901,102110,103325,104720,106090,107240,108267,109340,110634,111527,112675,113892,115211,116608,117884,118974,120187,120953,121831,122335,123314,124149,125332,126447,127398,128278,129448,130452,131766,132747,133807,134823,136036,137004,137952,138736,139662,140849,142146,143236,144439,145444,146432,147552,148858,149947,151341,152646,153701,154783,155947,157078,158549,159762,160767,162121,163383,164624,165821,167074,168392,169599,170972,172358,173568,174890,176339,177691,178621,179448,180541,181424,182646,184010,184986,186496,188074,189399,190924,192316],sizes:[1419,1416,1423,1171,1375,1378,1315,1319,1308,1394,1343,1410,1512,1384,1387,1309,1307,1406,1181,1212,1345,1256,1377,1192,1273,1127,1169,1302,796,1425,1413,1534,1500,1434,1293,1231,1276,1102,1239,1077,1316,1188,1303,1398,1306,1390,1223,1464,1387,1384,1307,1328,1220,1145,1049,1167,1117,1179,1305,1344,1452,1342,1182,1199,1326,1448,1218,1115,1368,1400,1258,1342,1317,1261,1332,1018,1238,1235,1209,1215,1395,1370,1150,1027,1073,1294,893,1148,1217,1319,1397,1276,1090,1213,766,878,504,979,835,1183,1115,951,880,1170,1004,1314,981,1060,1016,1213,968,948,784,926,1187,1297,1090,1203,1005,988,1120,1306,1089,1394,1305,1055,1082,1164,1131,1471,1213,1005,1354,1262,1241,1197,1253,1318,1207,1373,1386,1210,1322,1449,1352,930,827,1093,883,1222,1364,976,1510,1578,1325,1525,1392,1095],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_uncertainties.data")}Module["addRunDependency"]("datafile_uncertainties.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/uncertainties/umath.py",start:0,end:1319,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/umath_core.py",start:1319,end:16130,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/__init__.py",start:16130,end:25485,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/core.py",start:25485,end:152744,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/test_umath.py",start:152744,end:164588,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/test_uncertainties.py",start:164588,end:248750,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/1to2.py",start:248750,end:249134,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/unumpy/test_ulinalg.py",start:249134,end:251995,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/unumpy/ulinalg.py",start:251995,end:252366,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/unumpy/test_unumpy.py",start:252366,end:263068,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/unumpy/__init__.py",start:263068,end:265909,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/unumpy/core.py",start:265909,end:294165,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/lib1to2/__init__.py",start:294165,end:294165,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/lib1to2/test_1to2.py",start:294165,end:301223,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/lib1to2/fixes/fix_std_dev.py",start:301223,end:302260,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/lib1to2/fixes/fix_ufloat.py",start:302260,end:305301,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/lib1to2/fixes/fix_uarray_umatrix.py",start:305301,end:307857,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/lib1to2/fixes/__init__.py",start:307857,end:307857,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties/lib1to2/fixes/fix_std_devs.py",start:307857,end:308347,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties-3.1.5-py3.9.egg-info/PKG-INFO",start:308347,end:322239,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties-3.1.5-py3.9.egg-info/SOURCES.txt",start:322239,end:323387,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties-3.1.5-py3.9.egg-info/requires.txt",start:323387,end:323472,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties-3.1.5-py3.9.egg-info/top_level.txt",start:323472,end:323486,audio:0},{filename:"/lib/python3.9/site-packages/uncertainties-3.1.5-py3.9.egg-info/dependency_links.txt",start:323486,end:323487,audio:0}],remote_package_size:197507,package_uuid:"6faefdc4-c916-4b73-87b3-1d03430d3033"})})();