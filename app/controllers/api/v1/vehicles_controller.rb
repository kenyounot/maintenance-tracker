class Api::V1::VehiclesController < ApplicationController
    def create
        @vehicle = Vehicle.new(vehicle_params)

        if @vehicle.save
            render json: {
                data: @vehicle
            }
        end
    end

    def user_vehicles
        vehicles = current_user.vehicles
    
        render json: {
            vehicles: vehicles,
            status: :ok
        }
    end
  
    private

    def vehicle_params
        params.require(:vehicle).permit(:year, :make, :model, :mileage, :user_id)
    end
end