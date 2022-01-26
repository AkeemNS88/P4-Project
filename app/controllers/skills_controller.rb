class SkillsController < ApplicationController

    def index
        render json: Skill.all
    end

    def show
        skill = find_skill
        render json: skill
    end

    def update
        skill = find_skill
        skill.update(skill_params)
        render json: skill
    end

    private

    def skill_params
        params.permit(:name)
    end

    def record_not_found
        render json: {error: "Skill not found"}, status: 404
    end

    def find_skill
        Skill.find(params[:id])
    end
end
