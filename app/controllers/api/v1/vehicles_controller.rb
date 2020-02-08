class Api::V1::VehiclesController < ApplicationController
    def index
        vehicles = Vehicle.all

        render json: {
            data: [vehicles],
            status: :ok
        }
    end

    def create
        @vehicle = Vehicle.new(vehicle_params)

        if @vehicle.save
            render json: {
                data: [@vehicle]
            }
        end
    end




    private

    def vehicle_params
        params.require(:vehicle).permit(:year, :make, :model, :mileage, :user_id)
    end
end