---
title: "HostUtils"
draft: false
---

*Namespace: Rhino.Runtime*

   Contains static methods to deal with teh runtime environment.
   
#### static OnExceptionReport
- (summary) 
     Is raised when an exception is reported with one of the  method.
     
- (since) 5.0
#### static OnSendLogMessageToCloud
- (summary) 
     Is raised when an exception is reported with one of the  method.
     
- (since) 6.4
## Properties
#### static string ComputerSerialNumber
- (summary) 
     Gets the serial number of the computer running Rhino.
     
- (since) 6.0
#### static uint CurrentOSLanguage
- (summary) 
     Get the current operating system language.
     
- (since) 6.8
#### static Guid DeviceId
- (summary) 
     The DeviceId is a unique, stable ID that anonymously identifies the device
     that Rhino is running on. It is computed based on hardware information that
     should not change when the OS is upgraded, or if commonly modified hardware
     are added or removed from the computer. The machine-specific information is
     hashed using a cryptographic hash to make it anonymous.
     
- (since) 6.0
#### static string DeviceName
- (summary) 
     Name of the computer running Rhino. If the computer is part of a
     Windows Domain, the computer name has "@[DOMAIN]" appended.
     
- (since) 6.0
#### static string OperatingSystemBuildNumber
- (summary) 
     Returns Operating System Build Number "11763" | "7601" | ... | "Unknown"
     
- (since) 6.15
#### static string OperatingSystemEdition
- (summary) 
     Returns Operating System Edition: "Professional" | "ServerDatacenter" | ... | "Unknown"
     
- (since) 6.15
#### static string OperatingSystemInstallationType
- (summary) 
     Returns Operating System Installation Type: "Client" | "Server" | "Unknown"
     
- (since) 6.15
#### static string OperatingSystemProductName
- (summary) 
     Returns Operating System Edition: "Professional" | "ServerDatacenter" | ... | "Unknown"
     
- (since) 6.15
#### static string OperatingSystemVersion
- (summary) 
     Returns Operating System Version "6.1" | "6.3" | ... | "Unknown"
     
- (since) 6.15
#### static bool RunningInDarkMode
- (summary) 
     Returns True if the host operating system is in dark mode and Rhino
     supports dark mode.
     
- (since) 6.19
#### static bool RunningInMono
- (summary) 
     Tests if this process is currently executing under the Mono runtime.
     
- (since) 5.0
#### static bool RunningInRhino
- (summary) 
     Tests if RhinoCommon is currently executing inside of the Rhino.exe process.
     There are other cases where RhinoCommon could be running; specifically inside
     of Visual Studio when something like a windows form is being worked on in the
     resource editor or running stand-alone when compiled to be used as a version
     of OpenNURBS.
     
- (since) 5.0
#### static bool RunningOnOSX
- (summary) 
     Tests if this process is currently executing on the Mac OSX platform.
     
- (since) 5.0
#### static bool RunningOnWindows
- (summary) 
     Tests if this process is currently executing on the Windows platform.
     
- (since) 5.0
#### static bool SendDebugToCommandLine
- (summary) 
     Gets or sets whether debug messages are printed to the command line.
     
- (since) 5.0
## Methods
#### static string AutoInstallPlugInFolder(bool currentUser)
- (summary) 
     Gets the auto install plug-in folder for machine or current user.
     
- (since) 6.0
- (returns) string This is some return comment
#### static int CallFromCoreRhino(string task)
- (summary) 
     Don't change this function in ANY way unless you chat with Steve first!
     This function is called by Rhino on initial startup and the signature
     must be exact
     
- (since) 6.0
- (returns) int This is some return comment
#### static bool CheckForRdk(bool throwOnFalse,bool usePreviousResult)
- (summary) 
     Determines if the RDK is loaded.
     
- (since) 5.0
- (returns) bool This is some return comment
#### static void ClearFpuExceptionStatus()
- (summary) 
     Clear FPU exception and busy flags (Intel assembly fnclex)
     
- (since) 6.0
- (returns) void This is some return comment
#### static int CreateCommands(IntPtr pPlugIn,Assembly pluginAssembly)
- (summary) 
     Parses a plugin and create all the commands defined therein.
     
- (since) 5.0
- (returns) int This is some return comment
#### static void CreateCommands(PlugIn plugin)
- (summary) 
     Parses a plugin and create all the commands defined therein.
     
