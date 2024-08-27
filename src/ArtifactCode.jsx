import React, { useState } from 'react';
import { Map, ZoomIn, ZoomOut, Layers, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

const MapPlatform = () => {
  const [layers, setLayers] = useState({
    demographic: true,
    traffic: false,
    poi: true,
  });

  const toggleLayer = (layer) => {
    setLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 shadow-lg">
        <div className="flex items-center mb-6">
          <Map className="w-6 h-6 mr-2 text-blue-500" />
          <h1 className="text-xl font-bold">MapPlatform</h1>
        </div>
        
        {/* Search */}
        <div className="mb-6">
          <Input type="text" placeholder="Search location..." className="w-full" />
        </div>
        
        {/* Layers */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Layers</h2>
          <div className="space-y-2">
            {Object.entries(layers).map(([layer, active]) => (
              <div key={layer} className="flex items-center justify-between">
                <span className="capitalize">{layer}</span>
                <Switch checked={active} onCheckedChange={() => toggleLayer(layer)} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 relative">
        {/* Placeholder for the map */}
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-lg">Map View</span>
        </div>
        
        {/* Map controls */}
        <div className="absolute top-4 right-4 space-y-2">
          <Button size="icon" variant="secondary">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary">
            <Layers className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MapPlatform;
