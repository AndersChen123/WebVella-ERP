﻿/* sidebar.controller.js */

/**
* @desc this controller manages the sidebar of the areas section
*/

(function () {
    'use strict';

    angular
        .module('webvellaAreas') //only gets the module, already initialized in the base.module of the plugin. The lack of dependency [] makes the difference.
        .controller('WebVellaAreasRecordViewSidebarController', controller);


    // Controller ///////////////////////////////
    controller.$inject = ['$log', '$rootScope', '$state', '$stateParams', 'resolvedCurrentParentView','resolvedCurrentView', 'resolvedCurrentEntityMeta', 
						'resolvedAreas', 'resolvedCurrentUser', '$sessionStorage','$timeout'];

    
    function controller($log, $rootScope, $state, $stateParams,resolvedCurrentParentView, resolvedCurrentView, resolvedCurrentEntityMeta, 
						resolvedAreas, resolvedCurrentUser, $sessionStorage,$timeout) {
        
		var pluginAuxPageName = ""; //temp

        var sidebarData = this;
        sidebarData.view = fastCopy(resolvedCurrentView.meta);
		if(resolvedCurrentParentView == null){
		   sidebarData.parentView = null;
		}
		else{
			sidebarData.parentView = fastCopy(resolvedCurrentParentView.meta);
		}
        sidebarData.stateParams = fastCopy($stateParams);
        sidebarData.entity = fastCopy(resolvedCurrentEntityMeta);
        sidebarData.currentUser = fastCopy(resolvedCurrentUser);
		sidebarData.$sessionStorage	= $sessionStorage;

    	//#region << Select default list >>
        sidebarData.defaultEntityAreaListName = "";
    	//get the current area meta
	    for (var j = 0; j < resolvedAreas.data.length; j++) {
	    	if (resolvedAreas.data[j].name === $stateParams.areaName) {
	    		var areaAttachments = angular.fromJson(resolvedAreas.data[j].attachments);
	    		for (var k = 0; k < areaAttachments.length; k++) {
				    if (areaAttachments[k].name === $stateParams.entityName) {
					    sidebarData.defaultEntityAreaListName = areaAttachments[k].list.name;
				    }
			    }
		    }
	    }
    	//#endregion

    	//Generate menu items list
        sidebarData.items = [];
		var viewName = 	sidebarData.view.name;
		if(sidebarData.parentView != null){
			viewName = 	sidebarData.parentView.name
		}
        var generalItem = {
        	name: viewName,
        	label: "Details",
        	iconName: "info-circle",
			type:"view"
        };
        sidebarData.items.push(generalItem);

        for (var i = 0; i < sidebarData.view.sidebar.items.length; i++) {
        	var item = {};
        	item.name = sidebarData.view.sidebar.items[i].dataName;
        	item.label = sidebarData.view.sidebar.items[i].fieldLabel;
			item.type = sidebarData.view.sidebar.items[i].type;
        	if (sidebarData.view.sidebar.items[i].type === "view" || sidebarData.view.sidebar.items[i].type === "viewFromRelation") {
        		item.iconName = "file-text-o";
        		if (sidebarData.view.sidebar.items[i].meta.iconName) {
        			item.iconName = sidebarData.view.sidebar.items[i].meta.iconName;
        		}
        	}
        	else if (sidebarData.view.sidebar.items[i].type === "list" || sidebarData.view.sidebar.items[i].type === "listFromRelation") {
        		item.iconName = "list";
        		if (sidebarData.view.sidebar.items[i].meta.iconName) {
        			item.iconName = sidebarData.view.sidebar.items[i].meta.iconName;
        		}
        	}
        	sidebarData.items.push(item);
        }

        sidebarData.isItemActive = function (item) {
			if(item.type == "view"){
				if(sidebarData.parentView == null && item.name == sidebarData.view.name ){ //the main details
					return true;
				} 
				else {
					return false;
				}
			}
			if(item.type == "viewFromRelation"){
				if(item.name == sidebarData.view.name){
					return true;
				} 
				else {
					return false;
				}
			}
			if(item.type == "list" || item.type == "listFromRelation"){
				if(item.name == sidebarData.stateParams.listName){
					return true;
				} 
				else {
					return false;
				}
			}
        	return false;
        }

		sidebarData.goBack = function(){
			var useSessionBackUrl = false;
			if(sidebarData.$sessionStorage["last-list-params"]){
				//Check if the entity and the list name are the same
				var storedParams = sidebarData.$sessionStorage["last-list-params"];
				if(storedParams.areaName == sidebarData.stateParams.areaName &&  storedParams.entityName == sidebarData.stateParams.entityName){
					 useSessionBackUrl = true;
				}
			}
			
			if(useSessionBackUrl){
				$timeout(function () {
                    $state.go('webvella-area-list-general',sidebarData.$sessionStorage["last-list-params"]);
                }, 0);
			}
			else {
				var defaultParams = {};
				defaultParams.areaName = sidebarData.stateParams.areaName;
				defaultParams.entityName = sidebarData.stateParams.entityName;
				defaultParams.listName = sidebarData.defaultEntityAreaListName;
				defaultParams.page = 1;

			   	$timeout(function () {
                    $state.go('webvella-area-list-general',defaultParams);
                }, 0);
			}
			//href="#/areas/{{::sidebarData.stateParams.areaName}}/{{::sidebarData.stateParams.entityName}}/{{::sidebarData.defaultEntityAreaListName}}/1"
		}
    }

})();