- (since) 5.0
- (returns) void This is some return comment
#### static PlugIn CreatePlugIn(Type pluginType,bool printDebugMessages)
- (summary) 
     Instantiates a plug-in type and registers the associated commands and classes.
     
- (since) 5.0
- (returns) PlugIn This is some return comment
#### static string DebugDumpToString(BezierCurve bezierCurve)
- (summary) 
     Gets the debug dumps. This is a text description of the geometric contents.
     DebugDump() is intended for debugging and is not suitable for creating high
     quality text descriptions of an object.
     
- (since) 5.0
- (returns) string This is some return comment
#### static string DebugDumpToString(GeometryBase geometry)
- (summary) 
     Gets the debug dumps. This is a text description of the geometric contents.
     DebugDump() is intended for debugging and is not suitable for creating high
     quality text descriptions of an object.
     
- (since) 5.0
- (returns) string This is some return comment
#### static void DebugString(string msg)
- (summary) 
     Prints a debug message to the Rhino Command Line.
     The message will only appear if the SendDebugToCommandLine property is set to true.
     
- (since) 5.0
- (returns) void This is some return comment
#### static void DebugString(string format,object[] args)
- (summary) 
     Prints a debug message to the Rhino Command Line.
     The message will only appear if the SendDebugToCommandLine property is set to true.
     
- (since) 5.0
- (returns) void This is some return comment
#### static void DisplayOleAlerts(bool display)
- (summary) 
     Defines if Ole alerts ("Server busy") alerts should be visualized.
     This function makes no sense on Mono.
- (since) 5.0
- (returns) void This is some return comment
#### static void ExceptionReport(Exception ex)
- (summary) 
     Informs RhinoCommon of an exception that has been handled but that the developer wants to screen.
     
- (since) 5.0
- (returns) void This is some return comment
#### static void ExceptionReport(string source,Exception ex)
- (summary) 
     Informs RhinoCommon of an exception that has been handled but that the developer wants to screen.
     
- (since) 5.0
- (returns) void This is some return comment
#### static void ExecuteNamedCallback(string name,NamedParametersEventArgs args)
- (summary) 
     Execute a named callback
     
- (since) 7.0
- (returns) void This is some return comment
#### static bool FileNameEndsWithRhinoBackupExtension(string fileName)
- (summary) 
     Strip file extension from file name and check to see if it is a valid
     Rhino backup file extension.
     
- (since) 6.0
- (returns) bool This is some return comment
#### static bool FileNameEndsWithRhinoExtension(string fileName)
- (summary) 
     Strip file extension from file name and check to see if it is a valid
     Rhino file extension.
     
- (since) 6.0
- (returns) bool This is some return comment
#### static bool GetAbsolutePath(string relativePath,bool bRelativePathisFileName,string relativeTo,bool bRelativeToIsFileName,string pathOut)
- (summary) 
     Call this method to convert a relative path to an absolute path
     relative to the specified path.
     
- (since) 6.0
- (returns) bool This is some return comment
#### static IEnumerable<System.IO.DirectoryInfo> GetActivePlugInVersionFolders(bool currentUser)
- (summary) 
     Recurses through the auto install plug-in folders and returns the directories containing "active" versions of plug-ins.
     
- (since) 6.0
- (returns) IEnumerable<System.IO.DirectoryInfo> This is some return comment
#### static string[] GetAssemblySearchPaths()
- (summary) 
     Returns list of directory names where additional assemblies (plug-ins, DLLs, Grasshopper components)
     may be located
     
- (since) 5.0
- (returns) string[] This is some return comment
#### static void GetCurrentProcessInfo(string processName,Version processVersion)
- (summary) 
     Returns information about the current process. If Rhino is the top level process,
     processName is "Rhino". Otherwise, processName is the name, without extension, of the main
     module that is executing. For example, "compute.backend" or "Revit".
     
     processVersion is the System.Version of the running process. It is the FileVersion
     of the executable.
     
- (since) 6.15
- (returns) void This is some return comment
#### static Tuple<string, Type>[] GetCustomComputeEndpoints()
- (summary) 
     Used by compute to define custom endpoints
     
- (since) 7.0
- (returns) Tuple<string, Type>[] This is some return comment
#### static T GetPlatformService(string assemblyPath,string typeFullName)
- (summary) For internal use only. Loads an assembly for dependency injection via IPlatformServiceLocator.
- (since) 6.0
- (returns) T This is some return comment
#### static System.Reflection.Assembly GetRhinoDotNetAssembly()
- (summary) 
     Only works on Windows. Returns None on Mac.
     
