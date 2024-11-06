export const menus = [
  {
    parent: 'pageNav.workspace.workloads.deployments-detail',
    name: 'metrics-server',
    icon: 'SmcDuotone',
    clusterModule: 'metrics-server',
    title: 'metricsServer.title',
    order: 5,
    actionType: 'modal',
    actionValue: 'pageNav://pageNav.workspace.workloads.deployments-detail.metrics-server',
  },
  {
    parent: 'pageNav.workspace.workloads.statefulsets-detail',
    name: 'metrics-server',
    icon: 'SmcDuotone',
    clusterModule: 'metrics-server',
    title: 'metricsServer.title',
    order: 5,
    actionType: 'modal',
    actionValue: 'pageNav://pageNav.workspace.workloads.statefulsets-detail.metrics-server',
  },
  {
    parent: 'pageAction.cluster.deployments.detail',
    name: 'metrics-server',
    icon: 'SmcDuotone',
    clusterModule: 'metrics-server',
    title: 'metricsServer.title',
    action: 'edit',
    order: 5,
    actionType: 'modal',
    actionValue: 'pageAction://pageAction.cluster.deployments.detail.metrics-server',
  },
];
