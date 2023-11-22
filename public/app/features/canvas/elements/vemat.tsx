import React from 'react';

import { CanvasElementItem, CanvasElementProps } from 'app/features/canvas';
import { DimensionContext } from 'app/features/dimensions';
import { TextDimensionEditor } from "app/features/dimensions/editors";



interface VematData {
    address?: any;
    z1?: any;
    z2?: any;
    z3?: any;
    z4?: any;
    offline?: any;
    isrunning?: any;
    name?: any;
    highlighted?: boolean;
}
  
interface VematConfig {
    address?: any;
    z1?: any;
    z2?: any;
    z3?: any;
    z4?: any;
    offline?: any;
    isrunning?: any;
    name?: any;
    highlighted?: boolean;
}

const VematDisplay = ({ data }: CanvasElementProps<VematConfig, VematData>) => {

    // Barvy
    const WHITE = "#FFFFFF";
    const GREY = "#A6A6A6";
    const RED = "#E51A17";
    const ORANGE = "#E6B214";
    const GREEN = "#11E60E";

    // Určení barvy pro BACKGRND
    
    let BACKGRND;
    if (data?.isrunning === true) {
        BACKGRND = GREEN;
    } else if (data?.isrunning === false && data?.offline === false) {
        BACKGRND = ORANGE;
    } else if (data?.offline === true) {
        BACKGRND = RED;
    }

    // Určení barvy pro MACHINE
    const MACHINE = data?.offline === true ? GREY : WHITE;

    // Určení barvy pro Z1 až Z4
    const determineZoneColor = (zoneValue: boolean) => {
        if (data?.offline === true) {
            return GREY;
        }
        return zoneValue === true ? RED : GREEN;
    };

    const Z1 = determineZoneColor(data?.z1);
    const Z2 = determineZoneColor(data?.z2);
    const Z3 = determineZoneColor(data?.z3);
    const Z4 = determineZoneColor(data?.z4);
    
    const savedHighlights = JSON.parse(localStorage.getItem('highlights') || '{}');
    let highlighted = "0";
    if (savedHighlights[data?.address]) {
        highlighted = "15";
    }
    
//<rect width="200" height="102" fill="red" stroke="red"/> 
    return (
        <svg viewBox="-10 -10 220 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            <path id="BACKGRND" d="M0 25C0 11.1929 11.1929 0 25 0H175C188.807 0 200 11.1929 200 25V75C200 88.8071 188.807 100 175 100H25C11.1929 100 0 88.8071 0 75V25Z" fill={BACKGRND} stroke="red" strokeWidth={highlighted}/>
            <path id="BACKGRND" d="M0 25C0 11.1929 11.1929 0 25 0H175C188.807 0 200 11.1929 200 25V75C200 88.8071 188.807 100 175 100H25C11.1929 100 0 88.8071 0 75V25Z" fill={BACKGRND}/>
            <path id="MACHINE" d="M0 70C0 58.9543 8.95431 50 20 50H180C191.046 50 200 58.9543 200 70V80C200 91.0457 191.046 100 180 100H20C8.95431 100 0 91.0457 0 80V70Z" fill={MACHINE} stroke="black" strokeWidth="1"/>
            <circle id="Z4" cx="177" cy="75" r="20" fill={Z4} stroke="black" strokeWidth="1"/>
            <circle id="Z3" cx="126" cy="75" r="20" fill={Z3} stroke="black" strokeWidth="1"/>
            <circle id="Z2" cx="75" cy="75" r="20" fill={Z2} stroke="black" strokeWidth="1"/>
            <circle id="Z1" cx="24" cy="75" r="20" fill={Z1} stroke="black" strokeWidth="1"/>
            <text id="ID" x="150" y="35" fontSize="16" fill="black">@{data?.address}</text>
            <text id="NAME" x="15" y="35" fontSize="16" fill="black">{data?.name}</text>
        </svg>
    );
};

  export const vematItem: CanvasElementItem<any, any> = {
    id: 'vemat',
    name: 'Vemat',
  
    display: VematDisplay,
  
    defaultSize: {
      width: 200,
      height: 100,
    },
  
    registerOptionsUI: (builder) => {
        //TODO
      const category = ['Vemat'];
      builder.addCustomEditor({
        category,
        id: 'address',
        path: 'config.address',
        name: 'address',
        editor: TextDimensionEditor,
      });
    },
  
    getNewOptions: (options) => ({
      ...options,
      background: {
        color: {
          fixed: 'transparent',
        },
      },
      placement: {
        width: options?.placement?.width ?? 200,
        height: options?.placement?.height ?? 100,
        top: options?.placement?.top,
        left: options?.placement?.left,
      },
    }),
  
    prepareData: (ctx: DimensionContext, cfg: VematConfig) => {
      const data: VematData = {
        //status: cfg?.status && ctx.getText(cfg.status).field?.values || [],
        address: cfg?.address ? ctx.getText(cfg.address).value() : '',
      };

      const panelData = ctx.getPanelData();
      if (panelData && panelData.series && panelData.series.length > 0) {
        //console.log(panelData.series[0].fields);
           
        let targetField = panelData.series[0].fields.find(field => field.name === "address");
        const numericAddress = Number(data?.address);

        if (targetField) {
                const addressIndex = targetField.values.indexOf(numericAddress);
                if (addressIndex !== -1) {
                    //console.log(`Index hodnoty address je: ${addressIndex}`);

                    panelData.series[0].fields.forEach(field => {
                        switch (field.name) {
                            case "input1":
                                // Akce pro name = "input1"
                                data.z1 = field.values[addressIndex];
                                break;
                            case "input2":
                                // Akce pro name = "input2"
                                data.z2 = field.values[addressIndex];
                                break;
                            case "input3":
                                // Akce pro name = "input2"
                                data.z3 = field.values[addressIndex];
                                break;
                            case "input4":
                                // Akce pro name = "input2"
                                data.z4 = field.values[addressIndex];
                                break;
                            case "isRunning":
                                // Akce pro name = "input2"
                                data.isrunning = field.values[addressIndex];
                                break;
                            case "offline":
                                // Akce pro name = "input2"
                                data.offline = field.values[addressIndex];
                                break;
                            case "name":
                                // Akce pro name = "input2"
                                data.name = field.values[addressIndex];
                                break;
                            case "highlighted":
                                // Akce pro name = "input2"
                                //data.highlighted = field.values[addressIndex];
                                //console.log("ata.highlighted", data.highlighted)
                                break;
                            default:
                                // Akce pro všechny ostatní hodnoty name, které nejsou výše uvedené
                                break;
                        }
                    });
                } else {
                    //console.log("Hodnota address nebyla nalezena v poli values.");
                }
            } else {
                //console.log("Pole s názvem 'address' nebylo nalezeno.");
        }
       }
       //console.log(vematItem);
      return data;
    },
  };
