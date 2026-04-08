from pydantic import BaseModel
from typing import List, Optional

class ProjectBase(BaseModel):
    title: str
    description: str
    image_url: Optional[str] = None
    demo_url: Optional[str] = None
    repo_url: Optional[str] = None
    tags: Optional[str] = None
    is_featured: Optional[bool] = False

class ProjectCreate(ProjectBase):
    pass

class Project(ProjectBase):
    id: int

    class Config:
        orm_mode = True

class TestimonialBase(BaseModel):
    name: str
    role: str
    content: str
    avatar_url: Optional[str] = None

class TestimonialCreate(TestimonialBase):
    pass

class Testimonial(TestimonialBase):
    id: int

    class Config:
        orm_mode = True
