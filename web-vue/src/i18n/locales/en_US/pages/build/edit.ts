export default {
  c: {
    buildMethod: 'Build method',
    name: 'Name',
    selectRepository: 'Select repository',
    chooseRepository: 'Choose repository',
    supportWildcard: 'Support wildcard',
    matchOneCharacter: 'Match one character',
    matchZeroOrMoreCharacters: 'Match zero or more characters',
    matchZeroOrMoreDirectories: 'Match zero or more directories in the path',
    configuration: 'Configuration',
    configurationExample: 'Configuration example',
    publishOperation: 'Publish operation',
    secondLevelDirectory: 'Second level directory',
    sshNotConfigured: 'If SSH is not configured, the authorized directory cannot be selected',
    selectSSH: 'Select SSH',
    sshDirectoryConfiguration:
      'If multiple SSH are selected, only the first item in the directory below is displayed, but the authorized directory needs to ensure that each item is configured with the corresponding directory',
    yes: 'Yes',
    no: 'No',
    selectScript: 'Select script',
    chooseScript: 'Choose script',
    cancel: 'Cancel',
    confirm: 'Confirm'
  },
  p: {
    loadingBuildData: 'Loading build data',
    howToChooseBuildMethod: 'How to choose build method',
    viewAvailableContainers: 'View available containers',
    availableTags: 'Available tags',
    loadingContainerTags: 'Loading container tags',
    noContainerOrTag: 'No container or tag is configured, cannot use container build',
    containerBuildNote: 'Container build note',
    groupName: 'Group name:',
    addGroup: 'Add group',
    selectGroup: 'Select group',
    sourceRepository: 'Source repository',
    branch: 'Branch',
    customBranchWildcard: 'Custom branch wildcard expression',
    selectBranchForBuild: 'Select the branch for build, required',
    tag: 'Tag',
    customTagWildcard: 'Custom tag wildcard expression',
    selectTagForBuild: 'Select the tag for build, default to the latest commit if not selected',
    cloneDepth: 'Clone depth',
    customCloneDepth: 'Custom clone depth, to avoid cloning the entire large repository',
    buildCommand: 'Build command',
    commonBuildCommandExample: 'Common build command example',
    scriptTemplate: 'Script template',
    content: 'Content',
    buildDslConfigContent:
      'Please fill in the build DSL configuration content, you can click the tab above to switch and view the configuration example',
    artifactDirectory: 'Artifact directory',
    onlyUseFirstMatched: 'Currently only use the first matched item',
    noBuildMethodSelected: 'No build method selected',
    environmentVariables: 'Environment variables',
    enterBuildEnvVars: 'Enter build environment variables: xx=abc, multiple variables can be entered with line breaks',
    executionMethod: 'Execution method',
    default: 'Default',
    multiThread: 'Multi-thread',
    experimentalFeature: 'This option is an experimental attribute, the actual effect is basically no difference',
    selectPublishMethod: 'Select publish method',
    noPublish: 'Do not publish: only execute the build process and save the build history',
    noPublishProcess: 'Do not execute the publish process',
    distributeProject: 'Distribute project',
    selectDistributeProject: 'Select the project to distribute',
    useNodeDistributeConfig: 'If not filled, use the second-level directory of the node distribution configuration',
    publishProject: 'Publish project',
    selectNodeProject: 'Select the node project',
    publishPostOperation: 'Select the operation after publishing',
    publishToRoot: 'If not filled, publish to the root directory of the project',
    publishViaSSH: 'Publish via SSH',
    publishDirectory: 'Publish directory',
    prePublishCommand: 'Pre-publish command',
    nonMandatory: 'Optional',
    postPublishCommand: 'Post-publish command',
    mandatory: 'Mandatory',
    clearPublish: 'Clear publish',
    diffPublish: 'Diff publish:',
    preStopPublish: 'Stop before publishing:',
    executeContainer: 'Execute container',
    executeContainerTag: 'Execute container tag',
    dockerfilePath:
      'A Dockerfile is required in the repository, if multiple folders are viewed, you can specify the second-level directory, such as springboot-test-jar:springboot-test-jar/Dockerfile',
    imageTag: 'Image tag',
    containerTag:
      'Container tag, such as xxxx:latest, multiple tags are separated by commas, additional environment variable files are supported to load .env files in the repository directory, such as xxxx:${VERSION}',
    buildParams: 'Build parameters',
    buildParamsInput: 'Build parameters, such as key1=value1&keyvalue2, use URL encoding',
    imageTagInput: 'Image tag, such as key1=value1&keyvalue2, use URL encoding',
    publishCluster: 'Publish cluster',
    dockerSwarmCluster:
      'Currently using the Docker Swarm cluster, you need to create a Swarm cluster first before you can select it',
    selectClusterForPublish: 'Select the Docker cluster to publish to',
    noClusterPublish: 'Do not publish to the Docker cluster',
    pushToRepository: 'Whether to push the built image to the remote repository after the image is built successfully',
    versionIncrement: 'Version increment',
    noCacheBuild: 'Do not use cache in the process of building the image',
    updateImage: 'Update image',
    attemptToUpdateBaseImage: 'Attempt to update the new version of the base image when building the image',
    clusterService: 'Cluster service',
    selectServiceForPublish:
      'Select the service name to publish to the cluster, you need to create the service in the cluster in advance',
    cacheBuild: 'Cache build',
    retainBuildArtifacts: 'Retain artifacts:',
    diffBuild: 'Diff build:',
    strictExecution: 'Strict execution:',
    buildProcessRequest: 'Build process request, optional, GET request',
    eventScript: 'Event script',
    resetSelection: 'Reset selection',
    additionalEnvVars: 'Additional environment variables',
    additionalEnvVarsInput: 'Additional environment variables, add multiple with commas',
    fileManagementCenter: 'File management center',
    syncToFile:
      'If synchronization to the file management center is enabled, the build and publish process will automatically execute the synchronization to the file management center operation.',
    sync: 'Sync',
    noSync: 'Do not sync',
    publishHiddenFiles: 'Publish hidden files',
    defaultIgnoreHiddenFiles: 'By default, build errors will automatically ignore hidden files',
    publishAllFiles: 'After enabling this option, hidden files can be published normally',
    retainDays: 'Retention days',
    retainCount: 'Retention count',
    aliasCode: 'Alias code',
    aliasCodeInput: 'If artifacts are synchronized to the file center, the current value will be shared',
    enterAliasCode: 'Enter alias code',
    generateAliasCode: 'Generate randomly',
    retainDaysForArtifacts: 'Retention days for artifacts synchronized to the file center',
    excludePublish: 'Exclude publish',
    excludePublishAntExpression: 'Use ANT expression to filter specified directories for publishing exclusion',
    viewContainer: 'View container',
    buildCommandExample: 'Build command example',
    buildName: 'Please enter build name',
    buildMethod: 'Please select build method',
    publishAction: 'Please select publish operation',
    selectBranch: 'Please select branch',
    writeBuildCommand: 'Please enter build command',
    writeArtifactDirectory: 'Please enter artifact directory',
    repositorySelection: 'Please select the repository for build',
    basicInfo: 'Basic information',
    buildProcess: 'Build process',
    additionalConfig: 'Additional configuration',
    unknown: 'Unknown',
    nodeProjectSelection:
      'Please select node project, there may be no projects in the node, you need to create a project in the node',
    buildArtifactsPath:
      "Build artifacts path, relative to the repository path, such as java project's target/xxx.jar, vue project's dist",
    postBuildActions: 'Post-build actions',
    uploadToDirectory: 'Upload build artifacts to the corresponding directory',
    dockerfilePathTip: 'Folder path, a Dockerfile is required in the repository',
    containerTags: 'Container tags, such as: xxxx:latest. Multiple tags are separated by commas.',
    buildParamsTip: 'Build parameters, for example: key1=value1&key2=value2',
    imageTags: 'Image tags:',
    imageTagParamsTip: 'Image tag parameters, for example: key1=value1&key2=value2',
    pushToRepositoryLabel: 'Push to repository',
    selectedServiceForPublish: 'Please select the service name for publishing to the cluster',
    cacheBuildDirectory:
      'Enabling cache for the build directory will retain repository files. A second build will pull the code. Without cache, the repository code will be re-pulled for each build (large projects are not recommended to disable cache).',
    retainBuildArtifactsInfo:
      'Retaining artifacts means whether to keep the build result files after the build is completed, for rollback purposes.',
    incrementalBuild:
      'Incremental build means whether to determine if there are changes in the repository code during the build. If there are no changes, the build will not be executed.',
    timedBuild: 'Scheduled build',
    cronExpression:
      'If you need to schedule automatic builds, fill in the cron expression. By default, the second level is not enabled (you need to modify the [system.timerMatchSecond] in the configuration file).',
    retentionDays: 'Retention days:',
    exclusionForPublish: 'Exclude ANT expression for publishing, multiple expressions are separated by commas.'
  }
}