- (since) 5.0
- (returns) System.Reflection.Assembly This is some return comment
#### static void InitializeRhinoCommon()
- (summary) 
     Makes sure all static RhinoCommon components is set up correctly.
     This happens automatically when a plug-in is loaded, so you probably won't
     have to call this method.
     
- (since) 5.0
- (returns) void This is some return comment
#### static void InitializeRhinoCommon_RDK()
- (summary) 
     Makes sure all static RhinoCommon RDK components are set up correctly.
     This happens automatically when the RDK is loaded, so you probably won't
     have to call this method.
     
- (since) 6.0
- (returns) void This is some return comment
#### static void InitializeZooClient()
- (summary) 
     Initializes the ZooClient and Rhino license manager, this should get
     called automatically when RhinoCommon is loaded so you probably won't
     have to call this method.
     
- (since) 5.6
- (returns) void This is some return comment
#### static void InPlaceConstCast(GeometryBase geometry,bool makeNonConst)
- (summary) 
     DO NOT USE UNLESS YOU ARE CERTAIN ABOUT THE IMPLICATIONS.
     This is an expert user function which should not be needed in most
     cases. This function is similar to a const_cast in C++ to allow an object
     to be made temporarily modifiable without causing RhinoCommon to convert
     the class from const to non-const by creating a duplicate.You must call this function with a True parameter, make your
     modifications, and then restore the const flag by calling this function
     again with a False parameter. If you have any questions, please
     contact McNeel developer support before using!
- (since) 5.0
- (returns) void This is some return comment
#### static bool IsManagedDll(string path)
- (summary) 
     Inspects a dll to see if it is compiled as native code or as a .NET assembly
     
- (since) 6.0
- (returns) bool This is some return comment
#### static bool IsRhinoBackupFileExtension(string fileExtension)
- (summary) 
     Check to see if the file extension is a valid Rhino file extension.
     
- (since) 6.0
- (returns) bool This is some return comment
#### static bool IsRhinoFileExtension(string fileExtension)
- (summary) 
     Check to see if the file extension is a valid Rhino file extension.
     
- (since) 6.0
- (returns) bool This is some return comment
#### static void RecordInitInstanceTime(string description)
- (summary) 
     Used to help record times at startup with the -stopwatch flag to help
     determine bottlenecks in start up speed
     
- (since) 6.0
- (returns) void This is some return comment
#### static void RegisterComputeEndpoint(string endpointPath,Type t)
- (summary) 
     Register a class that can participate as a compute endpoint
     
- (since) 7.0
- (returns) void This is some return comment
#### static bool RegisterDynamicCommand(PlugIn plugin,Command cmd)
- (summary) 
     Adds a new dynamic command to Rhino.
     
- (since) 5.0
- (returns) bool This is some return comment
#### static void RegisterNamedCallback(string name,EventHandler<NamedParametersEventArgs> callback)
- (summary) Register a named callback
- (since) 6.15
- (returns) void This is some return comment
#### static void RhinoCommonExceptionHandler(string title,object sender,Exception ex)
- (summary) 
     For internal use only!!!
     Unhanded exception handler, writes stack trace to RhinoDotNet.txt file
     
- (since) 6.0
- (returns) void This is some return comment
#### static void SendLogMessageToCloudCallbackProc(LogMessageType msg_type,IntPtr pwStringClass,IntPtr pwStringDesc,IntPtr pwStringMessage)
- (summary) 
     Informs RhinoCommon of an message that has been handled but that the developer wants to screen.
     
- (since) 6.4
- (returns) void This is some return comment
#### static void SetInShutDown()
- (summary) 
     Informs the runtime that the application is shutting down.
     
- (since) 5.0
- (returns) void This is some return comment
#### static void ShutDownRhinoCommon_RDK()
- (summary) 
     Makes sure all static RhinoCommon RDK components are de-initialized so they aren't calling into space when the RDK is unloaded.
     
- (since) 6.0
- (returns) void This is some return comment
#### static void UnhandledThreadException(object sender,ThreadExceptionEventArgs e)
- (summary) 
     Exception handler for exceptions occurring on the UI thread
     
- (since) 6.0
- (returns) void This is some return comment
