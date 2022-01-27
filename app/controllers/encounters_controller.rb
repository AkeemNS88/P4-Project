class EncountersController < ApplicationController

    def index
        render json: Encounter.all
    end

    def show
        encounter = find_encounter
        render json: encounter
    end

    def update
        encounter = find_encounter
        encounter.update!(encounter_params)
        render json: encounter
    end

    private

    def encoEncounter_params
        params.permit(:name)
    end

    def record_not_found
        render json: {error: "Encounter not found"}, status: 404
    end

    def find_encounter
        Encounter.find(params[:id])
    end
end
